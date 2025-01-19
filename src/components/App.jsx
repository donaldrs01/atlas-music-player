import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";


function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex-grow flex flex-col">
        <MusicPlayer />
      </div>      
        <Footer />
    </div>
  );
};

export default App;
