'use client';

import { useRouter } from 'next/navigation';

import { Blog, Activities } from '@/components';
import { Background, CloseButton, PageWhiteBackground } from '@/ui';

export default function News() {
  const router = useRouter();

  const handleCloseButtonClick = () => router.push('/');

  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-3 md:bg-blue-pattern-3' />

      <PageWhiteBackground news>
        <Blog />
        <Activities />
        <CloseButton
          className='absolute right-7 top-7 xl:right-10 xl:top-8'
          handleButtonClick={handleCloseButtonClick}
        />
      </PageWhiteBackground>
    </main>
  );
}
