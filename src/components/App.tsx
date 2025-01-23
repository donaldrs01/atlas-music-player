import React, { useState, useEffect } from 'react';
import CoverArt from "./CoverArt";
import SongTitle from './SongTitle';

// Define song data structure
interface SongData {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

const App: React.FC = () => {
  const [playlist, setPlaylist] = useState<SongData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch playlist on startup
  useEffect(() => {
    const fetchPlaylist = async() => {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/songs/songs.json`);
        if (!res.ok) throw new Error ('Failed to fetch your playlist');

        const data: SongData[] = await res.json();
        // setter updating the state
        setPlaylist(data);
      } catch (err) {
        setError('Error fetching song details');
      } finally {
        // Remove loading state
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  // Get current song based on index
  const currentSong = playlist[currentIndex];

  const nextSong = () => {
    // Resets playlist index to 0 when reaches end of array
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="w-1/2 h-screen flex flex-col items-center p-8">
      {/* Display loading / error messages */}
      {loading && <p className="text-gray-400">Loading song details</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* When data available, display components */}
      {currentSong && (
          <div>
            <CoverArt coverUrl={currentSong.cover} />
            <SongTitle title={currentSong.title} artist={currentSong.artist} />
          </div>
      )}

      {/* Change Song Button */}
      <button
        className="px-4 py-2 bg-green-400 text-white rounded"
        onClick={nextSong}
        disabled={playlist.length === 0}
        >
          Change Song
        </button>
      </div>
  );
};

export default App;

{/*
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
*/}