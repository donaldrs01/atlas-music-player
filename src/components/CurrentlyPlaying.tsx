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
  isPlaying: boolean;
  onTogglePlay: () => void;
  playbackSpeed: number;
  onSpeedChange: (speed: number) => void;
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
  isPlaying,
  onTogglePlay,
  playbackSpeed,
  onSpeedChange,
}) => {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center bg-light-panel p-4 dark:bg-dark-panel md:items-start">
      <div className="flex w-full flex-col justify-center md:h-[70vh]">
        <CoverArt coverUrl={coverUrl} />
      </div>
      <div className="h-[10%] w-full">
        <SongTitle title={title} artist={artist} />
      </div>
      <div className="mt-16 flex h-[10%] w-full flex-col items-center justify-center md:mt-20">
        <MusicControls
          onPrevious={onPrevious}
          onNext={onNext}
          onShuffle={onShuffle}
          isFirstSong={isFirstSong}
          isLastSong={isLastSong}
          volume={volume}
          onVolumeChange={onVolumeChange}
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          playbackSpeed={playbackSpeed}
          onSpeedChange={onSpeedChange}
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
