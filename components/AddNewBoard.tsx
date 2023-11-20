'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '@/GlobalRedux/slices/newBoardSlice';

export interface newBoardButtonProps {
  newBoardIsOpen: {
    open: boolean;
  };
}

const NewBoard = () => {
  const { open } = useSelector((state: newBoardButtonProps) => state.newBoardIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('open: ', open);
  }, [open]);

  return (
    <div
      onClick={() => {
        dispatch(toggle());
      }}
      className='flex gap-2 cursor-pointer group'
    >
      <h1 className='font-bold text-lg dark:text-white text-black group-hover:scale-95 transition duration-200'>
        Platform Launch
      </h1>
      <Image
        className={`${open ? 'rotate-180' : ''}`}
        src='/images/expand.svg'
        width={8}
        height={4}
        alt='expand button'
      />
    </div>
  );
};

export default NewBoard;
