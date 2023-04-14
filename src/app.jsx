import React, { Suspense } from 'react';
import NavigationRoutes from './navigation/NavigationRoutes';
import Spinner from '../misc/Spinner';

export const Loading = () => (
  <div
    style={{
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Spinner />
  </div>
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationRoutes />
      </Suspense>
    </>
  );
};

export default App;
