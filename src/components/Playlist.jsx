import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = () => {
    const songs = [
        { title: "The Leper Affinity", artist: "Opeth", length: "10:23"},
        { title: "Bleak", artist: "Opeth", length: "9:16"},
        { title: "Harvest", artist: "Opeth", length: "6:01"},
        { title: "The Drapery Falls", artist: "Opeth", length: "10:53"},
        { title: "Dirge for November", artist: "Opeth", length: "7:54"},
        { title: "The Funeral Portrait", artist: "Opeth", length: "8:45"},
        { title: "Patterns in the Ivy", artist: "Opeth", length: "1:52"},
        { title: "Blackwater Park", artist: "Opeth", length: "12:08"}
    ];

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold pt-6 ml-6 pb-2">Playlist</h2>
            <div className="flex flex-col space-y-2 ml-6">
                {songs.map((song, index) => (
                    <PlayListItem
                        key={index}
                        title={song.title}
                        artist={song.artist}
                        length={song.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlist;