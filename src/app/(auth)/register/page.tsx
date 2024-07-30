'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '../../../../public/favicon.jpg';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormValues, registerSchema } from '@/app/schemas/signupSchema';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    });
    const resData = await res.json();
    console.log(resData);
    console.log(data);

    if (!resData.success) {
      toast({
        title: resData.message,
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: resData.message,
      variant: 'success',
    });
    router.replace('/dashboard');
  };
  return (
    <>
      {/* <div className="flex h-screen flex-row"> */}
      {/* <div className="basis-[50%]"></div> */}
      <div className="">
        <div className="mx-auto mt-32 px-4 md:px-0">
          <div className="flex justify-center">
            <Image src={logo} alt="favicon icon" height={40} width={40} />
          </div>

          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-muted-foreground">
                Create your account to get started.
              </p>
              {/* <div className="mx-auto flex gap-3">
            <p>Already have an account?</p>
            <span className="cursor-pointer">Login</span>
          </div> */}
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
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
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="flex items-center justify-center space-x-2">
              <span>Already have an account?</span>
              <Link href={'/login'} className="text-blue-800">
                Login here!
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
