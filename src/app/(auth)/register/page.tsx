import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '../../../../public/favicon.jpg';
import Image from 'next/image';

export default function Register() {
  return (
    <div className="mx-auto mt-32 px-4 md:px-0">
      <div className="m-3 flex justify-center">
        <Image src={logo} alt="favicon icon" height={40} width={40} />
      </div>

      <div className="mx-auto max-w-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">
            Create your account to get started.
          </p>
          <div className="mx-auto flex gap-3">
            <p>Already have an account?</p>
            <span className="cursor-pointer">Login</span>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
