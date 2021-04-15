import React, { Component } from 'react';
import axios from 'axios';

import ArtistEntry from './components/ArtistEntry';
import AlbumEntry from './components/AlbumEntry';
import TrackEntry from './components/TrackEntry';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
    state = {
        artists: [],
        albums: [],
        tracks: [],
        mode: 'albums',
        query: '',
    };

    handleSearch = () => {
        const { query, mode } = this.state;
        console.log(query);

        axios.get(`http://localhost:3001/${mode}/${query}`).then(res => {
            switch (mode) {
                case 'albums':
                    this.setState({
                        albums: res.data,
                        artists: [],
                        tracks: [],
                    });
                    break;
                case 'artists':
                    this.setState({
                        albums: [],
                        artists: res.data,
                        tracks: [],
                    });
                    break;
                case 'tracks':
                    this.setState({
                        albums: [],
                        artists: [],
                        tracks: res.data,
                    });
                    break;
                default:
                    this.setState({
                        albums: [],
                        artists: [],
                        tracks: [],
                    });
            }
        });
    };

    handleChange = event => {
        this.setState({ query: event.target.value });
    };

    handleModeSelect = event => {
        this.setState({ mode: event.target.value });
    };

    render() {
        const { mode, artists, albums, tracks } = this.state;

        return (
            <>
                <header className='header'>
                    <h1 className='header-title'>ACE</h1>
                    <p className='header-subtitle'>Album Color Extractor</p>
                </header>
                <main>
                    <div className='field has-addons'>
                        <p className='control'>
                            <span className='select is-secondary'>
                                <select onChange={this.handleModeSelect}>
                                    <option value='albums' defaultValue>
                                        Albums
                                    </option>
                                    <option value='artists'>Artists</option>
                                    <option value='tracks'>Tracks</option>
                                </select>
                            </span>
                        </p>
                        <p className='control'>
                            <input
                                className='input'
                                type='text'
                                onChange={this.handleChange}
                                placeholder={`Title of ${mode}`}
                            />
                        </p>
                        <p className='control'>
                            <button
                                className='button'
                                onClick={this.handleSearch}
                            >
                                Go
                            </button>
                        </p>
                    </div>
                    <div className='results'>
                        {albums.map((result, i) => {
                            return (
                                <AlbumEntry key={i} data={result}></AlbumEntry>
                            );
                        })}
                        {artists.map((result, i) => {
                            return (
                                <ArtistEntry
                                    key={i}
                                    data={result}
                                ></ArtistEntry>
                            );
                        })}
                        {tracks.map((result, i) => {
                            return (
                                <TrackEntry key={i} data={result}></TrackEntry>
                            );
                        })}
                    </div>
                </main>
                <footer></footer>
            </>
        );
    }
}

export default App;
