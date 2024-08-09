'use client';
import { CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useSession } from 'next-auth/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import AvtarComp from '@/components/custom/AvtarComp';
export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="mx-auto w-full max-w-md">
      <CardHeader className="flex items-center gap-4 p-6">
        <AvtarComp image={session?.user.image} name={session?.user.name} />
        <div className="grid gap-1 text-center">
          <div className="text-xl font-semibold">{session?.user?.name}</div>
          <div className="text-sm text-muted-foreground">
            {session?.user?.email}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" defaultValue="********" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="about">About Me</Label>
          <Textarea
            id="about"
            placeholder="Tell us a bit about yourself..."
            className="min-h-[100px]"
          />
        </div>
        <div>
          <h3 className="mb-2 font-medium">Interested Roles:</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Frontend Developer</Badge>
            <Badge variant="secondary">Full-Stack Engineer</Badge>
            <Badge variant="secondary">Product Manager</Badge>
          </div>
        </div>
      </CardContent>
      <div className="flex justify-end p-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>

          <DialogContent className="h-[500px] overflow-y-auto rounded-lg lg:rounded-none">
            <ScrollArea className="w-auto p-4">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Update your profile information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      defaultValue="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter a new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">About Me</Label>
                  <Textarea
                    id="about"
                    placeholder="Tell us about yourself"
                    className="min-h-[100px]"
                    defaultValue=""
                  />
                </div>
                <div>
                  <Label className="font-semibold">Interested Roles</Label>
                  <p className="text-sm text-muted-foreground">
                    Select the roles you are interested in.
                  </p>
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox name="roles" id="frontend" />
                      <Label htmlFor="frontend" className="text-sm font-normal">
                        Frontend Developer
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox name="roles" id="backend" />
                      <Label htmlFor="backend" className="text-sm font-normal">
                        Backend Developer
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox name="roles" id="fullstack" />
                      <Label
                        htmlFor="fullstack"
                        className="text-sm font-normal"
                      >
                        Full-stack Developer
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox name="roles" id="product" />
                      <Label htmlFor="product" className="text-sm font-normal">
                        Product Manager
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox name="roles" id="design" />
                      <Label htmlFor="design" className="text-sm font-normal">
                        UI/UX Designer
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="mr-4">
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
