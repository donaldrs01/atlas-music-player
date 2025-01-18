import React from 'react';

const SongTitle = ({ title, artist }) => {
    return (
        <div className='text-left mt-4'>
            {/* Song Title */}
            <h1 className="text-xl font-bold">{title}</h1>
            {/* Artist */}
            <p className="text-sm text-gray-500 py-2">{artist}</p>
        </div>
    );
};

export default SongTitle;