import { type Ref, type ComponentPropsWithRef, forwardRef } from 'react';

import { NavigationList } from '@/components/Navigation';
import { CloseButton } from '@/ui';

type Props = {
  toggleTimeline: () => void;
} & ComponentPropsWithRef<'div'>;

// eslint-disable-next-line react/display-name
export const NavigationMobile = forwardRef(
  ({ toggleTimeline }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        className='fixed -right-8 top-10 translate-x-[270px] md:top-[200px]'
        ref={ref}
      >
        <nav
          className='rounded-l-3xl border border-gray bg-white pb-24 pl-12 pr-28 pt-24 text-xl'
          ref={ref}
        >
          <NavigationList mobile toggleTimeline={toggleTimeline} />
          <CloseButton
            className='absolute right-12 top-5'
            handleButtonClick={toggleTimeline}
          />
        </nav>
      </div>
    );
  },
);
