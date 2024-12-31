'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from '@/hooks/use-form';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function LoginPage() {
  const formUrl = 'reset-password';
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const initialValues = { email: email, code: '', password: '', password_confirmation: '' };
  const onSuccess = async responseData => {
    toast.success(responseData.message);
    redirect('/auth/login');
  };

  const { formData, handleChange, handleSubmit, isLoading, formErrors } = useForm({
    initialValues,
    formUrl,
    onSuccess,
  });

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter code from email and new password to reset your password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={formData.email}
                  onChange={handleChange}
                  error={formErrors?.email}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  disabled
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Code</Label>
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="*********"
                  error={formErrors?.password}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password_confirmation">Confirm Password</Label>
                </div>
                <Input
                  onChange={handleChange}
                  name="password_confirmation"
                  id="password_confirmation"
                  type="password"
                  placeholder="*********"
                  error={formErrors?.password_confirmation}
                  required
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleSubmit} isLoading={isLoading}>
                Reset password
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Remember password?{' '}
              <Link href="/auth/login" className="underline underline-offset-4">
                Log In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
