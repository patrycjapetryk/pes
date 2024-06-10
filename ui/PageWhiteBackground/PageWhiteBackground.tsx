import { type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/utils/cn';

type Props = {
  children: ReactNode;
  news?: boolean;
  contact?: boolean;
} & ComponentProps<'section'>;

export const PageWhiteBackground = ({
  children,
  news,
  contact,
  className,
  ...spread
}: Props) => {
  return (
    <section
      className={cn(
        'fixed bottom-0 rounded-t-3xl bg-white text-gray',
        'pl-5 pt-5 xs:pl-10 sm:pt-8 lg:pl-16 xl:pt-16',
        'h-[75%] xs:h-[80%] md:w-[76%] lg:w-[700px] xl:w-[820px]',
        'left-3 right-3 sm:left-5 sm:right-5 md:left-auto lg:right-16',
        { 'lg:right-[16%]': news },
        { 'lg:right-[8%]': contact },
        className,
      )}
      {...spread}
    >
      <div className='h-full w-full overflow-y-auto pb-20 pr-5 xs:pr-10 lg:pr-20'>
        {children}
      </div>
    </section>
  );
};
