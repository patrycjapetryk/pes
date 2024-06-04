import { NavigationListItem } from '../NavigationListItem';
import { cn } from '@/utils/cn';

type Props = {
  mobile?: boolean;
};

export const NavigationList = ({ mobile }: Props) => {
  return (
    <ul
      className={cn('hidden gap-6 md:flex', {
        'flex flex-col font-semibold text-gray': mobile,
      })}
    >
      <NavigationListItem url='/about-us' label='About us' mobile={mobile} />
      <NavigationListItem url='/news' label='News' mobile={mobile} />
      <NavigationListItem url='/contact' label='Contact' mobile={mobile} />
    </ul>
  );
};