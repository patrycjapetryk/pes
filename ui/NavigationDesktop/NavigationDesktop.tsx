import { NavigationButton, NavigationList } from '@/ui';

type Props = {
  handleNavigationButtonClick: () => void;
};

export const NavigationDesktop = ({ handleNavigationButtonClick }: Props) => {
  return (
    <nav className='flex items-center gap-8'>
      <NavigationList />
      <NavigationButton handleButtonClick={handleNavigationButtonClick} />
    </nav>
  );
};
