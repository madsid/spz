import React from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/footer/Footer';

import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div>
        <HeaderContainer />
        <div className='container-fluid' id="main-content">
          <div className='row'>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
