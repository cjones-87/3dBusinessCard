import React from 'react';
import BusinessCardIconData from '../../../misc/data/BusinessCardIconData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BusinessCardBack = () => {
  return (
    <div className="business-card-back">
      <div className="business-card-tech-links">
        <div className="business-card-back-top">
          <h2>CJ JONES</h2>
          <a href="https://www.seejonesengineer.com/" target="_blank">
            <h4>www.seejonesengineer.com</h4>
          </a>
        </div>

        <div className="business-card-back-middle">
          <a href="https://www.seejonesengineer.com/" target="_blank">
            <LazyLoadImage alt="logo" effect="blur" src={'favicon.ico'} />
          </a>
        </div>

        <div className="business-card-back-bottom">
          {BusinessCardIconData.map((item, index) => {
            return (
              <a key={index} href={item.href} target={item.target}>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessCardBack;
