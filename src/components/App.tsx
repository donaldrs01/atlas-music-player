import React from "react";
import MusicPlayer from "./MusicPlayer";

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-chartreuse-50">
      <div className="flex h-[95vh]">
        <MusicPlayer />
      </div>
      {/* Footer Here */}
      <div className="h-[5vh] bg-[#ffd480] dark:bg-chartreuse-300 dark:text-rose-50">
        <footer className="text-center">&copy; 2025 Atlas School</footer>
      </div>
    </div>
  );
};

export default App;

/*
// Define song data structure
type SongData = {
  id: string;
  title: string;
  artist: string;
  cover: string;
};

const App: React.FC = () => {
  const [playlist, setPlaylist] = useState<SongData[]>([]);
  const [originalPlaylist, setOriginalPlaylist] = useState<SongData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(50); // Default voluem slider to value '50'
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fetch playlist on startup
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/songs/songs.json`);
        if (!res.ok) throw new Error("Failed to fetch your playlist");

        const data: SongData[] = await res.json();
        // setter updating the state
        setPlaylist(data);
        setOriginalPlaylist([...data]); // Store original playlist in copy of data array to revert back to
      } catch (err) {
        setError("Error fetching song details");
      } finally {
        // Remove loading state
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  

  return (
    <div className="flex flex-col w-full h-screen">
     
      {loading && <p className="text-gray-400">Loading song details</p>}
      {error && <p className="text-red-500">{error}</p>}


      {!loading && !error && (
        <div className="flex-grow">
          <MusicPlayer
            playlist={playlist}
            currentIndex={currentIndex}
            onPrevious={previousSong}
            onNext={nextSong}
            onShuffle={toggleShuffle}
            isFirstSong={currentIndex === 0}
            isLastSong={currentIndex === playlist.length - 1}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            onSelect={handleSelectSong}
          />
        </div>
      )}
    
    </div>
  );
};

export default App;

  /*
import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import LoadingSkeleton from './Loading Skeleton';


function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      {/* Skeleton Test
      <LoadingSkeleton />
      
      <div className="flex-grow flex flex-col">
        <MusicPlayer />
      </div>   
      <div className="bg-[#ffd480] dark:bg-chartreuse-300 dark:text-rose-50">   
        <Footer />
      </div>
    </div>
  );
};

export default App;
*/
