import React from 'react';

const PlayListItem = ({ title, artist, length }) => {
    return (
        <div className={`bg-chartreuse-50 flex justify-between items-center w-full py-2 cursor-pointer hover:bg-[#581845] group`}
        >
            <div>
                <p className="text-xl font-bold text-rose-300 group-hover:text-rose-50 ml-2">{title}</p>
                <p className="text-l text-rose-200 group-hover:text-rose-50 ml-2">{artist}</p>
            </div>
            <div className="pr-6">
                <p className="text-l text-rose-200 group-hover:text-rose-50">{length}</p>
            </div>
        </div>
    );
};

export default PlayListItem;