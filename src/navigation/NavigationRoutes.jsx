import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const BusinessCard = lazy(() => import('../views/BusinessCard'));

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BusinessCard />} path="/" />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
