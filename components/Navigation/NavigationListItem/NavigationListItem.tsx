'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '../../../utils/cn';

type Props = {
  url: string;
  label: string;
  mobile?: boolean;
};

export const NavigationListItem = ({ url, label, mobile }: Props) => {
  const currentPath = usePathname();

  return (
    <li className={`uppercase ${mobile ? 'text-base' : 'text-sm'}`}>
      <Link
        className={cn(
          'px-5 py-2',
          {
            'text-dark-gray': mobile && currentPath.includes(url),
          },
          {
            'rounded-full border': !mobile && currentPath.includes(url),
          },
        )}
        href={url}
      >
        {label}
      </Link>
    </li>
  );
};
