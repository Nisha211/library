import React from 'react';






export default class Delete extends React.Component {

	state = {

		posts: []

	}



	componentDidMount() {

		fetch('http://localhost:4200/todo')
			.then(res => {

				const posts = res.data;

				this.setState({ posts });

			})

	}



	deleteRow(id, e) {

		fetch('http://localhost:4200/todo')

			.then(res => {

				console.log(res);

				console.log(res.data);



				const posts = this.state.posts.filter(item => item.id !== id);

				this.setState({ posts });

			})



	}



	render() {

		return (

			<div>

				<h1>React Axios Delete Request Example - HDTuto.com</h1>



				<table className="table table-bordered">

					<thead>

						<tr>

							<th>ID</th>

							<th>Title</th>

							<th>Body</th>

							<th>Action</th>

						</tr>

					</thead>



					<tbody>

						{this.state.posts.map((post) => (

							<tr>

								<td>{post.id}</td>

								<td>{post.title}</td>

								<td>{post.body}</td>

								<td>

									<button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>

								</td>

							</tr>

						))}

					</tbody>



				</table>

			</div>

		)

	}

}