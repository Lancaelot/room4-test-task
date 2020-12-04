import { trackAxios } from '../../axios/axios-routes';

import {
  TRACK_CLEAR,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_START,
  FETCH_TRACK_SUCCESS,
} from './actionTypes';

export function fetchTracks() {
  return async(dispatch) => {
    try {
      const response = await trackAxios.get();
      const tracks = response.data.results.trackmatches.track;

      dispatch(fetchTracksSuccess(tracks));
    } catch (e) {
      dispatch(fetchTracksError(e));
    }
  };
}

export function fetchTrackStart() {
  return {
    type: FETCH_TRACK_START,
  };
}

export function fetchTracksSuccess(tracks) {
  return {
    type: FETCH_TRACK_SUCCESS,
    tracks,
  };
}

export function fetchTracksError(e) {
  return {
    type: FETCH_TRACK_ERROR,
  };
}

export function clearTracks(e) {
  return {
    type: TRACK_CLEAR,
    tracks: [],
  };
}
