import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, VolumeX, Disc } from 'lucide-react';
import { Track } from '../data/artistData';

interface AudioPlayerProps {
  tracks: Track[];
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleEnded = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    
    if (audioRef.current) {
      audioRef.current.currentTime = percentage * audioRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#121216]/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 shadow-2xl relative overflow-hidden group">
      {/* Ambient background glow */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="flex items-center gap-4 mb-3">
        {/* Spinning Vinyl Icon */}
        <div className={`relative w-12 h-12 flex-shrink-0 bg-black rounded-full border-2 border-amber-500/50 flex items-center justify-center shadow-lg ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
          <div className="absolute inset-1 rounded-full border border-dashed border-zinc-700"></div>
          <Disc className="w-6 h-6 text-amber-400" />
          <div className="absolute w-3 h-3 bg-amber-500 rounded-full border border-black"></div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-mono-code text-amber-400 uppercase tracking-widest">Now Spinning</span>
          </div>
          <h4 className="font-bold text-sm text-zinc-100 truncate tracking-wide">{currentTrack.title}</h4>
          <p className="text-xs text-zinc-400 truncate">{currentTrack.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className="w-full bg-zinc-800 h-2 rounded-full cursor-pointer mb-3 relative overflow-hidden group/bar"
        onClick={handleSeek}
      >
        <div 
          className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full relative transition-all duration-100"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_8px_#f59e0b] opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
        </div>
      </div>

      {/* Controls & Track Selector */}
      <div className="flex items-center justify-between text-xs text-zinc-400 font-mono-code">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={nextTrack}
            className="p-2 hover:text-zinc-100 transition-colors flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-amber-500/50"
            title="Next Track"
          >
            <SkipForward className="w-4 h-4" />
            <span className="hidden sm:inline">Next</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-zinc-500">{currentTrack.plays} plays</span>
          <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-300 border border-zinc-800">
            {currentTrackIndex + 1} / {tracks.length}
          </span>
        </div>
      </div>
    </div>
  );
};
