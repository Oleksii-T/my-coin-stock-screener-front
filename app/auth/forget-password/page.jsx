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
  const initialValues = { email: '' };
  const formUrl = 'forget-password';
  const onSuccess = async responseData => {
    toast.success(responseData.message);
    redirect(`/auth/reset-password?email=${formData.email}`);
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
          <CardDescription>Enter your email below to start reset password process.</CardDescription>
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
              <Button type="submit" className="w-full" onClick={handleSubmit} isLoading={isLoading}>
                Send reset password code
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
