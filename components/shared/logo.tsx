import Image from 'next/image';
import SiteLogo from '@/assets/logo.png';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-2'>
        <Image
          src={SiteLogo}
          alt='Digital Architech Logo'
          width={40}
          height={40}
          className='w-8 h-8 md:w-10 md:h-10'
        />
        <h1 className='md:text-xl font-bold'>The Digital Architech</h1>
      </div>
    </Link>
  );
}
