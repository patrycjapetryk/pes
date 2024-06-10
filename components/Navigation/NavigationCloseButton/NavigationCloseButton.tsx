'use client';

import { useRouter } from 'next/navigation';

import { CloseButton } from '@/ui';

export const NavigationCloseButton = () => {
  const router = useRouter();

  const handleCloseButtonClick = () => router.push('/');

  return (
    <CloseButton
      className='absolute right-7 top-7 xl:right-10 xl:top-8'
      handleButtonClick={handleCloseButtonClick}
    />
  );
};
