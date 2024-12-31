import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

class Fetcher {
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  // Helper to construct the full URL
  constructUrl(endpoint) {
    return `${this.baseURL}/${endpoint}`;
  }

  // Helper for making requests
  async request(endpoint, { method, headers = {}, body = null, params = {} }) {
    const url = this.constructUrl(endpoint);

    // Handle query parameters
    const query = new URLSearchParams(params).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    const config = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      credentials: 'include', // for session based auth
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    var response;

    try {
      response = await fetch(fullUrl, config);
    } catch (error) {
      // only on connection error
      redirect('/auth/error');
    }

    if (response.status === 401) {
      const responseData = await response.json();
      toast.error(responseData.data.message);
      redirect('/auth/login');
    }

    if (response.status === 412) {
      const responseData = await response.json();
      toast.error(responseData.data.message);
      redirect('/auth/verify-email');
    }

    return response;
  }

  // GET method
  get(endpoint, params = {}, headers = {}) {
    return this.request(endpoint, { method: 'GET', headers, params });
  }

  // POST method
  async post(endpoint, body, headers = {}) {
    return await this.request(endpoint, { method: 'POST', headers, body });
  }

  // PUT method
  put(endpoint, body, headers = {}) {
    return this.request(endpoint, { method: 'PUT', headers, body });
  }

  // DELETE method
  delete(endpoint, body = null, headers = {}) {
    return this.request(endpoint, { method: 'DELETE', headers, body });
  }
}

// Export an instance of Fetcher with the base URL
const fetcher = new Fetcher();
export default fetcher;
