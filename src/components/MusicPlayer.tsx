import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";
import LoadingSkeleton from "./Loading Skeleton";

type SongData = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: number;
  song: string;
};

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<SongData[]>([]);
  const [originalPlaylist, setOriginalPlaylist] = useState<SongData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(50); // Default volume set to 50
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Fetch playlist data
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/playlist`);
        if (!res.ok) {
          throw new Error("Failed to fetch playlist");
        }
        const data: SongData[] = await res.json();
        setPlaylist(data);
        setOriginalPlaylist(data); // Save original playlist order
        setCurrentIndex(0);
      } catch (err) {
        setError("Error fetching playlist");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  // Navigation functions

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    // Resets playlist index to 0 when reaches end of array
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const previousSong = () => {
    // If prevIndex - 1 results in negative, resets it to 0
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // Receives shuffleState from PlayControls
  const toggleShuffle = (shuffleState: boolean) => {
    if (shuffleState) {
      const shuffledPlaylist = [...playlist].sort(() => Math.random() - 0.5);
      setPlaylist(shuffledPlaylist);
    } else {
      // Find current song's position in original playlist
      const currentSongId = playlist[currentIndex]?.id;
      const originalIndex = originalPlaylist.findIndex(
        (song) => song.id === currentSongId,
      );
      // Reset index on unshuffle
      setPlaylist([...originalPlaylist]);
      setCurrentIndex(originalIndex !== -1 ? originalIndex : 0);
    }
  };

  // Volume control
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  // Update current song when playlist item is clicked
  const handleSelectSong = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const currentSong = playlist[currentIndex];

  return (
    <div className="flex h-full w-full">
      {/* Left Side: Currently Playing */}
      <div className="flex h-full w-1/2 flex-col bg-rose-300 p-6">
        {currentSong && (
          <CurrentlyPlaying
            title={currentSong.title}
            artist={currentSong.artist}
            coverUrl={currentSong.cover}
            onPrevious={previousSong}
            onNext={nextSong}
            onShuffle={toggleShuffle}
            isFirstSong={currentIndex === 0}
            isLastSong={currentIndex === playlist.length - 1}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            isPlaying={isPlaying}
            onTogglePlay={togglePlayPause}
            playbackSpeed={playbackRate}
            onSpeedChange={handlePlaybackRateChange}
          />
        )}
      </div>
      {/* Right Side: Playlist */}
      <div className="h-full w-1/2 overflow-y-auto bg-chartreuse-300 p-4">
        <Playlist
          songs={playlist}
          currentIndex={currentIndex}
          onSelect={handleSelectSong}
        />
      </div>
      {/* Audio Component */}
      {currentSong && (
        <AudioPlayer
          src={currentSong.song}
          isPlaying={isPlaying}
          volume={volume}
          playSpeed={playbackRate}
          onMusicFinish={nextSong}
        />
      )}
    </div>
  );
};

export default MusicPlayer;

/*
type MusicPlayerProps = {
  playlist: SongData[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: (shuffleState: boolean) => void;
  isFirstSong: boolean;
  isLastSong: boolean;
  volume: number;
  onVolumeChange: (newVolume: number) => void;
  onSelect: (index:number) => void;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  playlist,
  currentIndex,
  onPrevious,
  onNext,
  onShuffle,
  isFirstSong,
  isLastSong,
  volume,
  onVolumeChange,
  onSelect,
}) => {
  const currentSong= playlist[currentIndex];
*/
