import React from 'react';
import {Link} from 'react-router';

export default class HomeLeftLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div id="homerightlayout">
        <h1> Hello </h1> 
      </div>
    );
  }
}
