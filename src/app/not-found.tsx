import Image from 'next/image';
import Link from 'next/link';
import notFound from '../../public/notFount.svg';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-8">
      <div>
        <Image src={notFound} alt="not fount image" height={200} width={200} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="mt-4 text-6xl font-bold tracking-tighter text-foreground sm:text-7xl">
          It&apos;s Empty here!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Looks like this page cannot be found . it is maybe moved or renamed.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Button className="rounded-xl">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-32">
        <p className="text-base"> Error 404!</p>
      </div>
    </div>
  );
}
