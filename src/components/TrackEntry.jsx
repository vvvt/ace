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

class TrackEntry extends Component {
    render() {
        const {
            albumTitle,
            image,
            artist,
            year,
            currentTrack,
            previousTrack,
            nextTrack,
            colorScheme,
        } = this.props.data;

        return (
            <div className='album'>
                <div className='album-info track-info'>
                    <img className='album-image' src={image} alt='' />
                    <div className='album-details'>
                        <p>{albumTitle}</p>
                        <p>{artist}</p>
                        <p>{year}</p>
                    </div>
                    <div className='album-tracks'>
                        <p>
                            {previousTrack.title
                                ? `${previousTrack.trackNr}. ${previousTrack.title}`
                                : ''}
                            &nbsp;
                        </p>
                        <p>{`${currentTrack.trackNr}. ${currentTrack.title}`}</p>
                        <p>
                            {nextTrack.title
                                ? `${nextTrack.trackNr}. ${nextTrack.title}`
                                : ''}
                            &nbsp;
                        </p>
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
            /* <div className='results-entry results-album'>
                <div className='album-info'>
                    <img className='album-image' src={image} />
                    <div className='album-text'>
                        <div>{albumTitle}</div>
                        <div>
                            {artist} ({year})
                        </div>
                    </div>
                    <div className='album-tracks'>
                        <span>{`${previousTrack.trackNr} ${previousTrack.title}`}</span>
                        <span>{`${currentTrack.trackNr} ${currentTrack.title}`}</span>
                        <span>{`${nextTrack.trackNr} ${nextTrack.title}`}</span>
                    </div>
                </div>
                <div className='album-colors'>
                    {colorScheme.map(color => (
                        <div
                            style={{
                                flex: 1,
                                height: '10px',
                                backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div> */
        );
    }
}

export default TrackEntry;
