import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import routesList from './routesList';

const Router: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />  
      <div id="routerDiv" className='h-full w-full pt-16 bg-slate-100 dark:bg-gray-700'>
        <Routes>
          {routesList.map((route) => (
            <Route path={route.path} element={<route.element />} key={`key_${route.path}`}/>
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;