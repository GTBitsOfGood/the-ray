import React from 'react';
import PropTypes from 'prop-types';

import './NextArrow.css';
import downarrow from './arrow_downward_24px.svg';

function NextArrow(props) {
  const { goNextPage, dark, up } = props;
  const arrowClassName = `arrow-image ${up ? 'down-arrow ' : 'up-arrow '}${
    dark ? 'arrow-image-dark ' : 'arrow-image-light'
  }`;
  return (
    <button type="button" className="arrow" onClick={goNextPage}>
      <img src={downarrow} alt="Go to next page" className={arrowClassName} />
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
