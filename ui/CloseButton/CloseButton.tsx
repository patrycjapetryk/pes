import { type ComponentProps } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/cn';

type Props = {
  handleButtonClick: () => void;
} & ComponentProps<'button'>;

export const CloseButton = ({
  handleButtonClick,
  className,
  ...spread
}: Props) => {
  if (handleButtonClick) {
    return (
      <button
        className={cn('', className)}
        onClick={handleButtonClick}
        {...spread}
      >
        <Image
          className='h-auto w-[32px] rounded-lg object-cover lg:rounded-2xl xl:w-[36px]'
          src='/images/close.svg'
          width={36}
          height={36}
          alt=''
        />
      </button>
    );
  }
};
