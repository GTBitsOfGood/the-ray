import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './progressBar';
import NextArrow from './NextArrow';

function Navigation(props) {
  const { children, progressBarColor, transitionTime, pageIndex, changePageIndex } = props;

  const [isScrolling, changeScrollState] = useState(false);

  const maxPages = Object.keys(children).length - 1;

  const pageContainer = useRef(null);

  useEffect(() => {
    pageContainer.current.style.transform = `translate(0, ${pageIndex * -100}%)`;
  });

  const pageUp = () => {
    changePageIndex((prevIndex) => {
      if (prevIndex > 0) {
        const scrollevent = new CustomEvent('page-scroll', { detail: prevIndex - 1 });
        document.dispatchEvent(scrollevent);
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const pageDown = () => {
    changePageIndex((prevIndex) => {
      if (prevIndex < maxPages) {
        const scrollevent = new CustomEvent('page-scroll', { detail: pageIndex + 1 });
        document.dispatchEvent(scrollevent);
        return prevIndex + 1;
      }
      const scrollevent = new CustomEvent('page-scroll', { detail: 0 });
      document.dispatchEvent(scrollevent);
      return 0;
    });
  };

  const onScroll = (event) => {
    if (!isScrolling) {
      changeScrollState(true);

      if (event.deltaY < 0) {
        pageUp();
      } else {
        pageDown();
      }

      setTimeout(() => {
        changeScrollState(false);
      }, transitionTime);
    }
  };

  const handleKeyDown = (event) => {
    // Up arrow
    if (event.keyCode === 38) {
      pageUp();
    }
    // Down arrow
    if (event.keyCode === 40) {
      pageDown();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div
        ref={pageContainer}
        style={{
          height: '100%',
          width: '100%',
          transition: `transform ${transitionTime}ms ease-in-out`,
          outline: 'none',
        }}
        onWheel={onScroll}
      >
        {children}
      </div>

      <NextArrow goNextPage={pageDown} up={pageIndex === maxPages} />
      <ProgressBar bgcolor={progressBarColor} completed={(pageIndex / (Object.keys(children).length - 1)) * 100} />
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  progressBarColor: PropTypes.string,
  transitionTime: PropTypes.number,
  pageIndex: PropTypes.number,
  changePageIndex: PropTypes.func,
};

Navigation.defaultProps = {
  children: [],
  progressBarColor: '#6a1b9a',
  transitionTime: 1000,
  pageIndex: 0,
  changePageIndex: () => {},
};

export default Navigation;
