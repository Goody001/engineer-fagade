import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer () {
    return (
        <footer>
			<div className="footer--brand">
				<h2>GABRIEL FAGADE</h2>
				<p>Keep in touch</p>
				<ul className="footer--social-links">
						<a href="https://www.linkedin.com" className="linkedin-handle">
							<FontAwesomeIcon icon={['fab', 'linkedin-in']} className="fa-icons" size="lg" />
						</a>
						<a href="https://www.instagram.com" className="instagram-handle">
							<FontAwesomeIcon icon={['fab', 'instagram']} className="fa-icons" size="lg" />
						</a>
						<a href="https://www.twitter.com" className="twitter-handle">
							<FontAwesomeIcon icon={['fab', 'twitter']} className="fa-icons" size="lg" />
						</a>
					</ul>
			</div>
			<div className="footer--links">
				<ul>
					<a href="">My Story</a>
					<a href="">Podcast</a>
					<a href="">Speaking</a>
					<a href="">Coaching</a>
					<a href="">My Book</a>
				</ul>
			</div>
			<div className="footer--links">
				<ul>
					<a href="">Home</a>
					<a href="">Contact</a>
					<a href="">Newsletter</a>
					<a href="">Terms</a>
					<a href="">Privacy</a>
				</ul>
			</div>
			<div className="footer--copyrights">
				<ul>
					<li>&copy; Gabriel Fagade 2023 all rights reserved</li>
				</ul>
			</div>
		</footer>
    )
}
