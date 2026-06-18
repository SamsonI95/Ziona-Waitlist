import CircleSlider from "@/components/CircleSlider";
import ImageMotionSlider from "@/components/ImageMotionSlider";
import { circleSlides } from "@/data/circleSlides";
import { creativeSliderImages } from "@/data/creativeSliderImages";

const WhatWeDoSection = () => {
  return (
    <section className="mx-auto py-24 sm:py-32">
      <div className="mx-auto max-w-[96rem] px-4 lg:px-12">
        <h3 className="text-center font-bree text-4xl font-normal lg:text-6xl">
          A Community of Creatives for Christ
        </h3>
        <p className="mx-auto mt-4 max-w-[50rem] text-center text-sm font-normal text-neutral-text-secondary lg:text-2xl">
          Use your gifts to inspire, uplift, and share God&apos;s message. Join a space where creators turn
          their talent into purpose and impact lives through faith-driven content.
        </p>
        <ImageMotionSlider images={creativeSliderImages} className="mt-12 lg:mt-16" />
      </div>

      <div className="mt-[97px] lg:mt-[164px]">
        <h3 className="text-center font-bree text-4xl font-normal lg:text-6xl">
          Introducing Circles!
        </h3>
        <p className="mx-auto mt-4 max-w-[50rem] text-center text-sm font-normal text-neutral-text-secondary lg:text-2xl">
          Circles are spaces where people like you come together to share, encourage, and grow.
        </p>
        <CircleSlider slides={circleSlides} className="mx-auto mt-10 max-w-[78rem] px-4 lg:mt-14 lg:px-12" />
      </div>
    </section>
  );
};

export default WhatWeDoSection;
