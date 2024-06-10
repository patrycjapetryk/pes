import Image from 'next/image';

export const PlusIcon = () => {
  return (
    <Image
      className='h-auto w-[28px] sm:w-[30px]'
      src='/images/plus.svg'
      alt=''
      width={37}
      height={37}
      priority
    />
  );
};
