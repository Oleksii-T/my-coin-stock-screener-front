"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "@/hooks/use-form";
import fetcher from "@/lib/fetcher";

export default function LoginPage() {
  const onSubmit = async (formData) => {
    console.log("onSubmit:", formData);
    const response = await fetcher.post("/auth/login", formData);

    console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Invalid email or password.");
    }

    const data = await response.json();
    console.log("Login successful:", data);
    // Save token or perform further actions
  };

  const { values, handleChange, handleSubmit, isLoading, error } = useForm(
    { email: "", password: "" },
    onSubmit
  );

  return (
    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Log In</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Have a question or need assistance? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <Input
                type="text"
                label="Email"
                name="email"
                onChange={handleChange}
                placeholder="example@mail.com"
              ></Input>
              <Input
                type="password"
                label="Password"
                name="password"
                onChange={handleChange}
                placeholder="******"
              ></Input>

              <div className="text-center">
                <Button onClick={handleSubmit}>Log In</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
