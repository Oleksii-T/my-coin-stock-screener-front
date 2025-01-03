'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from '@/hooks/use-form';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function LoginPage() {
  const initialValues = { email: '', password: '' };
  const formUrl = 'login';
  const onSuccess = async responseData => {
    toast.success(responseData.message);
    redirect('/dashboard');
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
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleChange}
                  error={formErrors?.email}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forget-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
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
              <Button type="submit" className="w-full" onClick={handleSubmit} isLoading={isLoading}>
                Login
              </Button>
              <Button variant="outline" className="w-full" disabled>
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/auth/registration" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
