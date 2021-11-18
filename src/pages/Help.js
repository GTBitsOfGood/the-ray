import React from 'react';
import '../static/css/Help.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

class Help extends React.PureComponent {
  render() {
    const { wheel, pageIndex } = this.props;
    return (
      <div className={wheel ? 'help-background' : 'pv-help-background'}>
        <div className="help-body">
          <ParallaxComponent
            pageIndex={pageIndex}
            transitionTime={1500}
            transitionDelay={0}
            styles={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <p className={wheel ? 'help-main-text' : 'pv-help-main-text'}>How you can help</p>
          </ParallaxComponent>
        </div>
      </div>
    );
  }
}

Help.propTypes = {
  wheel: PropTypes.bool,
  pageIndex: PropTypes.number,
};
Help.defaultProps = {
  wheel: false,
  pageIndex: -2,
};

export default Help;
