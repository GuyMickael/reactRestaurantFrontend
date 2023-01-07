import React from 'react';
import { GiKnifeFork, GiShoppingBag } from 'react-icons/gi';

const ReservationButtons: React.FC = () => {
  return (
    <div id="Reservations" className='container flex flex-row'>
      <div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <div className='border-t-0 border-r-0 border-l-0 border-b-2 border-b-transparent 
                            transition duration-500 hover:border-b-2 hover:border-b-gray-500'
            >
            <span className="text-sm">Sur place</span>
          </div>
        </div>
        <div className="flex md:order-2" data-collapse-toggle="navbar-sticky">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <GiKnifeFork size={30} />
          </button>
        </div>
      </div>
      <div className='md:ml-10 sm:ml-10'>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <div className='border-t-0 border-r-0 border-l-0 border-b-2 border-b-transparent 
                          transition duration-500 hover:border-b-2 hover:border-b-gray-500'
          >
            <span className="text-sm">A emporter</span>
          </div>
        </div>
        <div className="flex md:order-2" data-collapse-toggle="navbar-sticky">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <GiShoppingBag size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationButtons;