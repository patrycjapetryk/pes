'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { CloseButton, NavigationList } from '@/ui';

type Props = {
  handleCloseButtonClick: () => void;
};

gsap.registerPlugin(useGSAP);

export const NavigationMobile = ({ handleCloseButtonClick }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const handleButtonClick = contextSafe(() => {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'back.out(1.7)',
        },
      })
      .to('.menu', { x: 270 });
    setTimeout(handleCloseButtonClick, 1000);
  });

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: {
            duration: 1,
            ease: 'back.out(1.7)',
          },
        })
        .from('.menu', {
          x: 270,
        });
    },
    { scope: container },
  );

  return (
    <div className='fixed -right-8 top-10 md:top-[200px]' ref={container}>
      <nav className='menu rounded-l-3xl bg-white pb-24 pl-12 pr-28 pt-24 text-xl'>
        <NavigationList mobile />
        <CloseButton
          className='absolute right-12 top-5'
          handleButtonClick={handleButtonClick}
        />
      </nav>
    </div>
  );
};
