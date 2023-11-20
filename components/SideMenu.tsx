import { useEffect } from 'react';
import { sideMenuProps } from '@/app/page';
import { useSelector } from 'react-redux';

const SideMenu = () => {
  const { sideMenuOpen } = useSelector((state: sideMenuProps) => state.sideMenuOpener);

  useEffect(() => {
    console.log(sideMenuOpen);
  }, [sideMenuOpen]);

  return (
    <div
      className={`dark:bg-dark-grey bg-white ease-in-out transition overflow-hidden ${
        sideMenuOpen ? 'w-[300px]' : 'w-0'
      }`}
    >
      <h1>Yo</h1>
    </div>
  );
};

export default SideMenu;
