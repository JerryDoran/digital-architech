'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type BlogProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  tags: string[];
};

export default function BlogList({ blogs }: { blogs: BlogProps[] }) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  console.log(blogs);

  // Get all unique tags from blogs, defaulting to empty array if tags is undefined
  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags ?? [])));
  console.log(allTags);

  // Filter blogs by search and tag
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag
      ? (blog.tags ?? []).includes(selectedTag)
      : true;
    return matchesSearch && matchesTag;
  });

  return (
    <section className='px-4 py-10 max-w-6xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>My Blog Posts</h2>
      <p className='text-center mb-8 text-balance max-w-3xl mx-auto'>
        Welcome to my blog! Here, I share my thoughts and insights on various
        topics related to technology, design, and marketing. Explore my latest
        posts below.
        <br />I hope you find them informative and inspiring!
      </p>
      {/* Search and Filter */}
      <div className='flex flex-col gap-4 mb-8 items-center justify-center'>
        <div className='w-full md:w-64 mb-2 md:mb-0'>
          <Input
            type='text'
            placeholder='Search blog posts...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='border rounded-lg px-3 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={() => setSelectedTag(null)}
            className='hover:bg-blue-500 hover:text-white transition-colors duration-200 dark:hover:bg-blue-600 dark:hover:text-white'
            style={{ width: 'fit-content' }}
          >
            All
          </Button>
          {allTags.map((tag, index) => (
            <Button
              type='button'
              size='sm'
              key={index}
              variant='outline'
              onClick={() => setSelectedTag(tag)}
              className={cn(
                'px-3 py-1 rounded-lg border cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200 dark:hover:bg-blue-600 dark:hover:text-white',
                'text-sm',
                selectedTag === tag
                  ? 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white'
                  : 'text-gray-800 dark:text-gray-200'
              )}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {filteredBlogs.length === 0 ? (
          <p className='col-span-full text-center text-gray-500'>
            No blog posts found.
          </p>
        ) : (
          filteredBlogs.map((blog) => (
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
                  <p className='text-sm line-clamp-2 mb-2'>
                    {blog.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mt-2'>
                    {blog?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className='text-xs bg-gray-200 rounded px-2 py-0.5 dark:bg-gray-700 dark:text-gray-200'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
          ))
        )}
      </div>
    </section>
  );
}
