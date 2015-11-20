import React from 'react';
import {Link} from 'react-router';

export default class HomeLeftLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div id="homerightlayout">
        <div id="sorters" className="row"> 
          <select className="col-md-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <select className="col-md-2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <div className="positionright">
            <span> Test </span>
            <span> Icon Here </span>
          </div>

        </div> 

        <div id="homecontent"> 
          <p> Hello </p> 
        </div>
      </div>
    );
  }
}
