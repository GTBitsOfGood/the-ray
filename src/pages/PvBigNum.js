import React from 'react';
import '../static/css/PvBigNum.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import CrossBrowserAnimatedNumber from '../components/Pages/PvBigNum/CrossBrowserAnimatedNumber';
import useMediaQuery from '../hooks/useMediaQuery';

function PvBigNum(props) {
  const { pageIndex, targetNum, percentage, label, transitionTime } = props;
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <div className="pv-bignum-background">
      <div className="pv-bignum-body">
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <div className="split pv-bignum-textbox">
            <div className="pv-bignum-numbers">
              {isMobile ? (
                <>
                  <CrossBrowserAnimatedNumber
                    pageIndex={pageIndex}
                    transitionTime={transitionTime}
                    target={targetNum}
                    percentage={percentage}
                    styling={{ 'font-size': '35vw', margin: 0 }}
                  />
                  <p style={{ fontSize: '7vw', margin: '0' }}> {label} </p>
                </>
              ) : (
                <>
                  <CrossBrowserAnimatedNumber
                    pageIndex={pageIndex}
                    transitionTime={transitionTime}
                    target={targetNum}
                    percentage={percentage}
                    styling={{ 'font-size': '25vw', margin: 0 }}
                  />
                  <p style={{ fontSize: '5vw', margin: '0' }}> {label} </p>
                </>
              )}
            </div>
          </div>
        </ParallaxComponent>
      </div>
    </div>
  );
}

PvBigNum.propTypes = {
  pageIndex: PropTypes.number,
  targetNum: PropTypes.number,
  percentage: PropTypes.bool,
  label: PropTypes.string,
  transitionTime: PropTypes.number,
};

PvBigNum.defaultProps = {
  pageIndex: -2,
  targetNum: 80,
  percentage: true,
  label: 'CHARGE',
  transitionTime: 3500,
};

export default PvBigNum;
