import React from 'react';
import PropTypes from 'prop-types';

import './AutoplayArrow.css';
import pause from '../../static/images/pause.png';
import play from '../../static/images/play.png';

function AutoplayArrow(props) {
  const { pageIndex, goNextPage, isAutoplay } = props;
  return (
    <div>
      {pageIndex === 0 && (
        <button type="button" className="autoarrow" onClick={goNextPage}>
          <img className="autoarrow-image" src={isAutoplay ? pause : play} alt="Go to next page" />
        </button>
      )}
    </div>
  );
}

AutoplayArrow.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  goNextPage: PropTypes.func.isRequired,
  isAutoplay: PropTypes.func.isRequired,
};

export default AutoplayArrow;
