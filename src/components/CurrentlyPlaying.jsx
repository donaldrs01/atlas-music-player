import React from 'react';
import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';
import MusicControls from './MusicControls';

const CurrentlyPlaying = () => {
    return (
        <div className="flex flex-col items-center md:items-start p-4 w-full h-full">
            <CoverArt />
            <div className="w-full h-full">
                <SongTitle title="Blackwater Park" artist="Opeth" />
            </div>  
            <div className="w-full h-full mt-4">
                <MusicControls />
            </div>          
        </div>
    );
};

export default CurrentlyPlaying;