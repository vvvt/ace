import React, { Component } from 'react';

class ArtistEntry extends Component {
	render() {
		const { name, image, albums } = this.props.data;

		return <div className='card'>{name}</div>;
	}
}

export default ArtistEntry;
