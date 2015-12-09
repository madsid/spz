import React from 'react';
import {Link} from 'react-router';

export default class BottomHeader extends React.Component{

	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		return (
			<div id="bottomheader">
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">SpecialFoodZ</a>
				    </div>

				    <div className="collapse navbar-collapse" id="navbar-collapse-1">
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to="/"><i className="glyphicon glyphicon-home"></i> Home</Link></li>
				        <li><Link to="/">About Us</Link></li>
				        <li><Link to="/">SFZ Team</Link></li>
				        <li><Link to="/">Gallery</Link></li>
				        <li><Link to="/">Media</Link></li>
				        <li><Link to="/">Careers</Link></li>
				        <li><Link to="/">Contact Us</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
		); 
	}
}