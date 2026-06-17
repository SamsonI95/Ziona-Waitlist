import image101 from "@/assets/image 101.png";
import playstore from "@/assets/Playstore.png"
import { TbBrandAppleFilled } from "react-icons/tb";

const ContactSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-8 mt-[59px] px-4 lg:px-20 bg-[#FBF2E6] pt-16 pb-10 lg:flex-row lg:justify-between lg:gap-12 lg:pt-17 lg:pb-22">
      <img src={image101} alt="Zionking app preview 1" className="w-[78%] max-w-[18rem] lg:w-auto lg:max-w-none" />
      <div className="flex flex-col items-center gap-4 lg:gap-11 lg:items-start lg:max-w-[737px]">
        <h3 className="text-3xl lg:text-6xl font-normal font-bree text-center">Share God’s Word Through Creative Expression</h3>
        <p className="text-base lg:text-2xl font-normal text-center">Explore your faith through videos, images, and scripture. As a leading app for christians, Ziona lets you create content that inspires, uplifts, and connects believers around the world.</p>
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
      </div>
    </section>
  );
};

export default ContactSection;
