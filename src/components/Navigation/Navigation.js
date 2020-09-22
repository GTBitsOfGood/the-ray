import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progressBar';

function Navigation(props) {
  const { children } = props;

  const [pageIndex, changePageIndex] = useState(0);

  return (
    <div>
      {children[pageIndex]}
      <button type="button" onClick={() => changePageIndex(pageIndex + 1)}>
        Next
      </button>
      <ProgressBar bgcolor="#6a1b9a" completed={pageIndex / children.length} />
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
