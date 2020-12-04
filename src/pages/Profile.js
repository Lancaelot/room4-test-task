import React from 'react';
import { ArtistCard } from '../components/ArtistCard/ArtistCard';

export const Profile = () => (
  <div className="app__search">
    <div className="app__container">
      <h1 className="app__title">
        <span className="app__highlight">Artist </span>
        Profile
      </h1>
      <ArtistCard />
    </div>
  </div>
);
