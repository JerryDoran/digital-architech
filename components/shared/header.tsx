import Link from 'next/link';
import Logo from '@/components/shared/logo';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Header() {
  return (
    <nav className='flex items-center justify-between h-16 sticky top-0 border-b bg-background/50 px-8 backdrop-blur-sm'>
      <Logo />
      <ul className='flex items-center gap-4'>
        <li className=''>
          <Link href='/'>Home</Link>
        </li>
        <li className=''>
          <Link href='/about'>About</Link>
        </li>
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
            className={buttonVariants({ variant: 'outline' })}
          >
            Register
          </Link>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
