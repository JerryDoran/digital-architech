import Link from 'next/link';
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
  return (
    <header className='flex items-center justify-between h-16 sticky top-0 border-b bg-background/50 backdrop-blur-sm px-6 z-10'>
      <Logo />
      <nav className='flex items-center gap-4'>
        <ul className='hidden lg:flex items-center text-sm'>
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
          <div className='flex items-center gap-3'>
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
          </div>
        </ul>
        <ThemeToggle />

        <Sheet>
          <SheetTrigger>
            <Menu className='lg:hidden cursor-pointer' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
