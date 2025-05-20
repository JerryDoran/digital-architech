import Image from 'next/image';
import SiteLogo from '@/assets/logo.png';

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={SiteLogo}
        alt='Digital Architech Logo'
        width={40}
        height={40}
      />
      <h1 className='text-xl font-bold'>The Digital Architech</h1>
    </div>
  );
}
