import { Background } from '@/ui';

export default function News() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='bg-blue-pattern-mobile-3 opacity-1 md:bg-blue-pattern-3' />
      <div className='relative w-full'>
        <p className='flex h-screen items-center justify-center'>News</p>
        <p className='flex h-screen items-center justify-center'>News</p>
        <p className='flex h-screen items-center justify-center'>News</p>
      </div>
    </main>
  );
}
