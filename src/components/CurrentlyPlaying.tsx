import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import MusicControls from "./MusicControls";

type CurrentlyPlayingProps = {
  title: string;
  artist: string;
  coverUrl: string;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: (shuffleState: boolean) => void;
  isFirstSong: boolean;
  isLastSong: boolean;
  volume: number;
  onVolumeChange: (newVolume: number) => void;
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  title,
  artist,
  coverUrl,
  onPrevious,
  onNext,
  onShuffle,
  isFirstSong,
  isLastSong,
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center p-4 shadow-lg md:items-start dark:bg-rose-300 dark:text-rose-50">
      <div className="flex h-[60%] w-full items-center justify-center">
        <CoverArt coverUrl={coverUrl} />
      </div>
      <div className="mt-12 w-full">
        <SongTitle title={title} artist={artist} />
      </div>
      <div className="mt-auto w-full">
        <MusicControls
          onPrevious={onPrevious}
          onNext={onNext}
          onShuffle={onShuffle}
          isFirstSong={isFirstSong}
          isLastSong={isLastSong}
          volume={volume}
          onVolumeChange={onVolumeChange}
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
