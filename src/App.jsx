import React, { Component } from 'react';
import axios from 'axios';

import ArtistEntry from './components/ArtistEntry';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
	state = {
		artists: [],
		mode: 'album',
	};

	async componentDidMount() {
		axios
			.get('http://localhost:3001/artists/Rise')
			.then(res => this.setState({ artists: res.data }));
	}

	render() {
		const { mode, artists } = this.state;

		return (
			<>
				<header>
					<h1>ACE</h1>
				</header>
				<main>
					<div className='field has-addons'>
						<p className='control'>
							<span className='select'>
								<select>
									<option>Albums</option>
									<option>Artists</option>
									<option>Tracks</option>
								</select>
							</span>
						</p>
						<p className='control'>
							<input
								className='input'
								type='text'
								placeholder={`Title of ${mode}`}
							/>
						</p>
						<p className='control'>
							<a className='button'>Go</a>
						</p>
					</div>
					<div className='results'>
						{artists.map((result, i) => {
							return (
								<ArtistEntry
									key={i}
									data={result}></ArtistEntry>
							);
						})}
					</div>
				</main>
				<footer></footer>
			</>
		);
	}
}

export default App;
