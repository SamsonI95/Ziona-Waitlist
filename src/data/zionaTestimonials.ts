export type ZionaTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  avatarAlt: string;
  shellBackground: string;
  cardBackground: string;
  accentColor: string;
  rating: number;
};

export const zionaTestimonials: ZionaTestimonial[] = [
  {
    id: "sarah-john",
    name: "Sarah John",
    role: "Content creator",
    quote:
      "For the first time, I feel like my content actually reflects my faith. Ziona gave me a space to create with purpose.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    avatarAlt: "Sarah John smiling portrait",
    shellBackground: "#EC1670",
    cardBackground: "#A40E53",
    accentColor: "#FDBA12",
    rating: 5,
  },
  {
    id: "daniel-ade",
    name: "Daniel Ade",
    role: "Youth leader",
    quote:
      "What I love most is how easy it is to encourage people every day. The platform feels modern, but still rooted in Christ.",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    avatarAlt: "Daniel Ade portrait",
    shellBackground: "#1457D2",
    cardBackground: "#0E43A3",
    accentColor: "#FACC15",
    rating: 5,
  },
  {
    id: "naomi-rose",
    name: "Naomi Rose",
    role: "Bible study host",
    quote:
      "Ziona helped our circle feel alive between meetups. We share truth, prayer, and encouragement in a way that feels beautiful and personal.",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
    avatarAlt: "Naomi Rose portrait",
    shellBackground: "#0A8C73",
    cardBackground: "#066A56",
    accentColor: "#FCD34D",
    rating: 5,
  },
];
