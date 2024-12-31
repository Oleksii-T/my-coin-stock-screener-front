import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, label, error, ...props }, ref) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          error ? 'border-red-500 focus-visible:ring-red-500' : 'border-input focus-visible:ring-ring',
          className
        )}
        ref={ref}
        {...props}
      />
      <span className="absolute top-full left-0 text-destructive text-xxs">{error}</span>
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
