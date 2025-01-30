import React from "react";

type SongTitleProps = {
  title: string;
  artist: string;
};

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => {
  return (
    <div className="w-full text-left">
      {/* Song Title */}
      <h1 className="ml-4 mt-4 text-2xl font-bold text-light-highlight dark:text-dark-highlight md:text-4xl">
        {title}
      </h1>
      {/* Artist */}
      <p className="ml-4 text-xl text-light-highlight dark:text-dark-highlight md:py-2 md:text-2xl">
        {artist}
      </p>
    </div>
  );
};

export default SongTitle;
