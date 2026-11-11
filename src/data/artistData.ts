export interface Track {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  audioUrl: string;
  plays: string;
}

export interface Show {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: 'Selling Fast' | 'Almost Sold Out' | 'Secret Location' | 'Sold Out';
  ticketUrl: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  tag: string;
  image: string;
  soldOut?: boolean;
}

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  iconName: string;
  badge?: string;
  featured?: boolean;
}

export const artistInfo = {
  name: "KASE.K",
  handle: "@kase.kut",
  tagline: "Bushwick, BK // Boom Bap Soul & Concrete Grit",
  avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=600&auto=format&fit=crop",
  banner: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
  bio: "Independent producer & emcee out of East New York & Bushwick. Pushing raw analog frequencies and uncompromised street poetry. New tape '99 BULLETS' out now everywhere.",
  location: "Brooklyn, NY (40.6782° N, 73.9442° W)",
  stats: {
    monthlyListeners: "42.8K",
    streams: "1.4M",
    cratesSold: "1,500"
  }
};

export const tracks: Track[] = [
  {
    id: "t1",
    title: "99 BULLETS (FEAT. GRIME GOD)",
    subtitle: "Prod. by KASE.K x Statik Vibe",
    duration: "3:14",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    plays: "128.4K"
  },
  {
    id: "t2",
    title: "ROOFTOPS & FIRE ESCAPES",
    subtitle: "From the upcoming vinyl 'Concrete Tapes Vol. 2'",
    duration: "2:45",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    plays: "84.2K"
  },
  {
    id: "t3",
    title: "L TRAIN FREESTYLE (LIVE)",
    subtitle: "One take recorded live between Bedford & Morgan",
    duration: "1:58",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    plays: "210.9K"
  }
];

export const shows: Show[] = [
  {
    id: "s1",
    date: "OCT 24",
    city: "BROOKLYN, NY",
    venue: "The Basement Vault (Bushwick)",
    status: "Almost Sold Out",
    ticketUrl: "#rsvp"
  },
  {
    id: "s2",
    date: "NOV 02",
    city: "MANHATTAN, NY",
    venue: "S.O.B.'s (Lower East Side)",
    status: "Selling Fast",
    ticketUrl: "#rsvp"
  },
  {
    id: "s3",
    date: "NOV 18",
    city: "PHILADELPHIA, PA",
    venue: "Underground Arts",
    status: "Secret Location",
    ticketUrl: "#rsvp"
  }
];

export const merchItems: MerchItem[] = [
  {
    id: "m1",
    name: "'99 BULLETS' LIMITED 12\" VINYL",
    price: "$35.00",
    tag: "180g Splatter Wax / 300 Pressed",
    image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "m2",
    name: "BUSHWHICK CONCRETE HOODIE",
    price: "$65.00",
    tag: "Heavyweight 14oz Vintage Wash",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "m3",
    name: "CASSETTE TAPE (STEREO MIX)",
    price: "$15.00",
    tag: "Translucent Smoke Tape + Sticker Pack",
    image: "https://images.unsplash.com/photo-1546702677-2e6b0636a0fb?q=80&w=600&auto=format&fit=crop",
    soldOut: false
  }
];

export const links: LinkItem[] = [
  {
    id: "l1",
    title: "STREAM '99 BULLETS' ON SPOTIFY",
    subtitle: "Add to your heavy rotation playlist",
    url: "https://spotify.com",
    iconName: "Music",
    badge: "NEW",
    featured: true
  },
  {
    id: "l2",
    title: "BANDCAMP // BUY VINYL & DIGITAL",
    subtitle: "Support independent underground directly",
    url: "https://bandcamp.com",
    iconName: "Disc",
    badge: "SHIPS FAST",
    featured: true
  },
  {
    id: "l3",
    title: "YOUTUBE // LATEST VISUAL & FREESTYLES",
    subtitle: "Watch the 'Rooftops' official 4K video",
    url: "https://youtube.com",
    iconName: "Video"
  },
  {
    id: "l4",
    title: "APPLE MUSIC // LOSSLESS AUDIO",
    subtitle: "Experience every frequency",
    url: "https://apple.com",
    iconName: "Radio"
  },
  {
    id: "l5",
    title: "SOUNDCLOUD // UNRELEASED DEMOS & REMIXES",
    subtitle: "Raw unmastered vault cuts",
    url: "https://soundcloud.com",
    iconName: "CloudRain"
  },
  {
    id: "l6",
    title: "DISCORD // BK UNDERGROUND HEADS",
    subtitle: "Beat battles, vinyl trade & private AMAs",
    url: "https://discord.com",
    iconName: "MessageSquare"
  }
];
