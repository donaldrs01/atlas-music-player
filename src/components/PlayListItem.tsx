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
      className={`group flex w-full cursor-pointer items-center justify-between p-2 ${isPlaying ? "bg-light-now-playing dark:bg-dark-now-playing font-bold text-white" : "hover:bg-light-hover dark:hover:bg-dark-hover bg-light-listItem dark:bg-dark-bg"}`}
    >
      <div className="flex flex-col">
        <p
          className={`text-lg ${isPlaying ? "text-light-primary dark:text-dark-primary" : "text-light-primary dark:text-dark-primary"} group-hover:text-light-primary dark:group-hover:text-dark-primary`}
        >
          {" "}
          {title}{" "}
        </p>
        <p
          className={`text-sm ${isPlaying ? "text-light-primary dark:text-dark-primary" : "text-light-primary dark:text-dark-primary"} group-hover:text-light-primary dark:group-hover:text-dark-primary`}
        >
          {" "}
          {artist}{" "}
        </p>
      </div>
      <div className="text-light-accent dark:text-dark-accent group-hover:text-light-primary dark:group-hover:text-dark-primary pr-6">
        <p
          className={`text-sm ${isPlaying ? "text-light-primary dark:text-dark-primary" : "text-light-primary dark:text-dark-primary"} group-hover:text-light-primary dark:group-hover:text-dark-primary`}
        >
          {" "}
          {formatTime(length)}{" "}
        </p>
      </div>
    </div>
  );
};

export default PlayListItem;
