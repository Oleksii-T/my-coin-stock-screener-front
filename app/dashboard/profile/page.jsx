'use client';

import { useEffect } from 'react';
import { useBreadcrumb } from '@/context/BreadcrumbContext';

export default function ProfilePage() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'Profile', link: '/dashboard/profile' },
    ]);
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
