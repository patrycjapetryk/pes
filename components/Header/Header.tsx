import { Logo, Navigation } from '@/ui';

export const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-10'>
      <Logo className='absolute left-10 top-10 md:left-16 md:top-16' />
      <Navigation className='absolute right-16 top-16' />
    </header>
  );
};
