import React from 'react';
import TracksList from '../components/TracksList/TracksList';

export const Home = props => (
  <div className="app__home">
    <div className="app__container">
      <h1 className="app__title">
        <span className="app__highlight">quality </span>
        Music
      </h1>
      <TracksList type="chart" />
    </div>
  </div>
);
