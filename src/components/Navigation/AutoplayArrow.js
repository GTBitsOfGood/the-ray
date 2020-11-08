import React from 'react';
import PropTypes from 'prop-types';

import './AutoplayArrow.css';
import pause from '../../static/images/pause.png';
import play from '../../static/images/play.png';

function AutoplayArrow(props) {
  const { goNextPage, isAutoplay } = props;
  return (
    <button type="button" className="autoarrow" onClick={goNextPage}>
      <img className="autoarrow-image" src={isAutoplay ? pause : play} alt="Go to next page" />
    </button>
  );
}

AutoplayArrow.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  isAutoplay: PropTypes.func.isRequired,
};

export default AutoplayArrow;
