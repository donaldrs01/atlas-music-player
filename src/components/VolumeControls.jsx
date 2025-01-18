import React from 'react';
import volume from "../assets/volume.svg";

const VolumeControls = () => {
    return (
        <div className="w-full flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
                {/* Volume Button */}
                <img src={volume} className='h-6 w-6' />
                {/* Slider */}
                <input
                    type='range'
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                    style={{
                        accentColor: "gray",
                    }}
                />
            </div>
        </div>
    );
};

export default VolumeControls;