import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChart } from '../../store/actions/chart';
import './TracksList.scss';
import { fetchTracks } from '../../store/actions/tracks';
import { setCurrArtist } from '../../store/actions/artist';

const TracksList = (props) => {
  const dispatch = useDispatch();
  const tracks = useSelector(
    state => (props.type === 'chart'
      ? state.chart.tracks
      : state.track.tracks),
  );

  useEffect(() => {
    props.type === 'chart' ? dispatch(fetchChart()) : dispatch(fetchTracks());
  }, []);

  return (
    <div className="chart">
      <div className="chart__top">
        <div className="chart__top--count">
          {props.type === 'chart' ? 'Play-count' : 'Listeners'}
        </div>
        <div className="chart__top--track">Track</div>
        <div className="chart__top--artist">Artist</div>
        <div className="chart__top--more">View more</div>
      </div>
      {tracks && tracks.map(track => (
        <div className="chart__row" key={track.name + track.artist}>
          <div className="chart__count">
            {props.type === 'chart' ? track.playcount : track.listeners}
          </div>
          <div className="chart__name">
            {track.name}
          </div>
          <Link to="/profile">
            <button
              type="button"
              value={props.type === 'chart' ? track.artist.name : track.artist}
              onClick={(event) => {
                dispatch(setCurrArtist(event.target.value));
              }}
              className="chart__name"
            >
              {props.type === 'chart' ? track.artist.name : track.artist}
            </button>
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href={track.url}
            className="chart__link"
          >
            See More
          </a>
        </div>
      ))}
    </div>
  );
};

TracksList.propTypes = {
  type: PropTypes.string.isRequired,
};

TracksList.defaultPropTypes = {
  type: 'chart',
};

export default TracksList;
