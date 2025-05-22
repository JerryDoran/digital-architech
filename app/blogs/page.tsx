import BlogList from '@/components/blog-list';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export default function BlogPage() {
  return (
    <MaxWidthWrapper>
      <BlogList />
    </MaxWidthWrapper>
  );
}
