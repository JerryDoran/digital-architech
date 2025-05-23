'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type LinkType = {
  id: string;
  text: string;
};

export default function OnThisPage({ htmlContent }: { htmlContent: string }) {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll('h2, h3');

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      generatedLinks.push({
        id,
        text: (heading as HTMLElement).innerText,
      });
    });

    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className='hidden md:flex md:flex-col w-full text-sm'>
      <div className='sticky top-20'>
        <h2 className='font-bold text-sm mb-4'>On this page</h2>
        <ul className='list-none not-prose space-y-2'>
          {links &&
            links.map((link) => (
              <li key={link.id} className='text-xs '>
                <Link href={`#${link.id}`}>{link.text}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
