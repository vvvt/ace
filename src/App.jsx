import React, { Component } from 'react';
import axios from 'axios';

import ArtistEntry from './components/ArtistEntry';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
	state = {
		artists: [],
		albums: [],
		tracks: [],
		mode: 'albums',
		query: '',
	};

	handleSearch = () => {
		const { query, mode } = this.state;
		console.log(query, mode);

		axios.get(`http://localhost:3001/${mode}/${query}`).then(res => {
			console.log(mode, res);
			if (mode === 'albums') this.setState({ albums: res.data });
			if (mode === 'artists') this.setState({ artists: res.data });
			if (mode === 'tracks') this.setState({ tracks: res.data });
		});
	};

	handleChange = event => {
		this.setState({ query: event.target.value });
	};

	handleModeSelect = event => {
		this.setState({ mode: event.target.value });
	};

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
								<select onChange={this.handleModeSelect}>
									<option value='albums' defaultValue>
										Albums
									</option>
									<option value='artists'>
										Artists
									</option>
									<option value='tracks'>Tracks</option>
								</select>
							</span>
						</p>
						<p className='control'>
							<input
								className='input'
								type='text'
								onChange={this.handleChange}
								placeholder={`Title of ${mode}`}
							/>
						</p>
						<p className='control'>
							<button
								className='button'
								onClick={this.handleSearch}>
								Go
							</button>
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
