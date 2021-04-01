import React, { Component } from 'react';

class TrackEntry extends Component {
	render() {
		const {
			albumTitle,
			image,
			artist,
			title,
			currentTrack,
			previousTrack,
			nextTrack,
		} = this.props.data;

		return (
			<div className='results-entry results-album'>
				<div>
					<img className='album-image' src={image} />
					<div className='album-name'>{albumTitle}</div>
				</div>
				<div></div>
			</div>
		);
	}
}

export default TrackEntry;
