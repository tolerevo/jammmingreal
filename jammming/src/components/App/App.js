import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'; 

const App = () => {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <SearchResults />
        <div className="App-playList">
         <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
