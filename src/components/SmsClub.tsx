import React, { useState } from 'react';
import { MessageSquareCode, CheckCircle2, Send } from 'lucide-react';

export const SmsClub: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-[#181622] via-[#121216] to-[#0f0e13] border border-purple-500/30 rounded-2xl p-5 shadow-xl relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-2">
        <MessageSquareCode className="w-5 h-5 text-purple-400" />
        <span className="text-xs font-mono-code text-purple-400 uppercase tracking-widest">// Direct Line</span>
      </div>

      <h3 className="font-bold text-base md:text-lg text-zinc-100 mb-1">
        TEXT THE BLOCK (SMS DROP CLUB)
      </h3>
      <p className="text-xs text-zinc-400 mb-4">
        Get secret vinyl restocks, unreleased acapellas, and underground pop-up coordinates straight to your phone before anyone else.
      </p>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-xl p-4 text-center">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1 animate-bounce" />
          <h4 className="font-bold text-sm text-emerald-300">YOU'RE ON THE LIST</h4>
          <p className="text-xs text-zinc-400 mt-1">Expect a text from +1 (718) 555-KASE soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="tel"
            required
            placeholder="+1 (718) 555-0199"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(147,51,234,0.3)] active:scale-95 flex-shrink-0"
          >
            <span>JOIN</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
};
