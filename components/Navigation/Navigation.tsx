'use client';

import { useRef, type ComponentProps } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cn } from '@/utils/cn';
import { NavigationDesktop, NavigationMobile } from '@/components/Navigation';

gsap.registerPlugin(useGSAP);

export const Navigation = ({ className, ...spread }: ComponentProps<'div'>) => {
  const el = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'back.out(1.4)',
        },
      })
      .to(el.current, {
        x: 0,
      })
      .reverse();
  });

  const toggleTimeline = () => {
    if (tl.current) tl.current.reversed(!tl.current.reversed());
  };

  return (
    <div className={cn('', className)} {...spread}>
      <NavigationDesktop toggleTimeline={toggleTimeline} />
      <NavigationMobile toggleTimeline={toggleTimeline} ref={el} />
    </div>
  );
};
