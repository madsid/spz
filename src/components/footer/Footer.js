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
				<div className="row topfooter">
					<img src="images/topfooter.png" className="img-responsive" />
				</div>
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
						<p> <i className="glyphicon glyphicon-phone"></i> +91-9704559139 </p> 
						<p> <i className="glyphicon glyphicon-phone"></i> +91-7702346313 </p>
						<p> <i className="glyphicon glyphicon-envelope"></i>  info@specialfoodz.com </p>
					</div>
				</div>

				<div className="row"> 
					<div id="leftfooter" className="col-md-2 col-md-offset-1 no-border">
						<h4> Payment Options </h4>
						<p> Cash on Delivery Available </p>
					</div>

					<div id="midfooter" className="col-md-6 no-border">
						<div className="col-md-12 social-icons">
							<i className="fa fa-facebook"></i>
							<i className="fa fa-twitter"></i>
							<i className="fa fa-google-plus"></i>
							<i className="fa fa-linkedin"></i>
							<i className="fa fa-youtube-play"></i>
							<i className="fa fa-instagram"></i>
							<i className="fa fa-vimeo"></i>
							<i className="fa fa-pinterest-p"></i>
						</div>

						<div className="col-md-12 mid-bottom">
							<Link to="/"> Terms & conditions </Link> 
							<Link to="/"> Privacy Policy </Link> 
							<Link to="/"> Cash on Delivery Policy </Link> 
							<Link to="/"> Disclaimer </Link> 
							<Link to="/"> Sitemap </Link> 
						</div>

						<div className="col-md-12 mid-bottom">
							<p> &copy; 2015 Special Foodz. All Rights Reserved. Powered By  </p> 
							<Link to="/"> Citrus Designs </Link> 
						</div>
					</div>	

					<div id="rightfooter" className="col-md-2 no-border footer-hiring">
						<Link to="/"> <i className="glyphicon glyphicon-user"></i> we're hiring  </Link> 
					</div>
				</div> 
			</div>
		); 
	}
}