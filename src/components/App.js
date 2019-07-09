import React from 'react';
import index from '../actions';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div><SongList /></div>
                </div>
            </div>
        </div>
    );
};

export default App;