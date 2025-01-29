import React from "react";
import volumeIcon from "../assets/volumeIcon.svg";

type VolumeControlsProps = {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
};

const VolumeControls: React.FC<VolumeControlsProps> = ({
  volume,
  onVolumeChange,
}) => {
  // Handle volume change
  // Fetch value of HTML range element, convert to number, set state accordingly
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(Number(event.target.value));
  };

  return (
    <div className="flex w-full flex-col space-y-3">
      <div className="flex items-center space-x-3">
        {/* Volume Button */}
        <img src={volumeIcon} className="h-6 w-6" alt="Volume" />
        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="h-2 w-full cursor-pointer rounded-lg bg-gray-200"
          style={{
            accentColor: "gray",
          }}
        />
      </div>
    </div>
  );
};

export default VolumeControls;
