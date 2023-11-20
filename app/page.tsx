'use client';

import Header from '@/components/Header';
import { useSelector } from 'react-redux';
import { newBoardButtonProps } from '@/components/AddNewBoard';
import NewBoardModal from '@/components/NewBoardModal';
import Overlay from '@/components/Overlay';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ToggleSideMenu from '@/components/ToggleSideMenu';
import SideMenu from '@/components/SideMenu';

export interface themeProps {
  theme: {
    theme: string;
  };
}

export interface sideMenuProps {
  sideMenuOpener: {
    sideMenuOpen: boolean;
  };
}

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  const { open } = useSelector((state: newBoardButtonProps) => state.newBoardIsOpen);
  const { theme } = useSelector((state: themeProps) => state.theme);

  return (
    <html className={`${theme} ${jakarta.className}`} lang='en'>
      <body className={`dark:bg-very-dark-grey bg-light-grey dark:text-white text-black`}>
        <Header />
        <div className='flex'>
          <SideMenu />
          <div className='relative w-full'>
            <main className='px-4'>
              <div className='grid place-items-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-81px)]'>
                <div className='flex flex-col items-center gap-6'>
                  <p className='text-center text-lg text-medium-grey font-bold'>
                    This board is empty. Create a new column to get started.
                  </p>
                  <button className='bg-main-purple hover:bg-main-purple-hover h-12 w-44 rounded-3xl text-base font-bold text-white'>
                    +Add New Column
                  </button>
                </div>
              </div>
            </main>
            {open && (
              <div className='md:hidden'>
                <NewBoardModal />
                <Overlay />
              </div>
            )}
            <ToggleSideMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
