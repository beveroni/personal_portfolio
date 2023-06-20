import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer className="footer__distributed">
			<div className="footer__left">
				<p className="footer__links">
					<a href="/" className="link-1">Home</a>
					<a href="/aboutme">About</a>
				<a href="/portfolio">Portfolio</a>
					<a href="/skills">Skills</a>
						<a href="/references">References</a> 
						<a href="/contact">Contact</a>
				</p>
				<p className="footer__company--name">Veronika Bendová © 2023</p>
			</div>
			<div className="footer__center">
				<div>
					<i className="fa fa__map--marker"></i>
					<p>Prague</p>
				</div>
				<div>
					<i className="fa fa__phone"></i>
					<p>5555555555555</p>
				</div>
				<div>
					<i className="fa fa__envelope"></i>
					<p><a href="mailto:support@company.com">svechovaver@gmail.com</a></p>
				</div>
			</div>
			<div className="footer__right">
				<p className="footer__author--about">
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
			<div className="footer__icons">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
  )
};
  

