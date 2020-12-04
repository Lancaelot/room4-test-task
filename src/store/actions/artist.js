import { artistAxios } from '../../axios/axios-routes';
import {
  FETCH_ARTIST_ERROR,
  FETCH_ARTIST_START,
  FETCH_ARTIST_SUCCESS, SET_CURR_ARTIST,

} from './actionTypes';

export function fetchArtist() {
  return async(dispatch) => {
    try {
      dispatch(fetchArtistStart());
      const response = await artistAxios.get();

      const artistInfo = response.data.artist;

      dispatch(fetchArtistSuccess(artistInfo));
    } catch (e) {
      dispatch(fetchArtistError());
    }
  };
}

export function fetchArtistStart() {
  return {
    type: FETCH_ARTIST_START,
  };
}

export function fetchArtistSuccess(artistInfo) {
  return {
    type: FETCH_ARTIST_SUCCESS,
    artistInfo,
  };
}

export function fetchArtistError(e) {
  return {
    type: FETCH_ARTIST_ERROR,
  };
}

export function setCurrArtist(e) {
  return {
    type: SET_CURR_ARTIST,
    currArtist: e,
  };
}
