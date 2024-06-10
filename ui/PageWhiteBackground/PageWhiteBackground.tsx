'use client';

import { type ComponentProps, type ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cn } from '@/utils/cn';
import { NavigationCloseButton } from '@/components';

type Props = {
  children: ReactNode;
  news?: boolean;
} & ComponentProps<'section'>;

export const PageWhiteBackground = ({ children, news, className }: Props) => {
  const el = useRef<HTMLElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({
        defaults: {
          duration: 1.1,
          ease: 'back.out(1.4)',
        },
      })
      .to(el.current, {
        y: 0,
      });
  });

  return (
    <section
      className={cn(
        'fixed -bottom-14 translate-y-full rounded-t-3xl bg-white pb-14 text-gray',
        'pl-5 pt-5 xs:pl-10 sm:pt-8 lg:pl-16 xl:pt-16',
        'h-[80%] xs:h-[85%] md:w-[76%] lg:w-[700px] xl:w-[820px]',
        'left-3 right-3 sm:left-5 sm:right-5 md:left-auto lg:right-16',
        { 'lg:right-[16%]': news },
        className,
      )}
      ref={el}
    >
      <div className='h-full w-full overflow-y-auto pb-20 pr-5 xs:pr-10 lg:pr-20'>
        {children}
      </div>

      <NavigationCloseButton />
    </section>
  );
};
