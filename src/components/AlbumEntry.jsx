import React, { Component } from 'react';

class AlbumEntry extends Component {
	render() {
		const { name, artist, year, image, colorScheme } = this.props.data;
		return (
			<div className='results-entry results-album'>
				<div className='album-info'>
					<img className='album-image' src={image} />
					<div className='album-text'>
						<div>{name}</div>
						<div>
							{artist} ({year})
						</div>
					</div>
				</div>
				<div className='album-colors'>
					{colorScheme.map(color => (
						<div
							style={{
								flex: 1,
								height: '10px',
								backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
							}}></div>
					))}
				</div>
			</div>
		);
	}
}

export default AlbumEntry;
