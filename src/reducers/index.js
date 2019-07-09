
import { combineReducers } from 'redux';
const sReducer = () => {
    return [
        {title: 'No Scrubs', duration: '3:05'},
        {title: 'Macarena', duration: '2:30'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED')
        return action.payload;
    return selectedSong;
};

export default combineReducers({
    songs: sReducer, 
    selectedSong: selectedSongReducer
});