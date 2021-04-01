import React, { Component } from 'react';

class AlbumEntry extends Component {
	render() {
		const { name, image } = this.props.data;

		return (
			<div className='results-entry results-album'>
				<div>
					<img className='album-image' src={image} />
					<div className='album-name'>{name}</div>
				</div>
				<div></div>
			</div>
		);
	}
}

export default AlbumEntry;
