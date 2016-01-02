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
					<div className="positionright col-md-3">
						<p className="accountdisplay"> <i className="fa fa-shopping-cart"></i> CART [0] </p>
						<p className="accountdisplay"> <i className="fa fa-heart"></i> WISHLIST </p>
						<p className="accountdisplay"> <i className="fa fa-lock"></i> LOGIN/SIGNUP </p>
						
					</div>
				</div>
			</div>
		); 
	}
}