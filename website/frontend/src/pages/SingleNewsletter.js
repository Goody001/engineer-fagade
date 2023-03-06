import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const SingleNewsletter = ({ match }) => {
	console.log(match)

	let {nl_id} = useParams()

	const [newsletter, setNewsletter] = useState(null)

	useEffect(() => {
	  getNewsletter()

	}, [nl_id])

	let getNewsletter = async () => {
		let response = await fetch(`/api/newsletters/${nl_id}`)
		let data = await response.json()

		setNewsletter(data)
	}

  return (
	<div>
		<main className='container m-4'>
			<p className='text-warning'>Issue #8</p>
			<p>{newsletter?.created}</p>
			<h2>{newsletter?.title}</h2>

			<Button variant="primary">Join the newsletter</Button>

		{newsletter?.text_body}
		</main>
	</div>
  )
}

export default SingleNewsletter
