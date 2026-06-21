import { Button } from "@/components/ui/button";
import ZionaTestimonialCarousel from "@/components/ZionaTestimonialCarousel";
import { zionaTestimonials } from "@/data/zionaTestimonials";
import image94 from "@/assets/image 94.png";


const ZionaSection = () => {
  return (
    <>

      <section className="flex flex-col-reverse items-center gap-8 mt-[59px] px-4 lg:px-20 bg-[#e32bcf] pt-16 pb-10 lg:flex-row lg:justify-between lg:gap-12 lg:pt-17 lg:pb-22">
        <img src={image94} alt="Zionking app preview 1" className="" />
        <div className="flex flex-col items-center gap-4 lg:gap-11 lg:items-start lg:max-w-[737px]">
          <h3 className="text-[#fdedea] text-3xl lg:text-6xl font-normal font-bree text-center lg:text-left">Guided Moments for Your Daily Walk</h3>
          <p className="text-[#fdedea] text-base lg:text-2xl font-normal text-center lg:text-left">Engage with daily bible devotions and reading plans shared in your circles. Designed to inspire reflection, spark conversations, and guide your everyday life alongside your local faith church community.</p>
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

      <div className="mt-10 lg:mt-[90px]">
        <h3 className="text-center font-bree text-4xl font-normal lg:text-6xl">
          Introducing Circles!
        </h3>
        <p className="mx-auto mt-4 max-w-[50rem] text-center text-sm font-normal text-neutral-text-secondary lg:text-2xl">
          Circles are spaces where people like you come together to share, encourage, and grow.
        </p>
        <ZionaTestimonialCarousel
          items={zionaTestimonials}
          className="mx-auto mt-10 max-w-[73rem] px-4 lg:mt-14 lg:px-12"
        />
      </div>
    </>
  );
};

export default ZionaSection;
