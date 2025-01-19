import React from 'react';
import placeholder from "../assets/album_art.jpg"

const CoverArt = () => {
    return (
        <div className="w-full max-h-[70%] bg-gray-200 flex items-center justify-center aspect-square mb-4">
            <img
                src={placeholder}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;