import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progressBar';
import NextArrow from './NextArrow';

function Navigation(props) {
  const { children } = props;

  const [pageIndex, changePageIndex] = useState(0);

  return (
    <div>
      {children[pageIndex]}

      <NextArrow goNextPage={() => changePageIndex(pageIndex + 1)} dark />
      <ProgressBar bgcolor="#6a1b9a" completed={(pageIndex / (Object.keys(children).length - 1)) * 100} />
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(React.Component),
};

Navigation.defaultProps = {
  children: [],
};

export default Navigation;
