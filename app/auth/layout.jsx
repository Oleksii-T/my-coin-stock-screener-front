'use client';

import '@/app/dashboard/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 200);
  //   return () => clearTimeout(timer);
  // }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">{children}</div>
        </div>
        <ToastContainer theme="dark" autoClose={3000} />
      </body>
    </html>
  );
}
