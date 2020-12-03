import React, { useState, useEffect } from 'react';
import './SearchForm.scss';
import { useDispatch } from 'react-redux';
import { trackAxios } from '../../axios/axios-routes';
import { clearTracks, fetchTracks } from '../../store/actions/tracks';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState();

  useEffect(() => dispatch(clearTracks()), []);

  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(clearTracks());
        // eslint-disable-next-line max-len
        trackAxios.defaults.baseURL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchValue}$&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json`;
        dispatch(fetchTracks());
      }}
    >
      <input
        type="text"
        placeholder="Enter track name"
        className="search-form__input"
        onChange={
          event => setSearchValue(event.target.value)
        }
      />
      <button
        className="search-form__button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
