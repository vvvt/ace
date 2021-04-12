import React, { Component } from 'react';

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
            <div className='results-entry results-album'>
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
            </div>
        );
    }
}

export default TrackEntry;
