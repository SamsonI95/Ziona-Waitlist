import image60 from "@/assets/image 60.png";
import image59 from "@/assets/image 59.png";
import image58 from "@/assets/image 58.png";
import image57 from "@/assets/image 57.png";
import image51 from "@/assets/image 51.png";

export type CircleSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cardBackground: string;
  imageSrc: string;
  imageAlt: string;
};

export const circleSlides: CircleSlide[] = [
  {
    id: "circle-faith-work-purpose",
    eyebrow: "Circle 1",
    title: "Faith, Work & Purpose",
    description:
      "A community where Christians discuss career, business, finances and finding purpose in work while honoring God.",
    cardBackground: "#6A1FB2",
    imageSrc: image60,
    imageAlt: "Creative Christian artisan working with care and purpose",
  },
  {
    id: "circle-relationships",
    eyebrow: "Circle 2",
    title: "Prayer & Intercession",
    description:
      "This circle is for believers to come together to pray for one another. Members can share prayer requests, intercede for others and celebrate answered prayers.",
    cardBackground: "#A13A72",
    imageSrc: image59,
    imageAlt: "Friends sharing a warm, encouraging conversation together",
  },
  {
    id: "circle-prayer-growth",
    eyebrow: "Circle 3",
    title: "Prayer, Healing & Growth",
    description:
      "A safe space to pray together, testify, and walk through seasons of healing, spiritual growth, and renewed faith.",
    cardBackground: "#1F8A70",
    imageSrc: image58,
    imageAlt: "Community gathering in reflection and spiritual encouragement",
  },
  {
    id: "circle-creators",
    eyebrow: "Circle 4",
    title: "Creators for Christ",
    description:
      "Connect with filmmakers, writers, designers, and storytellers who want to use creativity to reflect Jesus and serve people well.",
    cardBackground: "#D97706",
    imageSrc: image57,
    imageAlt: "Faith-driven creative community with storytelling visuals",
  },
  {
    id: "circle-mentorship-discipleship",
    eyebrow: "Circle 5",
    title: "Mentorship & Discipleship",
    description:
      "A space for believers to learn, ask questions, receive godly counsel, and grow deeper through intentional discipleship and spiritual accountability.",
    cardBackground: "#2563EB",
    imageSrc: image51,
    imageAlt: "Christian mentorship and discipleship community",
  },
];
