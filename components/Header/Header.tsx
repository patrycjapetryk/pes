import { Navigation } from '@/components';
import { Logo } from '@/ui';

export const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-10'>
      <Logo className='absolute left-9 top-8 md:left-16 md:top-16' />
      <Navigation className='absolute right-8 top-7 md:right-16 md:top-16' />
    </header>
  );
};
