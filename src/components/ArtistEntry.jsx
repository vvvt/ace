import React, { Component } from 'react';

class ArtistEntry extends Component {
    render() {
        const { name, image, albums } = this.props.data;

        return (
            <div className='artist'>
                {image ? (
                    <img className='artist-image' src={image} alt='Artist' />
                ) : (
                    <div
                        style={{
                            height: '8vh',
                            width: '8vh',
                            backgroundColor: '#dddddd',
                            borderRadius: '4px',
                        }}
                    ></div>
                )}
                <div className='artist-name'>
                    <p>{name}</p>
                </div>
                <div className='artist-albums'>
                    {window.matchMedia('(max-width: 700px)').matches
                        ? albums
                              .slice(0, 2)
                              .map(album => (
                                  <img src={album} alt='Album cover' />
                              ))
                        : albums
                              .slice(0, 4)
                              .map(album => (
                                  <img src={album} alt='Album cover' />
                              ))}
                </div>
            </div>
        );
    }
}

export default ArtistEntry;
