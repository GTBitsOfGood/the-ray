import React from 'react';
import '../../../static/css/PvNumBox.css';
import PropTypes from 'prop-types';

function PvNumBox(props) {
  const { toptext, bigtext, bottomtext, subcolor } = props;

  return (
    <div className="pv-num-box">
      <div className="pv-num-box-squish-text">
        <p style={{ color: subcolor }}>{toptext}</p>
      </div>
      <h1> {bigtext}</h1>
      <p style={{ color: subcolor }}> {bottomtext} </p>
    </div>
  );
}

PvNumBox.propTypes = {
  toptext: PropTypes.string,
  bigtext: PropTypes.string,
  bottomtext: PropTypes.string,
  subcolor: PropTypes.string,
};

PvNumBox.defaultProps = {
  toptext: '',
  bigtext: '',
  bottomtext: '',
  subcolor: '#FFFFFF',
};

export default PvNumBox;
