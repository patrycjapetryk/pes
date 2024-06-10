import Image from 'next/image';

export const MinusIcon = () => {
  return (
    <Image
      className='h-auto w-[28px] sm:w-[30px]'
      src='/images/minus.svg'
      alt=''
      width={37}
      height={37}
      priority
    />
  );
};
