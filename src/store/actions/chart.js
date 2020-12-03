import { chartAxios } from '../../axios/axios-routes';
import {
  FETCH_CHART_ERROR,
  FETCH_CHART_START,
  FETCH_CHART_SUCCESS,
} from './actionTypes';

export function fetchChart() {
  return async(dispatch) => {
    try {
      const response = await chartAxios.get();

      const tracks = response.data.tracks.track;

      dispatch(fetchChartSuccess(tracks));
    } catch (e) {
      dispatch(fetchChartError());
    }
  };
}

export function fetchChartStart() {
  return {
    type: FETCH_CHART_START,
  };
}

export function fetchChartSuccess(tracks) {
  return {
    type: FETCH_CHART_SUCCESS,
    tracks,
  };
}

export function fetchChartError(e) {
  return {
    type: FETCH_CHART_ERROR,
  };
}
