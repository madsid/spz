import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component{

	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		return (
			<div id="footer" className="container-fluid">
				<div className="row">
					<div id="leftfooter" className="col-md-2 col-md-offset-1">
						<h4> Newsletter </h4>
						<p> Subscribe our newsletter to get updates </p> 
						<input className="form-control" placeholder="Your Email" type="email" /> 
						<button className="btn btn-success" > Subscribe </button>
					</div>

					<div id="midfooter" className="col-md-6">
						<div className="col-md-4">
							<h4> About </h4> 
							<Link to="/"> About Us </Link> 
							<Link to="/"> SFZ Team </Link> 
							<Link to="/"> Gallery </Link> 
							<Link to="/"> Media </Link> 
							<Link to="/"> Careers </Link> 
							<Link to="/"> Contact Us </Link> 
						</div>
						<div className="col-md-4">
							<h4> Support </h4> 
							<Link to="/"> Feedback </Link> 
							<Link to="/"> Enquiry </Link> 
							<Link to="/"> FAQ </Link> 
							<Link to="/"> Help </Link> 
							<Link to="/"> Refer a Friend </Link> 
							<Link to="/"> Link with Us </Link> 
						</div>
						<div className="col-md-4">
							<h4> Associate With Us </h4> 
							<Link to="/"> Restaurent Registration </Link> 
							<Link to="/"> Bakery Registration </Link> 
							<Link to="/"> Street Foodz Registration </Link> 
							<Link to="/"> Corporates </Link> 
							<Link to="/"> Advertise </Link> 
							<Link to="/"> Mobile Apps </Link> 
						</div>
					</div>	

					<div id="rightfooter" className="col-md-2">
						<h1> Need Help? </h1> 
						<p> +91-9704559139 </p> 
						<p> +91-7702346313 </p>
						<p> info@specialfoodz.com </p>
					</div>
				</div>
			</div>
		); 
	}
}