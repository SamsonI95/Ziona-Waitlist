import image93 from "@/assets/image 93.png";
import { Button } from "./ui/button";

const FoundationSection = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-8 mt-[59px] px-4 lg:px-20 bg-[#e32b60] pt-16 pb-10 lg:flex-row lg:justify-between lg:gap-12 lg:pt-17 lg:pb-22">
      <img src={image93} alt="Zionking app preview 1" className="" />
      <div className="flex flex-col items-center gap-4 lg:gap-11 lg:items-start lg:max-w-[737px]">
        <h3 className="text-[#fdedea] text-3xl lg:text-6xl font-normal font-bree text-center lg:text-left">Share God’s Word Through Creative Expression</h3>
        <p className="text-[#fdedea] text-base lg:text-2xl font-normal text-center lg:text-left">Explore your faith through videos, images, and scripture. As a leading app for christians, Ziona lets you create content that inspires, uplifts, and connects believers around the world.</p>
        <Button
          type="submit"
          variant="navbarCta"
          size="lg"
          className="w-[170px] lg:w-96 rounded-[100px] bg-[#fdedea] text-[#411C02] hover:bg-[#fdedea]/90"
        >
          Download the app
        </Button>
      </div>
    </section>
  );
};

export default FoundationSection;
