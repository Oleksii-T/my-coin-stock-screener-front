"use client";

import { useState } from "react";

export function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    console.log("handleChange"); //! LOG
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit"); //! LOG
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(values); // Pass form values to the provided submit function
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  };
}
