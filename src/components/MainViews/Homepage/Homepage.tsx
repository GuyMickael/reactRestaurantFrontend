import { useAtom } from 'jotai';
import React from 'react';
import { userLoggedIn } from '../../../store/atoms/userInfos';

const Homepage: React.FC = () => {

  return (
    <div className='bg-transparent'>
      <p className='bg-transparent'>Bienvue</p>
    </div>
  );
};

export default Homepage;