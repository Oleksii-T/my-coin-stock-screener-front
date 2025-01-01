'use client';

import { createContext, useContext, useState } from 'react';

// Create Breadcrumb Context
const BreadcrumbContext = createContext();

// Provide Breadcrumb Context
export function BreadcrumbProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</BreadcrumbContext.Provider>;
}

// Hook to use Breadcrumb Context
export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}
