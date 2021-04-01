import React, { Component } from 'react';

class ArtistEntry extends Component {
	render() {
		const { name, image, albums } = this.props.data;

		return (
			<div className='results-entry results-artist'>
				<img className='artist-image' src={image} />
				<div className='artist-name'>{name}</div>
				<div className='artist-albums'></div>
			</div>
		);
	}
}

export default ArtistEntry;
