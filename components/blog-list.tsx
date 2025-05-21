import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

const blogs: Blog[] = [
  {
    slug: '1',
    title: 'Understanding React Hooks',
    description:
      'A deep dive into useState, useEffect, and custom hooks in React.',
    date: 'May 18, 2025',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    slug: '2',
    title: 'Tailwind CSS for Beginners',
    description:
      'Learn how to style modern UIs using Tailwind CSS utility classes.',
    date: 'May 14, 2025',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    slug: '3',
    title: 'JavaScript ES2025 Features',
    description: 'Check out what’s new in the latest version of JavaScript.',
    date: 'May 10, 2025',
    imageUrl: 'https://picsum.photos/600/400',
  },
];

export default function BlogList() {
  return (
    <section className='px-4 py-10 max-w-6xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Latest Blog Posts</h2>

      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <Card
            key={blog.slug}
            className='overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow duration-300'
          >
            <div className='relative h-48 w-full'>
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
                priority
              />
            </div>

            <CardContent className='p-4'>
              <h3 className='text-xl font-semibold mb-1'>{blog.title}</h3>
              <p className='text-xs mb-3'>{blog.date}</p>
              <p className='text-sm'>{blog.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
