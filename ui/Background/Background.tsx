import { type ComponentProps } from 'react';

import { cn } from '@/utils/cn';

type Props = ComponentProps<'div'>;

export const Background = ({ className, ...spread }: Props) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 top-0 bg-cover opacity-0',
        className,
      )}
      {...spread}
    ></div>
  );
};
