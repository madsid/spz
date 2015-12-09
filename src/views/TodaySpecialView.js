import React                  from 'react';
import TodaySpecialLeftComponent      from 'components/todayspecial/TodaySpecialLeftComponent';
import TodaySpecialRightComponent     from 'components/todayspecial/TodaySpecialRightComponent';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';

import {Link} from 'react-router';


// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});
export class TodaySpecialView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  render () {
    return (
      <div>
        <img className="img-responsive" src="images/slide1.png" id="mainslider" />  
        <div> 
          <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li className="active">General</li>
          </ol>
        </div> 

        <div className="container-fluid">
          <div className="row"> 
            <div className="col-md-3"> 
              <TodaySpecialLeftComponent />
            </div>
            <div className="col-md-9"> 
              <TodaySpecialRightComponent />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodaySpecialView);
