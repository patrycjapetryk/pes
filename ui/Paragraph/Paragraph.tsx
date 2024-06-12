import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Paragraph = ({ children }: Props) => {
  return <p className='flex flex-col leading-tight'>{children}</p>;
};
