import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

type BlogProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
};

// const blogs: Blog[] = [
//   {
//     slug: 'javascript-tutorial',
//     title: 'Understanding React Hooks',
//     description: `Learn how to harness the power of **React Hooks** like \`useState\`, \`useEffect\`, and even create your own **custom hooks**.

// Key topics covered:
// - State management with \`useState\`
// - Side effects using \`useEffect\`
// - Extracting logic with custom hooks

// > Hooks simplify your components and eliminate class-based boilerplate.`,
//     date: 'May 18, 2025',
//     imageUrl: 'https://picsum.photos/id/240/600/400',
//   },
//   {
//     slug: 'html',
//     title: 'Tailwind CSS for Beginners',
//     description: `Discover how to style your UI using **Tailwind CSS** utility classes. No more fighting with custom stylesheets!

// What you'll learn:
// - How utility-first CSS works
// - Responsive design with Tailwind
// - Building reusable components

// \`\`\`html
// <div className="p-4 bg-gray-100 rounded-md">
//   Tailwind makes this easy!
// </div>
// \`\`\`

// Tailwind lets you **build fast** and **style with confidence**.`,
//     date: 'May 14, 2025',
//     imageUrl: 'https://picsum.photos/id/237/600/400',
//   },
//   {
//     slug: 'top-5-programming-languages',
//     title: 'JavaScript ES2025 Features',
//     description: `Discover how to style your UI using **Tailwind CSS** utility classes. No more fighting with custom stylesheets!

// What you'll learn:
// - How utility-first CSS works
// - Responsive design with Tailwind
// - Building reusable components

// \`\`\`html
// <div className="p-4 bg-gray-100 rounded-md">
//   Tailwind makes this easy!
// </div>
// \`\`\`

// Tailwind lets you **build fast** and **style with confidence**.`,
//     date: 'May 10, 2025',
//     imageUrl: 'https://picsum.photos/id/238/600/400',
//   },
// ];

export default function BlogList({ blogs }: { blogs: BlogProps[] }) {
  return (
    <section className='px-4 py-10 max-w-6xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Latest Blog Posts</h2>

      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <Card
            key={blog.slug}
            className='overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 py-0'
          >
            <CardHeader className='relative h-56 overflow-hidden '>
              <Image
                src={blog.imageUrl ?? '/default-blog.jpg'}
                alt={blog.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw'
                priority
              />
            </CardHeader>

            <CardContent className='p-4 flex flex-col justify-between gap-4 h-[50%]'>
              <div className=''>
                <h3 className='text-xl font-semibold mb-1'>{blog.title}</h3>
                <p className='text-xs mb-4'>{blog.date}</p>
                <p className='text-sm line-clamp-2 mb-2'>{blog.description}</p>
              </div>

              <Link
                href={`/blogs/${blog.slug}`}
                className={buttonVariants({ variant: 'default' })}
                style={{ width: '30%' }}
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
