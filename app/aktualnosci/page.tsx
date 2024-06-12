import { Blog, Activities } from '@/components';
import { Background, PageWhiteBackground } from '@/ui';

export default function News() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='opacity-1 bg-blue-pattern-mobile-3 md:bg-blue-pattern-3' />

      <PageWhiteBackground news>
        <Blog />
        <Activities />
      </PageWhiteBackground>
    </main>
  );
}
