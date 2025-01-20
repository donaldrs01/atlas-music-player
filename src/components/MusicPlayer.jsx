import React from 'react';
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import Footer from "./Footer"

const MusicPlayer = () => {
  return (
    <div className=" text-rose-300 flex flex-col md:flex-row w-full">
        {/* Left Column - Currently Playing */}
        <div className="w-full md:w-1/2 h-full flex flex-col mb-4 shadow-lg">
          <div className="flex-grow">
            <CurrentlyPlaying />
          </div>
        </div>
        {/* Right Column - Playlist */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="flex-grow border-l border-azure-200 bg-chartreuse-100 dark:bg-chartreuse-300 dark:text-chartreuse-50 h-full shadow-lg">
            <Playlist />
          </div>
        </div>
    </div>
  );
}

export default MusicPlayer;
