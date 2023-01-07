import { useAtom } from 'jotai';
import React from 'react';
import { userLoggedIn } from '../../../store/atoms/userInfos';

const Homepage: React.FC = () => {

  const [loggedIn, setIsLoggedIn] = useAtom(userLoggedIn);

  return (
    <div>
      <p>Homepage</p>
      <button onClick={() => setIsLoggedIn(!loggedIn)}>Login</button>
    </div>
  );
};

export default Homepage;