import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import routesList from './routesList';
import { useAtom } from 'jotai';
import { userLoggedIn, userInfos } from '../store/atoms/userInfos';
import Login from '../components/MainViews/LoginForm/Login/Login';

const Router: React.FC = () => {

  const [loggedIn] = useAtom(userLoggedIn);

  return (
    <BrowserRouter>
    { loggedIn ?
      <>
        <Routes>
          {routesList.map((route) => (
            <Route path={route.path} element={<route.element />} key={`key_${route.path}`}/>
          ))}
        </Routes>
        <Navbar />
      </>
      : <Login />
    }
      
    </BrowserRouter>
  );
};

export default Router;