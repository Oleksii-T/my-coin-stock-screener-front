'use client';

import { useState } from 'react';
import fetcher from '@/lib/fetcher';
import { toast } from 'react-toastify';

export function useForm({ initialValues, onSubmit, onSuccess, formUrl }) {
  const [formData, setFormData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setFormErrors(null);

    if (onSubmit) {
      await onSubmit(formData);
    } else {
      const response = await fetcher.post(formUrl, formData);
      const responseData = await response.json();

      if (response.status === 422) {
        // toast.error(responseData.message);
        setFormErrors(responseData.data);
      } else if (response.status !== 200) {
        toast(responseData.message || 'Server Error');
      } else {
        await onSuccess(responseData);
      }
    }

    setIsLoading(false);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    formErrors,
  };
}
