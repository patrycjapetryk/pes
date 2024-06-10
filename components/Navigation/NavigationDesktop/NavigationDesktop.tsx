import { NavigationButton, NavigationList } from '@/components/Navigation';

type Props = {
  toggleTimeline: () => void;
};

export const NavigationDesktop = ({ toggleTimeline }: Props) => {
  return (
    <nav className='flex items-center gap-8'>
      <NavigationList />
      <NavigationButton handleButtonClick={toggleTimeline} />
    </nav>
  );
};
