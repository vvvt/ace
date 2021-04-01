import React, { Component } from 'react';
import axios from 'axios';

import ArtistEntry from './components/ArtistEntry';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
	state = {
		artists: [],
	};

	async componentDidMount() {
		axios
			.get('http://localhost:3001/artists/Rise')
			.then(res => this.setState({ artists: res.data }));
	}

	render() {
		return (
			<>
				<header>
					<h1>ACE</h1>
				</header>
				<main>
					{this.state.artists.map((result, i) => {
						return (
							<ArtistEntry
								key={i}
								data={result}></ArtistEntry>
						);
					})}
				</main>
				<footer></footer>
			</>
		);
	}
}

export default App;
