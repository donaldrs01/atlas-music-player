import React, { useState } from "react";
import shuffle from "../assets/shuffle.svg";
import rewind from "../assets/rewind.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import forward from "../assets/forward.svg";

type PlayControlProps = {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: (shuffleState: boolean) => void;
  isFirstSong: boolean;
  isLastSong: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
  playbackSpeed: number;
  onSpeedChange: (speed: number) => void;
};

const PlayControls: React.FC<PlayControlProps> = ({
  onPrevious,
  onNext,
  onShuffle,
  isFirstSong,
  isLastSong,
  isPlaying,
  onTogglePlay,
  playbackSpeed,
  onSpeedChange,
}) => {
  const [isShuffled, setIsShuffled] = useState(false);

  const toggleShuffle = () => {
    setIsShuffled((prevShuffle) => {
      const newShuffleState = !prevShuffle;
      onShuffle(newShuffleState); // Send new shuffle state to parent
      return newShuffleState;
    });
  };

  const cycleSpeed = () => {
    // Switch between three speed values (reverts to 0.5 if current speed is set to 2.0 )
    const newSpeed = playbackSpeed === 0.5 ? 1 : playbackSpeed === 1 ? 2 : 0.5;
    onSpeedChange(newSpeed);
  };

  return (
    <div className="mt-6 flex w-full items-center justify-between">
      {/* Speed Button */}
      <button
        onClick={cycleSpeed}
        className="flex h-14 w-14 items-center justify-center text-xl font-bold text-black"
      >
        {playbackSpeed}x
      </button>
      {/* Back Button */}
      <button
        onClick={onPrevious}
        className={`flex items-center justify-center ${isFirstSong ? "cursor-not-allowed" : ""}`}
        disabled={isFirstSong}
      >
        <img src={rewind} className="h-6 w-6" alt="Rewind" />
      </button>
      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay} // Call music player's play/pause
        className="flex items-center justify-center"
      >
        <img src={isPlaying ? pause : play} className="h-6 w-6" />
      </button>
      {/* Forward Button */}
      <button
        onClick={onNext}
        className={`flex items-center justify-center ${isLastSong ? "cursor-not-allowed" : ""}`}
        disabled={isLastSong}
      >
        <img src={forward} className="h-6 w-6" alt="Forward" />
      </button>
      {/* Shuffle Button */}
      <button
        onClick={toggleShuffle}
        className="flex items-center justify-center"
      >
        <img
          src={shuffle}
          className={`h-6 w-6 ${isShuffled ? "bg-red-500" : ""}`}
        />
      </button>
    </div>
  );
};

export default PlayControls;

/*
const PlayControls = () => {
    return (
        <div className="flex w-full items-center justify-between">
            <button className="flex items-center justify-center">
                <img src={speed} className='w-6 h-6' />
            </button>
            <button className="flex items-center justify-center">
                <img src={rewind} className='w-6 h-6' />
            </button>
            <button className="flex items-center justify-center">
                <img src={play} className='w-6 h-6' />
            </button>
            <button className="flex items-center justify-center">
                <img src={forward} className='w-6 h-6' />
            </button>
            <button className="flex items-center justify-center">
                <img src={shuffle} className='w-6 h-6' />
            </button>
        </div>
    );
};

export default PlayControls;

*/
