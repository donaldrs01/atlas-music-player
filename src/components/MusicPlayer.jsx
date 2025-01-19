import React from 'react';
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import Footer from "./Footer"

const MusicPlayer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
        {/* Left Column - Currently Playing */}
        <div className="w-full md:w-1/2 h-full flex flex-col mb-4">
          <div className="flex-grow">
            <CurrentlyPlaying />
          </div>
        </div>
        {/* Right Column - Playlist */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="flex-grow border-l border-gray-300 h-full">
            <Playlist />
          </div>
        </div>
    </div>
  );
}

export default MusicPlayer;
