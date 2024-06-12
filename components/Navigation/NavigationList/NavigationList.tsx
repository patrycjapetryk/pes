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
      <NavigationListItem url='/o-nas' label='O nas' mobile={mobile} />
      <NavigationListItem
        url='/aktualnosci'
        label='Aktualności'
        mobile={mobile}
      />
      <NavigationListItem url='/kontakt' label='Kontakt' mobile={mobile} />
    </ul>
  );
};
