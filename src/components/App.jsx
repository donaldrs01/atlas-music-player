import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayListItem from "./PlayListItem";


function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-grow md:flex-row w-full">
        {/* Left Column */}
        <div className="flex flex-col w-1/2 items-center md:items-start p-4">
          <CoverArt />
          <SongTitle title="Blackwater Park" artist="Opeth" />
          <MusicPlayer />
        </div>
        {/* Right Column */}
        <div className="flex flex-col w-1/2 border-l border-gray-300 px-4 mt-4 items-start">
          <h2 className="text-lg font-bold mt-4">Playlist</h2>
          <PlayListItem  title="The Leper Affinity" artist="Opeth" length="10:23" />
          </div>
        </div>
  </div>
  );
}

export default App;
