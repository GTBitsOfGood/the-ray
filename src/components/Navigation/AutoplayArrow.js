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

// ok so on click i want the button to disappear after that and i want it to automatically go down eveyr few seconds
// right now it is essentially the exact same as the down arrow
// also would be nice if the button were white instead of black but whatever
