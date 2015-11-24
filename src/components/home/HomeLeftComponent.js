import React from 'react';
import {Link} from 'react-router';

export default class HomeLeftComponent extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div id="homeleftlayout">
        <button id="map-button" type="button" className="btn btn-danger">VIEW ON MAP</button>

        <div id="filters">
          <div className="row" id="filterhead"> 
            <p> <i className="glyphicon glyphicon-cog"></i> Filters </p> 
            <p className="positionright"> <i className="glyphicon glyphicon-plus"></i> </p>
          </div>

          <div id="cusinetype">
            <h4> Cusine Type </h4> 
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> American
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Asian
                </label>
              </div>
            </div>

          </div> 

          <div id="foodtype">
            <h4> Food Type </h4> 
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Veg & Non Veg
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Veg only
                </label>
              </div>
            </div>

          </div> 

          <div id="pricefor2">
            <h4> Price For 2 </h4> 
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Rs 10 - 100 
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Rs 101 - 200 
                </label>
              </div>
            </div>

          </div> 

           <div id="distance">
            <h4> Distance </h4> 
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> 0 - 2 KM 
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> 2 - 4 KM
                </label>
              </div>
            </div>

          </div> 

          <div id="reviewscore">
            <h4> Review Score</h4> 
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Superb 9+ (99) 
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> very good 8+ (552) 
                </label>
              </div>
            </div>

          </div> 
        </div> 

        <div id="needhelp">
          <p> Hello </p>
        </div>
      </div>
    );
  }
}
