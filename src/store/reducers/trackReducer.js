import {
  FETCH_TRACK_START,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_SUCCESS, TRACK_CLEAR,
} from '../actions/actionTypes';

const initialState = {
  tracks: [],
  loading: false,
  error: null,
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACK_START:
      return {
        ...state, loading: true,
      };
    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: action.tracks,
      };
    case FETCH_TRACK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case TRACK_CLEAR:
      return {
        ...state, tracks: [], loading: false,
      };
    default:
      return state;
  }
}
