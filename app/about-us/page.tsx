import { Background } from '@/ui';

export default function AboutUs() {
  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-between bg-dark-blue'>
      <Background className='bg-blue-pattern-mobile-2 opacity-1 md:bg-blue-pattern-2' />
      <div className='relative w-full'>
        <p className='flex h-screen items-center justify-center'>About us</p>
        <p className='flex h-screen items-center justify-center'>About us</p>
        <p className='flex h-screen items-center justify-center'>About us</p>
      </div>
    </main>
  );
}
