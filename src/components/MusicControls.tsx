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
};

const MusicControls: React.FC<MusicControlsProps> = ({
  onPrevious,
  onNext,
  onShuffle,
  isFirstSong,
  isLastSong,
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <PlayControls
        onPrevious={onPrevious}
        onNext={onNext}
        onShuffle={onShuffle}
        isFirstSong={isFirstSong}
        isLastSong={isLastSong}
      />
      <VolumeControls volume={volume} onVolumeChange={onVolumeChange} />
    </div>
  );
};

export default MusicControls;
