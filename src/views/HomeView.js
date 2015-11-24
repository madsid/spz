import React                  from 'react';
import HomeLeftComponent      from 'components/home/HomeLeftComponent';
import HomeRightComponent     from 'components/home/HomeRightComponent';

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
      <div id="homeview">
        <div className="wrapper">
          <div id="homemenu" className="row"> 
            <div className="row"> 
              <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a  data-toggle="tab" href="#todayspecial">Today&#39;s special </a></li>
                <li role="presentation"><a  data-toggle="tab" href="#needacake">Need a cake</a></li>
                <li role="presentation"><a  data-toggle="tab" href="#talktochef">Talk to chef</a></li>
                <li role="presentation"><a  data-toggle="tab" href="#restaurents">Restaurents</a></li>
                <li role="presentation"><a  data-toggle="tab" href="#streetfoodz">Street Foodz</a></li>
                <li role="presentation"><a  data-toggle="tab" href="#offers">Offers</a></li>
              </ul>
             </div> 

             <div className="tab-content">
              
              <div id="todayspecial" className="tab-pane fade in active">
                <h3 className="grey">Today&#39;s Special</h3>
                
                <form action="/todayspecial">
                  
                  <div className="form-group col-md-6">
                    <label htmlFor="searchfortodaysspecial">Search for today&#39;s special</label>
                    <input type="text" className="form-control" id="searchfortodaysspecial" placeholder="Type your search terms" />
                  </div>

                  <div className="form-group col-md-3">
                    <label htmlFor="whattime">What Time</label>
                    <select className="form-control" id="whattime">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <div className="form-group col-md-3">
                    <label htmlFor="yourcity">Your City</label>
                    <select className="form-control" id="yourcity">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  
                  <div className="specialsubmit">
                    <button type="submit" className="btn btn-success">Icon Search Now</button>
                  </div>
                </form>
              </div>


              <div id="needacake" className="tab-pane fade">
                <h3>NEED A CAKE CONTENT</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div id="talktochef" className="tab-pane fade">
                <h3>Talk To Chef</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              </div>
              <div id="menu3" className="tab-pane fade">
                <h3>Menu 3</h3>
                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
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
