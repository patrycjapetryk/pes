'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedParagraph, Background } from '@/ui';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to('.animated-info', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-1',
          scrub: 0.8,
        },
      });
      gsap.to('.animated-background-1', {
        opacity: 0,
        rotate: -10,
        scale: 1.4,
        scrollTrigger: {
          trigger: '.animated-text-1',
          scrub: 0.8,
        },
      });
      gsap.to('.animated-background-2', {
        opacity: 1,
        rotate: 10,
        scale: 1.4,
        scrollTrigger: {
          trigger: '.animated-text-1',
          scrub: 0.8,
        },
      });
      gsap.to('.animated-background-3', {
        opacity: 1,
        rotate: 10,
        scale: 1.4,
        scrollTrigger: {
          trigger: '.animated-text-3',
          scrub: 0.8,
        },
      });
      gsap.to('.animated-background-4', {
        opacity: 1,
        rotate: 10,
        scale: 1.4,
        scrollTrigger: {
          trigger: '.animated-text-5',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 0.8,
        },
      });
      gsap.from('.animated-text-1', {
        x: 180,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-1',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 0.2,
        },
      });
      gsap.from('.animated-text-2', {
        x: -160,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-2',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 1.2,
        },
      });
      gsap.from('.animated-text-3', {
        x: 180,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-3',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 0.2,
        },
      });
      gsap.from('.animated-text-4', {
        x: -160,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-4',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 1.2,
        },
      });
      gsap.from('.animated-text-5', {
        x: 180,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-5',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 0.2,
        },
      });
      gsap.from('.animated-text-6', {
        x: -160,
        opacity: 0,
        scrollTrigger: {
          trigger: '.animated-text-6',
          start: 'top bottom',
          end: 'top 55%',
          scrub: 1.2,
        },
      });
    },
    { scope: container },
  );

  return (
    <main
      className='relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-dark-blue'
      ref={container}
    >
      <Background className='animated-background-1 opacity-1 bg-blue-pattern-mobile-1 md:bg-blue-pattern-1' />
      <Background className='animated-background-2 bg-blue-pattern-mobile-2 md:bg-blue-pattern-2' />
      <Background className='animated-background-3 bg-blue-pattern-mobile-3 bg-right-bottom md:bg-blue-pattern-3' />
      <Background className='animated-background-4 bg-blue-pattern-mobile-4 bg-right-top md:bg-blue-pattern-4' />

      <div className='relative flex w-full flex-col items-center py-[70vh]'>
        <AnimatedParagraph>
          <span className='animated-text-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <span className='animated-text-2'>
            Cras consectetur porttitor pulvinar.
          </span>
        </AnimatedParagraph>
        <AnimatedParagraph>
          <span className='animated-text-3'>
            Integer aliquam nisi sed urna varius, at rutrum orci congue.
          </span>
          <span className='animated-text-4'>
            Aliquam vestibulum ante ut quam dignissim placerat. Sed at sodales
            lacus.
          </span>
        </AnimatedParagraph>
        <AnimatedParagraph>
          <span className='animated-text-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <span className='animated-text-6'>
            Cras consectetur porttitor pulvinar.
          </span>
        </AnimatedParagraph>
      </div>
      <div className='animated-info fixed bottom-6 left-[50%] translate-x-[-50%] text-sm lg:text-base'>
        SCROLL TO EXPLORE
      </div>
    </main>
  );
}
