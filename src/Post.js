import React from 'react';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: [] };
	}

	componentDidMount() {
		fetch('http://localhost:4200/todo', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			return response.json()
		}).then(json => {
			this.setState({
				user: json
			});
		});
	}
	render() {
		return (
			<div>
				<p><b>post method</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
			</div>
		)
	}
}

export default Post;