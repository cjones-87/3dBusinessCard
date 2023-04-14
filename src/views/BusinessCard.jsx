import React, { lazy, Suspense } from 'react';
import { Loading } from '../app';

const BusinessCardFront = lazy(() =>
  import('../components/businessCard/BusinessCardFront')
);
const BusinessCardBack = lazy(() =>
  import('../components/businessCard/BusinessCardBack')
);

const BusinessCard = () => {
  return (
    <div className="divContainer">
      <div className="business-card-container">
        <div className="business-card">
          <Suspense fallback={<Loading />}>
            <BusinessCardFront />
            <BusinessCardBack />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
