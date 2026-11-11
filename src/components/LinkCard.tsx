import React from 'react';
import { 
  Music, 
  Disc, 
  Video, 
  Radio, 
  CloudRain, 
  MessageSquare, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { LinkItem } from '../data/artistData';

interface LinkCardProps {
  link: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Music': return <Music className="w-5 h-5 text-amber-400" />;
      case 'Disc': return <Disc className="w-5 h-5 text-purple-400" />;
      case 'Video': return <Video className="w-5 h-5 text-red-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-sky-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full p-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 ${
        link.featured 
          ? 'bg-gradient-to-r from-[#1c1a26] via-[#16161b] to-[#121216] border-2 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] hover:border-amber-400' 
          : 'bg-[#141418]/80 hover:bg-[#1a1a22] border border-zinc-800/80 hover:border-zinc-700 shadow-lg'
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl border ${
            link.featured 
              ? 'bg-amber-500/10 border-amber-500/30 group-hover:bg-amber-500/20' 
              : 'bg-zinc-900 border-zinc-800 group-hover:border-zinc-700'
          } transition-colors`}>
            {getIcon(link.iconName)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm md:text-base text-zinc-100 group-hover:text-amber-400 transition-colors tracking-wide">
                {link.title}
              </h3>
              {link.badge && (
                <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                  {link.badge}
                </span>
              )}
            </div>
            {link.subtitle && (
              <p className="text-xs text-zinc-400 mt-0.5 font-normal">
                {link.subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="pl-2">
          <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-all">
            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};
