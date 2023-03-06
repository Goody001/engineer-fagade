import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";

const NewsletterItem = ({letter}) => {
	return (
		<article>
              <img src={letter.image} alt="newsletter image" />
              <div>
                <p>{moment(letter.created).fromNow()}</p>
                <h3>{letter.title}</h3>
                <Link to={`/newsletters/${letter.id}`}>Read More &rarr;</Link>
                <p>{letter.text_body}</p>
              </div>
        </article>
	)
}

export default NewsletterItem
