'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import hero from '@/assets/hero.avif';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Typed from 'typed.js';
import { Send } from 'lucide-react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<i>grow your business</i>',
        'simplify your tech',
        'empower local owners',
      ],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <MaxWidthWrapper>
        <section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
          <div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>
            <h1 className='text-3xl  text-gray-800 dark:text-gray-200 md:text-5xl'>
              A <span className='font-semibold'>tech blog</span> built to
              <br className='hidden lg:block' /> help{' '}
              <span className='font-semibold underline decoration-primary'>
                <span ref={el} />
              </span>
            </h1>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Smart, simple tech tips to help your small business thrive online
              with simplicity, efficiency, and ease.
            </p>
            {/* <div className='mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20'>
              <form action='' className=''>
                <div className='flex'>
                  <Input
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                    className=' text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0'
                  />
                  <Button
                    type='submit'
                    variant='default'
                    className='cursor-pointer'
                  >
                    <Send />
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            <p className='text-xs text-left mt-2'>
              Enter your email to subscribe
            </p> */}
          </div>{' '}
          <div className='w-full mt-6 lg:mt-0 lg:w-1/2'>
            <Image
              src={hero}
              alt='tailwind css components'
              width={500}
              height={300}
              className='rounded-lg shadow-lg mx-auto hover:scale-105 duration-500 w-auto'
            />
          </div>
        </section>
      </MaxWidthWrapper>
      {/* Services */}

      <section className='text-gray-600 dark:text-gray-50 body-font dark:bg-white/10 bg-gray-100'>
        <MaxWidthWrapper>
          <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl md:text-5xl pb-8 mb-4 font-bold text-center'>
              About My Services
            </h2>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 lg:w-1/3'>
                <div className='h-full bg-white dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg hover:scale-105 duration-500 dark:border dark:border-gray-700'>
                  <h2 className='tracking-widest text-xs title-font font-medium  mb-1'>
                    WEB DEVELOPMENT
                  </h2>
                  <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3'>
                    Full-Stack Solutions
                  </h1>
                  <p className='leading-relaxed mb-3 text-gray-700 dark:text-gray-50  '>
                    Building robust, scalable, and responsive web applications
                    using modern tech stacks like React, Node.js, and more.
                  </p>
                  <a className=' inline-flex items-center hover:text-indigo-700'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                  {/* <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                    <span className='text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      2.4K Views
                    </span>
                    <span className='text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      32 Comments
                    </span>
                  </div> */}
                </div>
              </div>
              <div className='p-4 lg:w-1/3'>
                <div className='h-full bg-white dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg hover:scale-105 duration-500 dark:border dark:border-gray-700'>
                  <h2 className='tracking-widest text-xs title-font font-medium  mb-1'>
                    MOBILE DEVELOPMENT
                  </h2>
                  <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3'>
                    Cross-Platform Apps
                  </h1>
                  <p className='leading-relaxed mb-3 text-gray-700 dark:text-gray-400'>
                    Crafting seamless mobile experiences for both Android and
                    iOS using frameworks like React Native and Flutter.
                  </p>
                  <a className=' inline-flex items-center hover:text-indigo-700'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                  {/* <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                    <span className='text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.8K Views
                    </span>
                    <span className='text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      18 Comments
                    </span>
                  </div> */}
                </div>
              </div>
              <div className='p-4 lg:w-1/3'>
                <div className='h-full bg-white dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg hover:scale-105 duration-500 dark:border dark:border-gray-700'>
                  <h2 className='tracking-widest text-xs title-font font-medium  mb-1'>
                    CLOUD SOLUTIONS
                  </h2>
                  <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3'>
                    Scalable Infrastructure
                  </h1>
                  <p className='leading-relaxed mb-3 text-gray-700 dark:text-gray-400'>
                    Implementing and managing cloud environments with AWS,
                    Azure, and GCP to ensure your applications scale
                    effortlessly.
                  </p>
                  <a className=' inline-flex items-center hover:text-indigo-700'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                  {/* <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                    <span className='text-gray-400 dark:text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      3.1K Views
                    </span>
                    <span className='text-gray-400 dark:text-gray-500 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      24 Comments
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
