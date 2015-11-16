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
				        <li><Link to="/"><i className="glyphicon glyphicon-home"></i></Link></li>
				        <li><Link to="/">Today&#39;s Special</Link></li>
				        <li><Link to="/">Talk 2 Chef</Link></li>
				        <li><Link to="/">Need a cake</Link></li>
				        <li><Link to="/">Restaurents</Link></li>
				        <li><Link to="/">Street Foodz</Link></li>
				        <li><Link to="/">Offers</Link></li>
				        <li><Link to="/">Blog</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>



				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">Brand</a>
				    </div>

				   
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
				        <li><a href="#">Link</a></li>
				        <li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><a href="#">Action</a></li>
				            <li><a href="#">Another action</a></li>
				            <li><a href="#">Something else here</a></li>
				            <li role="separator" className="divider"></li>
				            <li><a href="#">Separated link</a></li>
				            <li role="separator" className="divider"></li>
				            <li><a href="#">One more separated link</a></li>
				          </ul>
				        </li>
				      </ul>
				  
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#">Link</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>

			</div>
		); 
	}
}