'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import logo from '../../../../public/favicon.jpg';
import Image from 'next/image';
import { LoginFormValues, loginSchema } from '@/app/schemas/loginSchema';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log('res from signIn method', res);

    if (res?.error) {
      let errorMessage = 'An unknown error occurred';
      if (res.error === 'User does not exist') {
        errorMessage = 'User does not exist! :(';
      } else if (res.error === 'Invalid credentials') {
        errorMessage = 'Invalid credentials! :( ';
      }

      toast({
        title: errorMessage,
        variant: 'warn',
      });
      return;
    }

    toast({
      title: 'Logged In Successfully!',
      variant: 'success',
    });

    router.replace('/');
  };

  return (
    <div className="mx-auto mt-32 px-4 md:px-0">
      <div className="flex justify-center">
        <Image src={logo} alt="favicon icon" height={40} width={40} />
      </div>

      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Enter your email and password to sign in to your account.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="12345678"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="flex w-full items-center justify-center"
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <FaGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
        <div className="flex items-center justify-center space-x-2">
          <span>Don&#39;t have an account?</span>
          <Link href={'/register'} className="text-blue-800">
            Register here!
          </Link>
        </div>
      </div>
    </div>
  );
}
