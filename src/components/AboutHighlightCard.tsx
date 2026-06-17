import type { AboutHighlight } from "@/data/aboutHighlights";

type AboutHighlightCardProps = {
  item: AboutHighlight;
};

const AboutHighlightCard = ({ item }: AboutHighlightCardProps) => {
  return (
    <div className="w-[244px] overflow-hidden rounded-xl bg-[#ede9ee] px-3.5 py-2">
      <div className="self-stretch text-base font-normal leading-6 text-black">{item.text}</div>
    </div>
  );
};

export default AboutHighlightCard;
