'use client';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/favicon.jpg';
import { IoMenu } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';
import { userRole } from '@/constants/enums';
import { adminLinks } from '@/constants/navLinks';
import { userLinks } from '@/constants/navLinks';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import AvtarComp from './AvtarComp';

interface LinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const [links, setLinks] = useState<LinkItem[]>([]);
  console.log('session data : ', session);
  const role = session?.user.role;

  useEffect(() => {
    if (role === userRole.ADMIN) {
      setLinks(adminLinks);
    } else {
      setLinks(userLinks);
    }
  }, [role]);

  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between">
      <Link
        href="/"
        className="mr-6 hidden items-center gap-2 lg:flex"
        prefetch={false}
      >
        <Image src={logo} alt="app logo" height={40} width={40} />
        <span className="text-lg font-semibold"></span>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <IoMenu size={20} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src={logo} alt="app logo" height={40} width={40} />{' '}
            <span className="text-lg font-semibold">Workwise</span>
          </Link>
          <div className="grid gap-4 py-6">
            {links.map((link, index) => (
              <Link
                href={link.href}
                className="text-lg font-medium underline-offset-4 hover:underline"
                prefetch={false}
                key={index}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex gap-4">
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map((link, index) => (
            <Link
              href={link.href}
              className="text-lg font-medium underline-offset-4 hover:underline"
              prefetch={false}
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex gap-2">
          <div className="">
            <ThemeToggler />
          </div>
          {session ? (
            <>
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <AvtarComp
                      image={session.user.image}
                      name={session.user.name}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => router.push('/dashboard')}
                      className="cursor-pointer"
                    >
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>Saved jobs</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => signOut({ callbackUrl: '/login' })}
                    >
                      <div className="flex items-center space-x-2 text-center">
                        <p>Logout</p>
                        <RiLogoutCircleRLine size={20} />
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <Button
              variant="outline"
              onClick={() => router.push('/login')}
              className=""
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
