import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, CheckCircle2, X } from 'lucide-react';
import { shows, Show } from '../data/artistData';

export const TourSection: React.FC = () => {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setSelectedShow(null);
      setEmail('');
    }, 2500);
  };

  return (
    <div className="bg-[#121216]/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold text-zinc-100 tracking-wider text-sm font-mono-code uppercase">
            // Live & Secret Pop-ups
          </h3>
        </div>
        <span className="text-xs text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
          Fall Tour 2025
        </span>
      </div>

      <div className="space-y-3">
        {shows.map((show) => (
          <div
            key={show.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all gap-3 group"
          >
            <div className="flex items-start sm:items-center gap-3">
              <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg p-2.5 text-center min-w-[55px]">
                <span className="block text-[10px] font-mono-code uppercase tracking-widest opacity-80">
                  {show.date.split(' ')[0]}
                </span>
                <span className="block text-base font-bold font-mono-code">
                  {show.date.split(' ')[1]}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <h4 className="font-bold text-sm text-zinc-200">{show.city}</h4>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{show.venue}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
              <span className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full ${
                show.status === 'Almost Sold Out' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse' 
                  : show.status === 'Secret Location'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {show.status}
              </span>

              <button
                onClick={() => setSelectedShow(show)}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>RSVP</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      {selectedShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#18181c] border border-amber-500/40 rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedShow(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 p-1 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {booked ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1">RSVP SECURED!</h3>
                <p className="text-xs text-zinc-400">
                  Secret location coordinates & flyer sent to <span className="text-amber-400">{email}</span>. Check your spam folder just in case.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono-code text-amber-400 uppercase">// Guestlist Pass</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1">{selectedShow.city}</h3>
                <p className="text-xs text-zinc-400 mb-6">{selectedShow.venue} — {selectedShow.date}</p>

                <form onSubmit={handleRSVP} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-code text-zinc-400 mb-1.5">
                      EMAIL FOR SECRET ADDRESS & GATE CODE
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kasefan@brooklyn.ny"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  >
                    CONFIRM VIP RSVP
                  </button>
                  <p className="text-[10px] text-center text-zinc-500">
                    Strict capacity limit. First come, first served at the door.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
