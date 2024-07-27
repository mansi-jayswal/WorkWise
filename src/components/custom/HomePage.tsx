'use client';
import ThemeToggler from '@/components/custom/ThemeToggler';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';

export default function HomePage() {
  const { toast } = useToast();
  return (
    <>
      <div className="container m-5 flex justify-between gap-4 p-4">
        <Button
          size={'lg'}
          onClick={() => {
            toast({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login to your account</DialogTitle>
              <DialogDescription>
                Hang out! add your details first!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Email
                </Label>
                <Input
                  id="name"
                  // defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="username"
                  // defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <ThemeToggler />
      </div>
    </>
  );
}
