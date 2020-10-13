import React from 'react';
import PropTypes from 'prop-types';

import './NextArrow.css';
import downarrow from './arrow_downward_24px.svg';
import uparrow from '../../static/images/upward.png';

function NextArrow(props) {
  const { goNextPage, dark, up } = props;
  return (
    <button type="button" className="arrow" onClick={goNextPage}>
      <img
        src={up ? uparrow : downarrow}
        alt="Go to next page"
        className={dark ? 'arrow-image arrow-image-dark' : 'arrow-image arrow-image-light'}
      />
    </button>
  );
}

NextArrow.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  up: PropTypes.bool,
  dark: PropTypes.bool,
};

NextArrow.defaultProps = {
  dark: false,
  up: false,
};

export default NextArrow;
