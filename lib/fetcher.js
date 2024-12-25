class Fetcher {
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
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
        ...headers, // Merge custom headers
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(fullUrl, config);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong.");
      }

      return response.json(); // Automatically parse JSON
    } catch (err) {
      console.error("API Error:", err.message);
      throw err; // Re-throw error for handling
    }
  }

  // GET method
  get(endpoint, params = {}, headers = {}) {
    return this.request(endpoint, { method: "GET", headers, params });
  }

  // POST method
  post(endpoint, body, headers = {}) {
    return this.request(endpoint, { method: "POST", headers, body });
  }

  // PUT method
  put(endpoint, body, headers = {}) {
    return this.request(endpoint, { method: "PUT", headers, body });
  }

  // DELETE method
  delete(endpoint, body = null, headers = {}) {
    return this.request(endpoint, { method: "DELETE", headers, body });
  }
}

// Export an instance of Fetcher with the base URL
const fetcher = new Fetcher();
export default fetcher;
