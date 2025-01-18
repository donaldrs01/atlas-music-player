import React from 'react';
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Column */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="flex-grow">
            <CurrentlyPlaying />
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="flex-grow border-l border-gray-300 h-full">
            <Playlist />
          </div>
        </div>
    </div>
  );
}

export default App;
