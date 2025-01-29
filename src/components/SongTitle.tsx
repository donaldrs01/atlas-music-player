import React from "react";

type SongTitleProps = {
  title: string;
  artist: string;
};

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => {
  return (
    <div className="mt-6 w-full text-left">
      {/* Song Title */}
      <h1 className="text-light-highlight dark:text-dark-highlight text-4xl font-bold">
        {title}
      </h1>
      {/* Artist */}
      <p className="text-light-highlight dark:text-dark-highlight py-2 text-2xl">
        {artist}
      </p>
    </div>
  );
};

export default SongTitle;
