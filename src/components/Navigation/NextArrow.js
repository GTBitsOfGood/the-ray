import React from 'react';
import PropTypes from 'prop-types';

import './NextArrow.css';
import downarrow from './arrow_downward_24px.svg';

function NextArrow(props) {
  const { goNextPage, dark } = props;
  return (
    <button type="button" className="arrow" onClick={goNextPage}>
      <img
        src={downarrow}
        alt="Go to next page"
        className={dark ? 'arrow-image arrow-image-dark' : 'arrow-image arrow-image-light'}
      />
    </button>
  );
}

NextArrow.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  dark: PropTypes.bool,
};

NextArrow.defaultProps = {
  dark: false,
};

export default NextArrow;
