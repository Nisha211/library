import React from 'react';

class Put extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: [] };
	}

	componentDidMount() {
		fetch('http://localhost:4200/todo', {
			method: 'PUT',
			body: JSON.stringify({
				id: 8,
				title: 'Put API',
				body: 'tasks',
				userId: 6
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user: json
			});
		})
	}
	render() {
		return (
			<div>
				<p><b>put method</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
			</div>
		)
	}
}

export default Put;