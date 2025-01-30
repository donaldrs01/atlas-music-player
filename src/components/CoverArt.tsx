import React from "react";
// Type define prop for CoverArt (songID to fetch art)
type CoverArtProps = {
  coverUrl: string;
};

const CoverArt: React.FC<CoverArtProps> = ({ coverUrl }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <img
        src={coverUrl || "/assets/placeholder.svg"}
        alt="Album Cover"
        className="h-[30vh] w-full max-w-[95%] object-cover md:h-[55vh]"
      />
    </div>
  );
};

export default CoverArt;
