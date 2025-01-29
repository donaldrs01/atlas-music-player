import React from "react";
import PlayListItem from "./PlayListItem";

type SongData = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: number;
};

type PlayListProps = {
  songs: SongData[];
  onSelect: (index: number) => void;
  currentIndex: number;
};

const Playlist: React.FC<PlayListProps> = ({
  songs,
  onSelect,
  currentIndex,
}) => {
  return (
    <div className="bg-light-playlist dark:bg-dark-playlist h-full w-full flex-grow pb-10 shadow-md">
      <h2 className="text-light-primary dark:text-dark-primary border-b px-2 py-2 text-2xl font-extrabold">
        Playlist
      </h2>
      <div className="flex flex-col gap-y-1">
        {songs.map((song, index) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            length={song.duration}
            isPlaying={index === currentIndex}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
