import React from 'react';

const SongTitle = ({ title, artist }) => {
    return (
        <div className='text-left mt-4 w-full h-full mb-6'>
            {/* Song Title */}
            <h1 className="text-4xl font-bold">{title}</h1>
            {/* Artist */}
            <p className="text-2xl py-2">{artist}</p>
        </div>
    );
};

export default SongTitle;