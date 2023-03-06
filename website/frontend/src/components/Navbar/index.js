import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="header--logo">
            <h2>GABRIEL FAGADE</h2>
				</div>
        <NavMenu>
          <NavLink to="/story" activeStyle>
            My Story
          </NavLink>
          <NavLink to="/newsletters" activeStyle>
            Newsletter
          </NavLink>
          <NavLink to="/podcasts" activeStyle>
            Podcasts
          </NavLink>
          <NavLink to="/speeches" activeStyle>
            Speaking
          </NavLink>
          <NavLink to="/coaching" activeStyle>
            Coaching
          </NavLink>
          <NavLink to="/books" activeStyle>
            My Book
          </NavLink>
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;