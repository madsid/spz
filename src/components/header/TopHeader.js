import React from 'react';

export default class TopHeader extends React.Component{

	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		return (
			<div id="topheader" className="container-fluid">
				<div className="row"> 
					<div className="col-md-4" id="phones">
						<p> <i className="glyphicon glyphicon-envelope"></i> contact@specialfoodz.com</p>
					</div>
					<div className="positionright col-md-3">
						<p className="accountdisplay"> <i className="glyphicon glyphicon-user"></i> Sign in  </p>
						<p className="accountdisplay"> <i className="glyphicon glyphicon-user"></i> Sign up  </p>
						<p className="accountdisplay"> <i className="fa fa-android"></i> Android App  </p>
					</div>
				</div>
			</div>
		); 
	}
}