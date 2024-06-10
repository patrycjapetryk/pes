'use client';

import { useRouter } from 'next/navigation';

import { ContactForm, Cooperation, Faq, PartnersLogos } from '@/components';
import { Background, CloseButton, PageWhiteBackground } from '@/ui';

export default function AboutUs() {
  const router = useRouter();

  const handleCloseButtonClick = () => router.push('/');

  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-2 md:bg-blue-pattern-2' />

      <PageWhiteBackground>
        <Cooperation />
        <Faq />
        <PartnersLogos />
        <ContactForm />
        <CloseButton
          className='absolute right-7 top-7 xl:right-10 xl:top-8'
          handleButtonClick={handleCloseButtonClick}
        />
      </PageWhiteBackground>
    </main>
  );
}
