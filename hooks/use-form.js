'use client';

import { useState } from 'react';
import fetcher from '@/lib/fetcher';

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
        parseErrors(responseData.errors);
        return;
      } else if (response.status !== 200) {
        //TODO: show tost error
        console.log('TOAST GENERAL ERROR'); //! LOG
        return;
      } else {
        await onSuccess(responseData);
      }
    }

    setIsLoading(false);
  };

  const parseErrors = responseErrors => {
    const errors = {};

    responseErrors.forEach(error => {
      errors[error.path] = error.msg;
    });

    setFormErrors(errors);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    formErrors,
  };
}
