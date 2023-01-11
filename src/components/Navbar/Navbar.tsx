import React from 'react';
import Buttons from './Buttons/Buttons';
import Logo from './Logo/Logo';
import ReservationButtons from './ReservationButtons/ReservationButtons';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

  const [isOpened, setIsOpened] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 h-16">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto px-10">
        <div onClick={() => navigate('/')}>
          <Logo />
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <Buttons className='flex'/>
        </div>
        <div className="flex md:order-2">
          <ReservationButtons />
        </div>
        <div className="flex md:order-3">
          {!isOpened ? (
            <button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-sticky" 
            aria-expanded="false"
            onClick={() => {setIsOpened(!isOpened)}}
          >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                clipRule="evenodd">
                </path>
              </svg>
          </button>
          ) : (
            <button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-sticky" 
            aria-expanded="false"
            onClick={() => {setIsOpened(!isOpened)}}
          >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
              </svg>
          </button>
          )}
          { isOpened && 
            <div className='absolute right-5 top-16 p-2 bg-gray-700 rounded-md'>
              <Buttons className="flex flex-col" />
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;