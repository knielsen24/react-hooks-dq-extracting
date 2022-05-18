import Contact from "./Contact"

function Contacts( {contacts} ) {
	//console.log(contacts)
	const contactList = contacts.map((contact) => {
			return <Contact {...contact} key={contact.id} />
		})
	
	return (
		<nav>
			<h2>Contacts</h2>
			<ul className="contacts">
				{contactList}
			</ul>
		</nav>
	)
}

export default Contacts