'use client';

import Image from 'next/image';
import AddNewBoard from './AddNewBoard';
import { useSelector } from 'react-redux';
import { themeProps, sideMenuProps } from '@/app/page';

const Header = () => {
  const { theme } = useSelector((state: themeProps) => state.theme);
  const { sideMenuOpen } = useSelector((state: sideMenuProps) => state.sideMenuOpener);

  return (
    <header className='flex items-center bg-white divide-x divide-lines-light dark:divide-lines-dark dark:bg-dark-grey border-b dark:border-lines-dark border-lines-light'>
      <div
        className={`hidden md:block h-full overflow-hidden ${
          sideMenuOpen
            ? 'w-0 px-0 ease-in-out transition-all duration-300'
            : 'w-[169.03px] px-6 ease-in-out transition-all duration-300'
        }`}
      >
        <div className='w-[103.61px]'>
          {theme === 'dark' ? (
            <Image
              src='/images/logo-light.svg'
              alt='dark theme logo'
              width={152.53}
              height={25.22}
            />
          ) : (
            <Image
              src='/images/logo-dark.svg'
              alt='dark theme logo'
              width={152.53}
              height={25.22}
            />
          )}
        </div>
      </div>
      <div className='p-4 flex justify-between items-center w-full'>
        <div className='flex gap-4 md:hidden'>
          <Image width={24} height={25} src='/images/logo.svg' alt='Todo logo' />
          <AddNewBoard />
        </div>
        <h1 className='text-xl hidden md:block font-bold dark:text-white text-black group-hover:scale-95 transition duration-200'>
          Platform Launch
        </h1>
        <div className='flex gap-4 md:gap-6'>
          <button className='h-8 md:h-12 bg-main-purple opacity-25 rounded-full flex justify-center items-center px-[18px] md:px-6'>
            <Image
              className='md:hidden'
              src='/images/plus.svg'
              alt='add task'
              width={12}
              height={12}
            />
            <span className='hidden md:block text-base font-bold'>+ Add New Task</span>
          </button>
          <button>
            <Image src='/images/kebab-menu.svg' width={3.69} height={16} alt='kebab menu' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
