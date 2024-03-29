import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import NextArrow from './NextArrow';
import AutoplayArrow from './AutoplayArrow';

const TOUCH_START_TYPE = 'touchstart';
const TOUCH_END_TYPE = 'touchend';

function Navigation(props) {
  const { children, transitionTime, pageIndex, changePageIndex } = props;

  const [isScrolling, changeScrollState] = useState(false);

  const maxPages = Object.keys(children).length - 1;

  const pageContainer = useRef(null);

  const [isAutoplay, changeAutoplay] = useState(false);

  const [touchStart, setTouchStart] = useState({ startX: 0, startY: 0 });

  const pageTimes = [
    2000,
    6000,
    4000,
    3000,
    4000,
    6000,
    3000,
    3000,
    5000,
    4000,
    5000,
    4000,
    4000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
  ];

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
        const scrollevent = new CustomEvent('page-scroll', { detail: prevIndex + 1 });
        document.dispatchEvent(scrollevent);
        return prevIndex + 1;
      }
      const scrollevent = new CustomEvent('page-scroll', { detail: 0 });
      document.dispatchEvent(scrollevent);
      return 0;
    });
  };

  const scrollIfAutoplay = () => {
    if (isAutoplay) {
      pageDown();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollIfAutoplay();
    }, pageTimes[pageIndex]);
    return () => {
      clearTimeout(timeout);
    };
  }, [isAutoplay, pageIndex]);

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
      }, 1500);
    }
  };

  const onMobileScroll = (event) => {
    event.preventDefault();
    if (event.type === TOUCH_START_TYPE) {
      setTouchStart({ startX: event.touches[0].clientX, startY: event.touches[0].clientY });
    } else if (event.type === TOUCH_END_TYPE) {
      const { startY } = touchStart;
      const endY = event.changedTouches[0].clientY;
      const deltaY = endY - startY;

      if (deltaY < -10) {
        // Scroll Down
        pageDown();
      } else if (deltaY > 10) {
        // Scroll Up
        pageUp();
      }
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
        overflow: 'hidden',
      }}
    >
      <div
        className="navigation-container"
        ref={pageContainer}
        style={{
          height: '100%',
          width: '100%',
          transition: `transform ${transitionTime}ms ease-in-out`,
          outline: 'none',
        }}
        onWheel={onScroll}
        onTouchEnd={onMobileScroll}
        onTouchStart={onMobileScroll}
      >
        {children}
      </div>

      <NextArrow goNextPage={pageDown} up={pageIndex === maxPages} />
      <AutoplayArrow
        pageIndex={pageIndex}
        isAutoplay={isAutoplay}
        goNextPage={() => {
          changeAutoplay(!isAutoplay);
        }}
      />
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  transitionTime: PropTypes.number,
  pageIndex: PropTypes.number,
  changePageIndex: PropTypes.func,
};

Navigation.defaultProps = {
  children: [],
  transitionTime: 1000,
  pageIndex: 0,
  changePageIndex: () => {},
};

export default Navigation;
