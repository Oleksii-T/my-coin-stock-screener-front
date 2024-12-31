'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from '@/hooks/use-form';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const initialValues = { fisrtName: '', lastName: '', email: '', password: '', password_confirmation: '' };
  const formUrl = 'register';
  const onSuccess = async responseData => {
    toast.success(responseData.message);
    redirect('/auth/verify-email');
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
          <CardTitle className="text-2xl">Registration</CardTitle>
          <CardDescription>Enter your information below to register your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">First Name</Label>
                <Input
                  onChange={handleChange}
                  error={formErrors?.firstName}
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  onChange={handleChange}
                  error={formErrors?.lastName}
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
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
                Register
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
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
