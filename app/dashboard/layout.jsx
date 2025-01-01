'use client';

import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/app-sidebar';
import { BreadcrumbProvider } from '@/context/BreadcrumbContext';
import { Separator } from '@/components/ui/separator';
import { Breadcrumbs } from '@/components/Dashboard/breadcrumbs';
import { NavActions } from '@/components/Dashboard/nav-actions';
import { useEffect } from 'react';
import useUserStore from '@/store/userSrore';
import fetcher from '@/lib/fetcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetcher.get('/profile');
      const responseData = await response.json();
      setUser(responseData.data.user);
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="flex flex-col gap-[20px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-solid border-orange-500"></div>
              <div>Loading...</div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        <BreadcrumbProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-14 shrink-0 items-center gap-2">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumbs />
                </div>
                <div className="ml-auto px-3">
                  <NavActions />
                </div>
              </header>

              {children}
            </SidebarInset>
          </SidebarProvider>
        </BreadcrumbProvider>
      </body>
    </html>
  );
}
