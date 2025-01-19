import React from 'react';

const PlayListItem = ({ title, artist, length }) => {
    return (
        <div className={`flex justify-between items-center w-full py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-700`}
        >
            <div>
                <p className="text-xl font-bold text-gray-700">{title}</p>
                <p className="text-l text-gray-500">{artist}</p>
            </div>
            <div className="pr-6">
                <p className="text-l text-gray-400">{length}</p>
            </div>
        </div>
    );
};

export default PlayListItem;