import React from 'react';
import '../static/css/PvBigNum.css';
import PropTypes from 'prop-types';
import CrossBrowserAnimatedNumber from '../components/Pages/PvBigNum/CrossBrowserAnimatedNumber';

function PvBigNum(props) {
  const { pageIndex, targetNum, percentage, label, transitionTime } = props;
  return (
    <div className="pv-bignum-background">
      <div className="pv-bignum-body">
        <div className="split pv-bignum-textbox">
          <div className="pv-bignum-numbers">
            <CrossBrowserAnimatedNumber
              pageIndex={pageIndex}
              transitionTime={transitionTime}
              target={targetNum}
              percentage={percentage}
              fontSize="20rem"
              fontMargin="30px 0px 30px 0px"
            />
            <p className="label"> {label} </p>
          </div>
        </div>
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
