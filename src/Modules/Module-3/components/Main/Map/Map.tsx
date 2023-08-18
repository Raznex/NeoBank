import React from 'react';
import map from '../../../../../common/assets/icon/Map__global.svg';
import './_Map.scss';

const Map: React.FC = () => {
  return (
    <section className="map">
      <h2 className="map__title">You can use our services anywhere in&nbsp;the&nbsp;world</h2>
      <p className="map__offer">Withdraw and transfer money online through our application</p>
      <img src={map} alt="map" className="map__global"/>
    </section>
  );
};

export default Map;
