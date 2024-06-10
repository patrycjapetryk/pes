import { type ComponentProps, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ComponentProps<'section'>;

export const PageWhiteBackground = ({ children }: Props) => {
  return (
    <section
      className={`
        fixed bottom-0 left-3 right-3 h-[75%] rounded-t-3xl bg-white pl-10 pt-5 text-gray
        xs:h-[80%] sm:left-5 sm:right-5 sm:pt-8 md:left-auto md:w-[70%]
        lg:right-16 lg:w-[700px] lg:pl-16 xl:w-[820px] xl:pt-16
      `}
    >
      <div className='h-full w-full overflow-y-auto pb-20 pr-10 lg:pr-20'>
        {children}
      </div>
    </section>
  );
};
