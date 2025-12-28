'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LoadingBar from 'react-top-loading-bar';

import Logo from '@/components/shared/logo';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [progess, setProgress] = useState(0);
  const [open, setOpen] = useState(false); // Add open state for Sheet
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 100);
    setTimeout(() => {
      setProgress(100);
    }, 700);
  }, [pathname]);

  useEffect(() => {
    setProgress(0);
  }, []);

  return (
    <header className='flex items-center justify-between h-16 sticky top-0 border-b bg-background/50 backdrop-blur-sm px-6 z-10'>
      <LoadingBar
        color='#fbbf24'
        height={3}
        progress={progess}
        onLoaderFinished={() => setProgress(0)}
      />
      <Logo />
      <nav className='flex items-center gap-4'>
        <ul className='hidden md:flex items-center text-sm'>
          <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
            <Link href='/'>Home</Link>
          </li>
          <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
            <Link href='/about'>About</Link>
          </li>
          <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md mr-4'>
            <Link href='/contact'>Contact</Link>
          </li>
          {/* <div className='flex items-center gap-3'>
            <li className=''>
              <Link
                href='/login'
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign In
              </Link>
            </li>
            <li className=''>
              <Link
                href='/register'
                className={buttonVariants({ variant: 'default' })}
              >
                Register
              </Link>
            </li>
          </div> */}
        </ul>
        <ThemeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className='md:hidden cursor-pointer' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='mt-6'>
              <Logo />
            </SheetHeader>

            <ul className='items-start text-sm flex flex-col gap-6 p-4 pl-10'>
              <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
                <Link href='/' onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
                <Link href='/about' onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md'>
                <Link href='/blogs' onClick={() => setOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li className='transition-colors hover:bg-accent py-1.5 px-3 rounded-md mr-4'>
                <Link href='/contact' onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
              {/* <div className='flex items-center gap-3'>
            <li className=''>
              <Link
                href='/login'
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign In
              </Link>
            </li>
            <li className=''>
              <Link
                href='/register'
                className={buttonVariants({ variant: 'default' })}
              >
                Register
              </Link>
            </li>
          </div> */}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
