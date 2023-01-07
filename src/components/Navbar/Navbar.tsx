import React from 'react';
import Buttons from './Buttons/Buttons';
import Logo from './Logo/Logo';
import ReservationButtons from './ReservationButtons/ReservationButtons';

const Navbar: React.FC = () => {

  const [isOpen, setIsOpened] = React.useState(false);

  return (
    <nav className="bg-white py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto px-10">
        <Logo />
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <Buttons />
      </div>
      <div className="flex md:order-2">
        <ReservationButtons />
      </div>
      <div className="flex md:order-3">
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;