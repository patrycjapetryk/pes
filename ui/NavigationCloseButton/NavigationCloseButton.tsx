import { ComponentProps } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/cn';

type Props = {
  handleButtonClick: () => void;
} & ComponentProps<'button'>;

export const NavigationCloseButton = ({
  handleButtonClick,
  className,
  ...spread
}: Props) => {
  return (
    <button
      className={cn('', className)}
      onClick={handleButtonClick}
      {...spread}
    >
      <Image
        className='rounded-lg object-cover lg:rounded-2xl'
        src='/images/close.svg'
        width={38}
        height={38}
        alt=''
      />
    </button>
  );
};
