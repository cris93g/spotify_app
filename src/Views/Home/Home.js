import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: ''
		};
		// this.getToken= this.getToken.bind(this)
	}
	componentDidMount() {
		let url = document.location.hash,
			hash = url.split('&')[0];
		if (hash) {
			let splitted = hash.split('').slice(16).join('');
			this.setState({ token: splitted });
		}
	}
	render() {
		return <div>Home</div>;
	}
}
export default Home;
