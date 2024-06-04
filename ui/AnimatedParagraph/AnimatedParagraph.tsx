import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AnimatedParagraph = ({ children }: Props) => {
  return (
    <p className='mt-10 flex h-screen max-w-[80%] flex-col items-center justify-center text-center text-sm uppercase md:text-base xl:text-xl'>
      {children}
    </p>
  );
};
