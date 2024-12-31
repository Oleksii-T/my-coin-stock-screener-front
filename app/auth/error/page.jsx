'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Server Error</CardTitle>
          <CardDescription>An unexceted server error occured.</CardDescription>
          <CardDescription>Please check your connection.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Button type="submit" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Have a question?{' '}
            <Link href="/contact-us" className="underline underline-offset-4">
              Contact Us
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
