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
    <section className="bg-hero-gradient pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              A Social Platform That Puts{" "}
              <span className="text-gradient">Christian Faith</span> First.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
              Create. Share. Engage.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              A modern, safe space built for faith-centered community.
            </p>

          </div>
          
          <div className="w-full max-w-md mx-auto md:max-w-none">
            <div className="rounded-2xl bg-card p-6 md:p-8 shadow-2xl border border-border">
              <WaitlistForm />
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
  );
};

export default HeroSection;
