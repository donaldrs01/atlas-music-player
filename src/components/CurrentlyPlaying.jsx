import React from 'react';
import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';
import MusicPlayer from './MusicPlayer';

const CurrentlyPlaying = () => {
    return (
        <div className="flex flex-col items-center md:items-start p-4 w-full h-full">
            <CoverArt />
            <div className="w-full">
                <SongTitle title="Blackwater Park" artist="Opeth" />
            </div>  
            <div className="w-full mt-4">
                <MusicPlayer />
            </div>          
        </div>
    );
};

export default CurrentlyPlaying;