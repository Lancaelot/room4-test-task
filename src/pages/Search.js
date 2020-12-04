import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import TracksList from '../components/TracksList/TracksList';

export const Search = () => (
  <div className="app__search">
    <div className="app__container">
      <h1 className="app__title">
        <span className="app__highlight">search </span>
        Music
      </h1>
      <SearchForm />
      <TracksList type="track" />
    </div>
  </div>
);
