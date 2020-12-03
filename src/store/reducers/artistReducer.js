import {
  FETCH_ARTIST_START,
  FETCH_ARTIST_ERROR,
  FETCH_ARTIST_SUCCESS, ARTIST_CLEAR, SET_CURR_ARTIST,
} from '../actions/actionTypes';

const initialState = {
  currArtist: '',
  artist: {
    name: '',
    link: ' ',
    summury: '',
    stats: {
      listeners: '',
      playcount: '',
    },
  },
  loading: false,
  error: null,
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTIST_START:
      return {
        ...state, loading: true,
      };
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        artist: {
          name: action.artistInfo.name,
          link: action.artistInfo.url,
          summury: action.artistInfo.bio.summary.split('. ')[0],
          stats: {
            listeners: action.artistInfo.stats.listeners,
            playcount: action.artistInfo.stats.playcount,
          },
        },
      };
    case FETCH_ARTIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SET_CURR_ARTIST:
      return {
        ...state,
        currArtist: action.currArtist,
        loading: false,
      };

    case ARTIST_CLEAR:
      return {
        ...state,
        currArtist: '',
        artist: {
          name: '',
          link: '',
          summury: '',
          stats: {
            listeners: '',
            playcount: '',
          },
        },
        loading: false,
      };
    default:
      return state;
  }
}
