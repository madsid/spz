import React from 'react';
import {Link} from 'react-router';

export default class SearchRightComponent extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div id="searchrightlayout">
        <div id="sorters" className="row"> 
          
          <div className="form-group col-md-2">
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

         <div className="form-group col-md-2">
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="positionright">
            <span> Test </span>
            <span> Icon Here </span>
          </div>

        </div> 

        <div id="searchcontent"> 
          <div className="row">
            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>


            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

          </div>

          <div className="row">
            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

          </div>


          <div className="row">
            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

          </div>


          <div className="row">
            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

            
            <div className="col-md-6">
              <img src="images/hotel.png" className="img-responsive" />

              <div className="hoteltext">
                <p> RAJADHANI KHANDANI </p>
                <div className="together"> 
                  <p> Stars </p>
                  <p className="positionright"> Add </p> 
                </div> 
              </div>
            </div>

          </div>
        </div>

        <nav id="searchpagination">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}
