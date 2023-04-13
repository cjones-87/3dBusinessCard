import React, { lazy, Suspense } from 'react';
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
        <div>hello world</div>
      </Suspense>
    </>
  );
};

export default App;
