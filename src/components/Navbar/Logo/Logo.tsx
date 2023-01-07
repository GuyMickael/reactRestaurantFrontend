import React from 'react';

const Logo: React.FC = () => {
  return (
    <div id="LOGO" className='flex'>
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </div> 
  );
};

export default Logo;