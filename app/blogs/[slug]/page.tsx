import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import matter from 'gray-matter';
import OnThisPage from '@/components/on-this-page';
import fs from 'fs';
import path from 'path';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    slug: string;
    title: string;
    description: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const filePath = path.join(process.cwd(), `content/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return {
    title: `The Digital Architech | ${data.title}`,
    description: data.description,
  };
}

type Params = Promise<{ slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
  const { slug } = await params;

  // https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    });

  // await fs.readFile(path.resolve("src/path/to/file/file.js"), "utf8",)
  // path.join(process.cwd(), 'posts')

  const filePath = path.join(process.cwd(), `content/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className='prose dark:prose-invert max-w-6xl'>
      <div className='lg:flex'>
        <div className='px-16'>
          <h1 className=''>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>

        <OnThisPage htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  );
}
