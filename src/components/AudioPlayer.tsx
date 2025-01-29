import React, { useRef, useEffect } from "react";

type AudioProps = {
  src: string;
  isPlaying: boolean;
  volume: number;
  playSpeed: number;
  onMusicFinish: () => void;
};

const AudioPlayer: React.FC<AudioProps> = ({
  src,
  isPlaying,
  volume,
  playSpeed,
  onMusicFinish,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Call methods directly on audio element

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    if (audio.src !== src) {
      audio.src = src;
    }

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.error("Play error:", err));
    } else {
      audioRef.current.pause(); // Pause music if no audioRef present
    }
  }, [isPlaying, src]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100; // converts 1-100 volume scale to 0-1
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = playSpeed;
  }, [playSpeed]);

  return <audio ref={audioRef} src={src} onEnded={onMusicFinish} />;
};

export default AudioPlayer;
