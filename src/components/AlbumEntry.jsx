import React, { Component } from 'react';
import { Download } from 'react-feather';

const ColorList = ({ colors, mobile }) => (
    <div className={`album-colors${mobile ? '-mobile' : ''}`}>
        {colors.map(color => (
            <div
                style={{
                    flex: 1,
                    height: mobile ? '10px' : '100%',
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
                        <ColorList colors={colorScheme} />
                    )}
                    <button className='copy-button'>
                        <Download />
                    </button>
                </div>
                {window.matchMedia('(max-width: 700px)').matches && (
                    <ColorList colors={colorScheme} mobile />
                )}
            </div>
        );
    }
}

export default AlbumEntry;
