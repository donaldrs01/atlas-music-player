import React from "react";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

type MusicControlsProps = {
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

const MusicControls: React.FC<MusicControlsProps> = ({
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
    <div className="mb-6 flex w-full flex-col items-center md:mt-12">
      <PlayControls
        onPrevious={onPrevious}
        onNext={onNext}
        onShuffle={onShuffle}
        isFirstSong={isFirstSong}
        isLastSong={isLastSong}
        isPlaying={isPlaying}
        onTogglePlay={onTogglePlay}
        playbackSpeed={playbackSpeed}
        onSpeedChange={onSpeedChange}
      />
      <VolumeControls volume={volume} onVolumeChange={onVolumeChange} />
    </div>
  );
};

export default MusicControls;
