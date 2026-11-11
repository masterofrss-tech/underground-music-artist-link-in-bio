import React, { useState } from 'react';
import { 
  artistInfo, 
  links, 
  tracks 
} from './data/artistData';
import { AudioPlayer } from './components/AudioPlayer';
import { LinkCard } from './components/LinkCard';
import { TourSection } from './components/TourSection';
import { MerchSection } from './components/MerchSection';
import { SmsClub } from './components/SmsClub';
import { 
  Share2, 
  Volume2, 
  VolumeX, 
  MapPin, 
  Headphones, 
  Disc3, 
  Flame, 
  Check, 
  Copy,
  Radio
} from 'lucide-react';

export function App() {
  const [soundAmbience, setSoundAmbience] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'links' | 'tour' | 'merch'>('links');

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-20 relative flex flex-col items-center">
      {/* Vinyl Ambient background audio simulator element */}
      {soundAmbience && (
        <audio 
          src="https://actions.google.com/sounds/v1/ambiences/vinyl_record_crackling.ogg" 
          autoPlay 
          loop 
        />
      )}

      {/* Top Navigation / Status bar */}
      <header className="w-full max-w-xl px-4 pt-6 pb-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 bg-[#121216]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800 text-xs font-mono-code">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          <span className="text-zinc-300">BK, NY // LIVE SESSIONS</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundAmbience(!soundAmbience)}
            className={`p-2 rounded-full border transition-all ${
              soundAmbience 
                ? 'bg-amber-500/20 border-amber-500 text-amber-400' 
                : 'bg-[#121216]/80 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
            title={soundAmbience ? "Disable Vinyl Crackle" : "Enable Vinyl Crackle Ambience"}
          >
            {soundAmbience ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-[#121216]/80 border border-zinc-800 text-zinc-400 hover:text-amber-400 transition-colors"
            title="Share Bio"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-xl px-4 space-y-6 z-10">
        
        {/* Profile Header */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#121216] shadow-2xl">
          {/* Banner Image */}
          <div className="h-40 w-full relative overflow-hidden">
            <img 
              src={artistInfo.banner} 
              alt="Brooklyn Banner" 
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/40"></div>
            
            {/* Graffiti Watermark */}
            <div className="absolute top-3 right-4 font-graffiti text-amber-500/30 text-2xl tracking-widest select-none pointer-events-none">
              BK_1998
            </div>
          </div>

          {/* Avatar & Info */}
          <div className="px-6 pb-6 pt-0 relative">
            <div className="flex justify-between items-end -mt-12 mb-4">
              <div className="relative">
                <img 
                  src={artistInfo.avatar} 
                  alt={artistInfo.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-[#121216] shadow-2xl relative z-10" 
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[10px] font-bold font-mono-code px-1.5 py-0.5 rounded-md z-20 shadow">
                  PROD
                </div>
              </div>

              {/* Stats badges */}
              <div className="flex items-center gap-2 text-center pb-1">
                <div className="bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-xl">
                  <span className="block font-mono-code font-bold text-xs text-amber-400">{artistInfo.stats.monthlyListeners}</span>
                  <span className="block text-[10px] text-zinc-500 uppercase">Listeners</span>
                </div>
                <div className="bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-xl">
                  <span className="block font-mono-code font-bold text-xs text-purple-400">{artistInfo.stats.streams}</span>
                  <span className="block text-[10px] text-zinc-500 uppercase">Streams</span>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-zinc-100 tracking-wider font-graffiti">
                  {artistInfo.name}
                </h1>
                <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded border border-amber-500/30 font-mono-code">
                  VERIFIED BK
                </span>
              </div>
              <p className="text-xs font-mono-code text-amber-400/90">{artistInfo.tagline}</p>
              
              <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
                {artistInfo.bio}
              </p>

              <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{artistInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Player Component */}
        <AudioPlayer tracks={tracks} />

        {/* Navigation Tabs (Links, Tour, Merch) */}
        <div className="flex bg-[#121216] p-1.5 rounded-2xl border border-zinc-800">
          <button
            onClick={() => setActiveTab('links')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'links' 
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Link Vault</span>
          </button>
          
          <button
            onClick={() => setActiveTab('tour')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'tour' 
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>Tour & RSVP</span>
          </button>

          <button
            onClick={() => setActiveTab('merch')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'merch' 
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Disc3 className="w-4 h-4" />
            <span>Merch Drops</span>
          </button>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'links' && (
          <div className="space-y-3.5 animate-fadeIn">
            {links.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>
        )}

        {activeTab === 'tour' && (
          <div className="animate-fadeIn">
            <TourSection />
          </div>
        )}

        {activeTab === 'merch' && (
          <div className="animate-fadeIn">
            <MerchSection />
          </div>
        )}

        {/* SMS VIP Club */}
        <SmsClub />

        {/* Footer Branding */}
        <footer className="text-center py-6 text-xs text-zinc-600 font-mono-code space-y-2">
          <div className="flex items-center justify-center gap-2 text-zinc-500">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>BUILT IN BUSHWICK // ANALOG ONLY</span>
          </div>
          <p>© 2025 KASE.K MUSIC. ALL RIGHTS RESERVED.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
