import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';
import image86 from "@/assets/image 86.png";
import image88 from "@/assets/image 88.png";
import image90 from "@/assets/image 90.png";
import image101 from "@/assets/image 101.png";
import playstore from "@/assets/Playstore.png"
import { TbBrandAppleFilled } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="relative hero-bg overflow-hidden ">
      <section className="flex flex-col items-center px-4 lg:px-61">
        <h3 className="self-stretch text-center justify-start font-bree text-4xl lg:text-6xl font-normal">Create, Share and Shine for Christ</h3>
        <p className="self-stretch text-center justify-start text-xs lg:text-2xl font-normal my-4 lg:mt-4 lg:mb-8">A space where your faith meets creativity — videos, stories, and inspiration that uplift, connect, and glorify God.</p>
        <div className="flex w-full self-center items-center justify-center gap-3 lg:gap-4 lg:justify-center">
          {/* App Store */}
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 text-white transition hover:scale-[1.02] hover:opacity-90 lg:gap-3 lg:px-5 lg:py-3">
            <TbBrandAppleFilled className="h-5 w-5 text-white lg:h-7 lg:w-7" />

            <div className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium uppercase tracking-wide text-white/70 lg:text-[11px]">
                Download on the
              </span>

              <span className="text-sm font-semibold lg:text-lg">
                App Store
              </span>
            </div>
          </button>

          {/* Google Play */}
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 text-white transition hover:scale-[1.02] hover:opacity-90 lg:gap-3 lg:px-5 lg:py-3">
            <img src={playstore} alt="playstore" className="h-5 w-5 lg:h-7 lg:w-7" />

            <div className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium uppercase tracking-wide text-white/70 lg:text-[11px]">
                Get it on
              </span>

              <span className="text-sm font-semibold lg:text-lg">
                Google Play
              </span>
            </div>
          </button>
        </div>
        <div className="flex gap-4 items-center mt-5 lg:mt-6">
          <Globe className="size-6" />
          <div className="flex flex-col items-start justify-start">
            <p className="text-xs lg:text-base font-medium">Join 100,000 people online</p>
            <p className="text-xs font-normal lg:font-medium">Worldwide</p>
          </div>
        </div>
      </section>
      <section className="mt-10 px-4 lg:mt-14 lg:px-61">
        <div className="mx-auto flex w-full max-w-[60rem] items-end justify-center overflow-hidden">
          <img
            src={image90}
            alt="Zionking app preview 1"
            className="h-auto w-[31%] max-w-[11rem] shrink-0 translate-x-6 sm:max-w-[13rem] sm:translate-x-8 lg:max-w-[18rem] lg:translate-x-20"
          />
          <img
            src={image86}
            alt="Zionking app preview 2"
            className="z-10 h-auto w-[31%] max-w-[11rem] shrink-0 sm:max-w-[13rem] lg:max-w-[18rem]"
          />
          <img
            src={image88}
            alt="Zionking app preview 3"
            className="h-auto w-[31%] max-w-[11rem] shrink-0 -translate-x-6 sm:max-w-[13rem] sm:-translate-x-8 lg:max-w-[18rem] lg:-translate-x-20"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;