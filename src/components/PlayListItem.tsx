import React from "react";

type PlayListItemProps = {
  title: string;
  artist: string;
  length: number;
  isPlaying: boolean;
  onClick: () => void;
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60); // Retrieve whole number of minutes
  const secs = seconds % 60; // Calculates remaining seconds
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Seconds always has two digits (leading 0 if < 10)
};

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  length,
  isPlaying,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group flex w-full cursor-pointer items-center justify-between p-2 ${isPlaying ? "bg-rose-500 font-bold text-white" : "bg-chartreuse-50 hover:bg-rose-200"} `}
    >
      <div className="flex flex-col">
        <p
          className={`text-lg ${isPlaying ? "text-white" : "text-rose-300"} group-hover:text-rose-50`}
        >
          {title}
        </p>
        <p
          className={`text-sm ${isPlaying ? "text-white" : "text-rose-200"} group-hover:text-rose-50`}
        >
          {artist}
        </p>
      </div>
      <div className="pr-6">
        <p
          className={`text-sm ${isPlaying ? "text-white" : "text-rose-200"} group-hover:text-rose-50`}
        >
          {formatTime(length)}
        </p>
      </div>
    </div>
  );
};

export default PlayListItem;
