import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import "./script.js";

//<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

const Landing = () => {

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">

					<div className = "home" >
					<h1><b>DRAS Gasoline Station </b></h1>
					</div>
					
					<br />
					<div className="buttons">
						<Link to="/register" className="btn-lg btn-success">
							Sign Up
						</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/login" className="btn-lg btn-success">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
