import React from 'react';
import PropTypes from 'prop-types';

function ScrollPage(props) {
  const { children } = props;
  // const { children, isActive } = props;

  // const childrenShouldScroll = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child);//, { shouldparallaxscroll: isActive });
  //   }
  //   return child;
  // })

  return <div>{children}</div>;
}

ScrollPage.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  // isActive: PropTypes.bool,
};

ScrollPage.defaultProps = {
  children: [],
  // isActive: false,
};

export default ScrollPage;
