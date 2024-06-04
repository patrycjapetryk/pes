'use client';

import { useState, type ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { NavigationDesktop, NavigationMobile } from '@/ui';

export const Navigation = ({ className, ...spread }: ComponentProps<'div'>) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavigationButtonClick = () => setShowMobileMenu(true);
  const handleCloseButtonClick = () => setShowMobileMenu(false);

  return (
    <div className={cn('', className)} {...spread}>
      <NavigationDesktop
        handleNavigationButtonClick={handleNavigationButtonClick}
      />
      {showMobileMenu && (
        <NavigationMobile handleCloseButtonClick={handleCloseButtonClick} />
      )}
    </div>
  );
};
