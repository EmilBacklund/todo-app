'use client';

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '@/GlobalRedux/slices/themeSlice';
import { themeProps } from '@/app/page';

const NewBoardModal = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: themeProps) => state.theme);

  return (
    <div className='absolute rounded-lg w-[70%] top-4 left-1/2 -translate-x-1/2 z-20 dark:bg-dark-grey bg-white text-white'>
      <div className='py-4 pr-6'>
        <div className='pl-6 mb-5'>
          <h2 className='text-xs font-bold text-medium-grey '>ALL BOARDS (1)</h2>
        </div>
        <button className='bg-main-purple h-12 flex flex-col justify-center rounded-r-full w-full'>
          <div className='flex gap-3 ml-6 items-center'>
            <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                fill='#FFFFFF'
              />
            </svg>
            <p className='text-base font-bold'>Platform Launch</p>
          </div>
        </button>
        <button className='h-12 flex flex-col justify-center rounded-r-full w-full dark:hover:bg-main-purple/10 hover:bg-main-purple/20 transition-colors'>
          <div className='flex gap-3 ml-6 items-center'>
            <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                fill='#635FC7'
              />
            </svg>
            <p className='text-base text-main-purple font-bold'>+Create New Board</p>
          </div>
        </button>
      </div>
      <div className='px-4 pb-4'>
        <div className='dark:bg-very-dark-grey bg-white h-12 rounded-md flex items-center justify-center gap-6'>
          <button
            onClick={() => {
              dispatch(lightTheme());
            }}
          >
            <Image src='/images/icon-light-theme.svg' width={18.33} height={18.33} alt='sun' />
          </button>
          <button
            onClick={() => {
              if (theme === 'dark') {
                dispatch(lightTheme());
              } else {
                dispatch(darkTheme());
              }
            }}
            className='w-10 h-5 bg-main-purple rounded-xl relative'
          >
            <div
              className={`w-[14px] h-[14px] bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition-transform ${
                theme === 'dark' ? 'translate-x-[3px]' : 'translate-x-[23px]'
              }`}
            ></div>
          </button>
          <button
            onClick={() => {
              dispatch(darkTheme());
            }}
          >
            <Image src='/images/icon-dark-theme.svg' width={15} height={15} alt='moon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBoardModal;
