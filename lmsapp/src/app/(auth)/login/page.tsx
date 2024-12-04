"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Form submitted: ", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 space-y-6 dark:bg-gray-900 bg-gray-100 rounded-lg">
        <h1 className="text-3xl font-bold">Login to your account</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your credentials below to log in
        </p>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="w-full">
            GitHub
          </Button>
          <Button variant="outline" className="w-full">
            Google
          </Button>
        </div>

        <Separator className="my-6 flex items-center">
          <span className="mx-auto px-2 text-gray-500 text-sm text-center dark:text-gray-300">
            OR CONTINUE WITH
          </span>
        </Separator>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        {/* Register Link */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="font-medium text-blue-600 dark:text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
