import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

const MusicPlayer = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default MusicPlayer;
