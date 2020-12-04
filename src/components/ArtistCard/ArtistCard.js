import React, { useEffect } from 'react';
import './ArtistCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtist } from '../../store/actions/artist';
import { artistAxios } from '../../axios/axios-routes';

export const ArtistCard = () => {
  const dispatch = useDispatch();
  const currArtist = useSelector(state => state.artist.currArtist);
  const artist = useSelector(state => state.artist.artist);

  // eslint-disable-next-line max-len
  artistAxios.defaults.baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${currArtist}&api_key=0ce25ec4cc3fce3dbc377361d59d18a2&format=json`;
  useEffect(() => dispatch(fetchArtist()), []);

  return (
    <>
      {currArtist ? (
        <div className="artist-card">
          <div className="artist-card__container">
            <h4 className="artist-card__title">{artist.name}</h4>
            <div className="artist-card__listeners">
              Playcount :
              {artist.stats.playcount}
            </div>
            <div className="artist-card__listeners">
              Listeners :
              {artist.stats.listeners}
            </div>
            <div className="artist-card__text">
              {artist.summury}
            </div>
          </div>
          <a href={artist.link} className="artist-card__more">View More</a>
        </div>
      )
        : (
          <div className="artist-card__message">
            <h4 className="artist-card__message--text">
              First pick some artist.....
            </h4>
          </div>
        )
      }
    </>
  );
};
