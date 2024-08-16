'use client';
import { Button } from '@/components/ui/button';
import logo from '../../../../public/favicon.jpg';
import Image from 'next/image';
import { registerSchema } from '@/app/schemas/signupSchema';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { z } from 'zod';
import CustomForm from '@/components/custom/CustomForm';

export default function Register() {
  const { toast } = useToast();
  const router = useRouter();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
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
      <div className="">
        <div className="mx-auto px-4 pt-8 md:px-0 lg:pt-0">
          <div className="flex justify-center">
            <Image src={logo} alt="favicon icon" height={40} width={40} />
          </div>

          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-muted-foreground">
                Create your account to get started.
              </p>
            </div>
            <CustomForm<z.infer<typeof registerSchema>>
              initialValues={initialValues}
              formSchema={registerSchema}
              onSubmit={onSubmit}
              elements={[
                {
                  element: 'input', //for different type of input we have some different implementation hence we need to specify , element can be one of email,password or input
                  label: 'Name',
                  placeholder: 'Mansi Jayswal',
                  key: 'name', //key must be any one field from zod validation schema
                },
                {
                  element: 'email',
                  label: 'Email',
                  placeholder: 'abc@example.com',
                  key: 'email',
                },
                {
                  element: 'password',
                  label: 'Password',
                  placeholder: '*****',
                  key: 'password',
                },
                {
                  element: 'password',
                  label: 'Confirm Password',
                  placeholder: '*****',
                  key: 'confirmPassword',
                },
              ]}
            >
              <Button type="submit" className="w-full">
                Register
              </Button>
            </CustomForm>
            <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
              <span>Already have an account?</span>
              <Link href={'/login'} className="text-blue-800">
                Login here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
