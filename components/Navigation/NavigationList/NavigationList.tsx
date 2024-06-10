import { NavigationListItem } from '../NavigationListItem';
import { cn } from '@/utils/cn';

type Props = {
  toggleTimeline?: () => void;
  mobile?: boolean;
};

export const NavigationList = ({ toggleTimeline, mobile }: Props) => {
  return (
    <ul
      className={cn('hidden gap-5 md:flex', {
        'flex flex-col font-semibold text-gray': mobile,
      })}
      onClick={toggleTimeline}
    >
      <NavigationListItem url='/about-us' label='About us' mobile={mobile} />
      <NavigationListItem url='/news' label='News' mobile={mobile} />
      <NavigationListItem url='/contact' label='Contact' mobile={mobile} />
    </ul>
  );
};
