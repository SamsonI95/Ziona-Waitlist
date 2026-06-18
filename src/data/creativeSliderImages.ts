export type CreativeSliderImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  desktopWidthClass: string;
};

export const creativeSliderImages: CreativeSliderImage[] = [
  {
    id: "worship-room",
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    alt: "Worship team recording together in a creative studio",
    width: 900,
    height: 1200,
    desktopWidthClass: "md:w-[14rem] lg:w-[17rem]",
  },
  {
    id: "phone-scripture",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Christian creator planning faith content on a phone",
    width: 1400,
    height: 900,
    desktopWidthClass: "md:w-[24rem] lg:w-[30rem]",
  },
  {
    id: "creator-laptop",
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    alt: "Laptop workspace for editing inspirational digital content",
    width: 1200,
    height: 1200,
    desktopWidthClass: "md:w-[18rem] lg:w-[22rem]",
  },
  {
    id: "community-prayer",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=80",
    alt: "Small group gathering in prayer and community",
    width: 1500,
    height: 1000,
    desktopWidthClass: "md:w-[22rem] lg:w-[28rem]",
  },
  {
    id: "open-bible",
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1000&q=80",
    alt: "Open Bible with warm natural light",
    width: 1000,
    height: 1400,
    desktopWidthClass: "md:w-[15rem] lg:w-[18rem]",
  },
  {
    id: "camera-creator",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
    alt: "Content creator filming a message with a camera setup",
    width: 1600,
    height: 1000,
    desktopWidthClass: "md:w-[23rem] lg:w-[29rem]",
  },
  {
    id: "hands-notes",
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    alt: "Journal notes and handwritten reflections during study",
    width: 1100,
    height: 1100,
    desktopWidthClass: "md:w-[17rem] lg:w-[21rem]",
  },
  {
    id: "sunrise-cross",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Sunrise landscape evoking hope and spiritual reflection",
    width: 1600,
    height: 900,
    desktopWidthClass: "md:w-[24rem] lg:w-[31rem]",
  },
  {
    id: "podcast-mic",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1100&q=80",
    alt: "Podcast microphone for sharing uplifting stories",
    width: 1000,
    height: 1300,
    desktopWidthClass: "md:w-[15rem] lg:w-[19rem]",
  },
  {
    id: "creative-desk",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=80",
    alt: "Creative desk setup for producing modern faith media",
    width: 1500,
    height: 1000,
    desktopWidthClass: "md:w-[21rem] lg:w-[27rem]",
  },
];
