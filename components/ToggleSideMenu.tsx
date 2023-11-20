import { useDispatch } from 'react-redux';
import { toggle } from '@/GlobalRedux/slices/menuOpenerSlice';
import Image from 'next/image';

const ToggleSideMenu = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggle())}
      className='absolute hidden bottom-8 left-0 bg-main-purple transition hover:bg-main-purple-hover w-14 h-12 rounded-r-full md:flex flex-col justify-center pl-[18px]'
    >
      <Image src='/images/icon-show-sidebar.svg' width={16} height={10.22} alt='open sidebar' />
    </button>
  );
};

export default ToggleSideMenu;
