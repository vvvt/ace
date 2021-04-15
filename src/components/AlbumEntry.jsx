import React, { Component } from 'react';

const AlbumColorsMobile = ({ colors }) => (
    <div className='album-colors-mobile'>
        {colors.map(color => (
            <div
                style={{
                    flex: 1,
                    height: '10px',
                    backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
                }}
            ></div>
        ))}
    </div>
);

class AlbumEntry extends Component {
    render() {
        const { name, artist, year, image, colorScheme } = this.props.data;
        return (
            <div className='album'>
                <div className='album-info'>
                    <img className='album-image' src={image} alt='' />
                    <div className='album-details'>
                        <p>{name}</p>
                        <p>{artist}</p>
                        <p>{year}</p>
                    </div>
                    {window.matchMedia('(min-width: 701px)').matches && (
                        <div className='album-colors'>
                            {colorScheme.map(color => (
                                <div
                                    style={{
                                        flex: 1,
                                        backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
                                    }}
                                ></div>
                            ))}
                        </div>
                    )}
                    <button className='album-button'>Copy</button>
                </div>
                {window.matchMedia('(max-width: 700px)').matches && (
                    <AlbumColorsMobile colors={colorScheme} />
                )}
            </div>
            /* <div className='results-entry results-album'>
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
				</div> */
        );
    }
}

export default AlbumEntry;
