'use client';

import fetcher from '@/lib/fetcher';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from '@/hooks/use-form';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [isLoadingResend, setIsLoadingResend] = useState(false);
  const initialValues = { code: '' };
  const formUrl = 'verify-email';
  const onSuccess = async responseData => {
    toast.success(responseData.message);
    redirect('/dashboard');
  };

  const { formData, handleChange, handleSubmit, isLoading, formErrors } = useForm({
    initialValues,
    formUrl,
    onSuccess,
  });

  const resend = async () => {
    setIsLoadingResend(true);
    const response = await fetcher.post('resend-verify-email');
    const responseData = await response.json();
    toast.success(responseData.message);
    setIsLoadingResend(false);
  };

  const logOut = async () => {
    const response = await fetcher.post('logout');
    redirect('/auth/login');
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Verify Account</CardTitle>
          <CardDescription>Enter the code from email to verify your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Code</Label>
                  <Button variant="link" isLoading={isLoadingResend} onClick={resend}>
                    Resent code
                  </Button>
                </div>
                <Input
                  onChange={handleChange}
                  name="code"
                  id="code"
                  type="text"
                  placeholder="******"
                  error={formErrors?.code}
                  required
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleSubmit} isLoading={isLoading}>
                Verify
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <a href="#" onClick={logOut} className="underline underline-offset-4">
                Log out
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
