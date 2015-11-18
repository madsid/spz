import React from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div>
        <HeaderContainer />
        <div className='container'>
          <div className='row'>
            {this.props.children}

            <h1> Hello </h1> 
          </div>
        </div>
      </div>
    );
  }
}
