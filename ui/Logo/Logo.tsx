import { type ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';

export const Logo = ({ className, ...spread }: ComponentProps<'a'>) => {
  return (
    <Link className={cn('', className)} href='/' {...spread}>
      <Image
        className='h-auto w-[50px] sm:w-[60px] xl:w-[80px]'
        src='/images/pes-logo.svg'
        width='95'
        height='179'
        alt='PES Logo'
        priority
      />
    </Link>
  );
};
