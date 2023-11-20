import { sideMenuProps, themeProps } from '@/app/page';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const SideMenu = () => {
  const { sideMenuOpen } = useSelector((state: sideMenuProps) => state.sideMenuOpener);
  const { theme } = useSelector((state: themeProps) => state.theme);

  return (
    <div
      className={`dark:bg-dark-grey bg-white overflow-hidden ${
        sideMenuOpen
          ? 'ease-in-out transition-all duration-300 w-[300px]'
          : 'w-0 ease-in-out transition-all duration-300'
      }`}
    >
      <div
        className={`pl-8 pt-8 w-48 ${
          sideMenuOpen
            ? 'translate-x-0 transition-all duration-300'
            : '-translate-x-[192px] transition-all duration-300'
        }`}
      >
        {theme === 'dark' ? (
          <Image src='/images/logo-light.svg' alt='dark theme logo' width={152.53} height={25.22} />
        ) : (
          <Image src='/images/logo-dark.svg' alt='dark theme logo' width={152.53} height={25.22} />
        )}
      </div>
      <div>
        <p>ALL BOARDS</p>
      </div>
    </div>
  );
};

export default SideMenu;
