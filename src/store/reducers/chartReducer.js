import {
  FETCH_CHART_ERROR,
  FETCH_CHART_START,
  FETCH_CHART_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  tracks: [],
  loading: false,
  error: null,
};

export default function chartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHART_START:
      return {
        ...state, loading: true,
      };
    case FETCH_CHART_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: action.tracks,
      };
    case FETCH_CHART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
