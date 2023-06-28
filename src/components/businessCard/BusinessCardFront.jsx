import React from 'react';
import BusinessCardPersonalData from '../../../misc/data/BusinessCardPersonalData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BusinessCardFront = () => {
  return (
    <div className="business-card-front">
      <div className="business-card-left">
        <LazyLoadImage
          alt="logo"
          effect="blur"
          src={'CJTransparentBackground.png'}
          style={{
            height: '250px',
            left: '-16.5rem',
            top: '1rem',
            position: 'absolute',
            width: '550px',
          }}
        />

        <h4>
          <strong>Transforming</strong> ideas into <strong>immersive</strong>{' '}
          web experiences by <strong>harmonizing</strong>&nbsp;design and
          functionality in web <strong>solutions.</strong>
        </h4>
      </div>

      <div className="business-card-right">
        <div className="business-card-person">
          <h4>CJ JONES</h4>
        </div>

        {BusinessCardPersonalData.map((data, index) => (
          <div className={data.className} key={index}>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCardFront;
