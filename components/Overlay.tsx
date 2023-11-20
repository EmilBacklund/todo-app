'use client';

import { useDispatch } from 'react-redux';
import { toggle } from '@/GlobalRedux/slices/newBoardSlice';

const Overlay = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggle());
      }}
      className='absolute top-0 left-0 bottom-0 right-0 bg-black/50 z-10'
    ></div>
  );
};

export default Overlay;
