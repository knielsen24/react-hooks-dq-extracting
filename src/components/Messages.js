import Form from "./Form"
import Message from "./Message"

function Messages( {messages} ) {
	
	const messageList = messages.map((message) => {
		return <Message {...message} key={message.id} />
	})

	return (
		<main>
			<h2>Messages</h2>
			<section className="messages">
				<ul>
					{messageList}
				</ul>
			</section>
			<Form />
		</main>
	)
}

export default Messages