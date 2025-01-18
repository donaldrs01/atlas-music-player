import React from 'react';
import placeholder from "../assets/placeholder.svg"

const CoverArt = () => {
    return (
        <div className=" w-full bg-gray-200 flex items-center justify-center aspect-square mt-4">
            <img
                src={placeholder}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;