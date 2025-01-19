import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

const MusicControls = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default MusicControls;
