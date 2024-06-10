import Image from 'next/image';
import { type ComponentProps } from 'react';

type Props = {
  handleButtonClick: () => void;
} & ComponentProps<'button'>;

export const NavigationButton = ({ handleButtonClick }: Props) => {
  return (
    <button onClick={handleButtonClick}>
      <Image
        className='h-auto w-[50px] rounded-lg object-cover lg:rounded-2xl'
        src='/images/menu.svg'
        width={55}
        height={43}
        alt=''
      />
    </button>
  );
};
