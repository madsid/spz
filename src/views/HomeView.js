import React                  from 'react';
import HomeLeftLayout         from 'layouts/HomeLeftLayout';
import HomeRightLayout         from 'layouts/HomeRightLayout';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';

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
export class HomeView extends React.Component {
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
            <li><a href="#">Home</a></li>
            <li className="active">General</li>
          </ol>
        </div> 

        <div className="container-fluid">
          <div className="row"> 
            <div className="col-md-3"> 
              <HomeLeftLayout />
            </div>
            <div className="col-md-9"> 
              <HomeRightLayout />
            </div>

          </div>
        </div>

        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={this.props.actions.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
