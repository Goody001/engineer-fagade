import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header () {
    return (
        <header>
			<nav>
				<div className="header--logo">
					<h2>GABRIEL FAGADE</h2>
				</div>
				<div className="header--nav-links">
					<ul>
						<li><a href="#">My Story</a></li>
						<li><a href="#">Newsletter</a></li>
						<li><a href="#">Podcasts</a></li> {/* <Podcast></Podcast> */}
						<li><a href="#">Speaking</a></li>
						<li><a href="#">Coaching</a></li>
						<li><a href="#">My Book</a></li>
					</ul>
					<ul className="header--social-links">
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
			</nav>
		</header>
    )
}
