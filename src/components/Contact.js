import React from 'react'

function Contact(contact) {
	return (
		<li key={contact.id} className="contact">
			<div className="icon">{contact.name[0]}</div>
			{contact.name}
		</li>
	)
}

export default Contact