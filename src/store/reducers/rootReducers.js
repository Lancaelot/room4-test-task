import { combineReducers } from 'redux';
import chartReducer from './chartReducer';
import trackReducer from './trackReducer';
import artistReducer from './artistReducer';

export default combineReducers({
  chart: chartReducer,
  track: trackReducer,
  artist: artistReducer,
});
