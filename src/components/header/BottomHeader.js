import React from 'react';
import Link from 'react-router';

export default class BottomHeader extends React.Component{

	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		return (
			<div id="bottomheader" className="container-fluid">
				<div className="row"> 
					<div className="positionright col-md-8" id="navbar">
						<p> <i className="glyphicon glyphicon-home"></i></p>
						<p> Today's Special </p>
						<p> Talk 2 Chef </p>
						<p> Need a cake </p> 
						<p> Restaurents </p>
						<p> Street Foodz </p>
						<p> Offers </p> 
						<p> Blog </p>
					</div>
				</div>
			</div>
		); 
	}
}