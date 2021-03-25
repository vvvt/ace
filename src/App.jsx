import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import axios from 'axios';

class App extends Component {
    state = {
        results: [],
    };

    async componentDidMount() {
        axios
            .get('http://localhost:3001/albums/Wolves')
            .then(res => this.setState({ results: res.data }));
    }

    render() {
        return (
            <>
                <header>
                    <h1>ACE</h1>
                </header>
                <main>
                    {this.state.results.map((result, i) => {
                        return (
                            <div key={i} className='card'>
                                {result.name}
                            </div>
                        );
                    })}
                </main>
                <footer></footer>
            </>
        );
    }
}

export default App;
