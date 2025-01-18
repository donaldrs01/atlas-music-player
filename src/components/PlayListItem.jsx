import React from 'react';

/*

const Playlist = () => {
    const songs = [
      { title: "The Leper Affinity", artist: "Opeth", length: "10:23"},
      { title: "Bleak", artist: "Opeth", length: "9:16"},
      { title: "Harvest", artist: "Opeth", length: "6:01"}
    ];
  }

  */

const PlayListItem = ({ title, artist, length }) => {
    return (
        <div className="flex justify-between items-center w-full py-2">
            <div>
                <p className="text-sm font-bold text-gray-800">{title}</p>
                <p className="text-sm text-gray-500">{artist}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">{length}</p>
            </div>
        </div>
    );
};

export default PlayListItem;