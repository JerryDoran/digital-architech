import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import BlogList from '@/components/blog-list';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - The Digital Architech',
  description:
    'Tech, design and marketing blog for small businesses. Explore a wide range of insights and resources to help you succeed in the digital world.',
};

export default function BlogPage() {
  const filePath = path.join(process.cwd(), 'content');
  const dirContent = fs.readdirSync(filePath, 'utf8');

  const blogs = dirContent.map((file) => {
    const filePath = path.join(process.cwd(), `content/${file}`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: file.replace(/\.mdx?$/, ''),
      title: data.title,
      description: data.description,
      date: data.date,
      imageUrl: data.imageUrl,
      tags: data.tags ?? [],
    };
  });

  return (
    <MaxWidthWrapper>
      <BlogList blogs={blogs} />
    </MaxWidthWrapper>
  );
}
