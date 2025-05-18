import { cn } from '@/lib/utils';

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn('max-auto max-w-screen-xl w-full my-12', className)}>
      {children}
    </div>
  );
}
