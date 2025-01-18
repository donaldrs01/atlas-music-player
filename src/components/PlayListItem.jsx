import React from 'react';

const PlayListItem = ({ title, artist, length }) => {
    return (
        <div className="flex justify-between items-center w-full py-2">
            <div>
                <p className="text-sm font-bold text-gray-800">{title}</p>
                <p className="text-sm text-gray-500">{artist}</p>
            </div>
            <div className="pr-6">
                <p className="text-sm text-gray-400">{length}</p>
            </div>
        </div>
    );
};

export default PlayListItem;