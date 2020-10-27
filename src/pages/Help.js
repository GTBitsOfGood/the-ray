import React from 'react';
import '../static/css/Help.css';
import PropTypes from 'prop-types';

class Help extends React.PureComponent {
  render() {
    const { wheel } = this.props;
    return (
      <div className={wheel ? 'help-background' : 'pv-help-background'}>
        <div className="find-body">
          <p className={wheel ? 'help-main-text' : 'pv-help-main-text'}>How you can help</p>
        </div>
      </div>
    );
  }
}

Help.propTypes = {
  wheel: PropTypes.bool,
};
Help.defaultProps = {
  wheel: false,
};

export default Help;
