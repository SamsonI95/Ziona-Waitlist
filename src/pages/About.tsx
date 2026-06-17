import Navbar from "@/components/Navbar";
import AboutHighlightCard from "@/components/AboutHighlightCard";
import ContactSection from "@/components/ContactSection";
import { aboutHighlights, aboutVision } from "@/data/aboutHighlights";
import aboutVideo from "@/assets/lv_0_20260521130550.mp4";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-15 lg:pt-20">
        <div className="px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-6">
            <img src="/ziona-vector.png" alt="ziona-vector" className="mt-5 lg:mt-0 w-[370px] lg:w-[628px]" />
            <div className="w-full lg:w-[628px]">
              <p className="text-base lg:text-lg font-normal mb-6">Ziona is designed to become a global digital community where Christians connect, create faith-centred content, build meaningful relationships, and grow spiritually. Experience a true Christian social app without the distractions, hostility, and algorithmic suppression often experienced on mainstream platforms.</p>
              <p className="text-base lg:text-lg font-normal">The platform will combine:
                Faith-centered social networking, christian content creation tools, Community discussion circles, church and ministry engagement
                and mentorship and discipleship environments</p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-neutral-border-secondary bg-neutral-background-secondary shadow-[0_18px_40px_rgba(17,12,23,0.08)] lg:mt-14">
            <video className="aspect-video w-full bg-black object-cover object-[center_55%]" controls preload="metadata">
              <source src={aboutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="hidden lg:flex mt-[66px] bg-[#742092] px-20 py-[60px] flex-col items-center">
          <h3 className="w-[737px] text-center text-[#fdedea] text-6xl font-normal font-bree">Core mission and vision statement</h3>
          <div className="mt-10 flex w-full items-stretch gap-8">
            <div className="pl-5 pr-4 py-4 bg-[#541B68] rounded-[20px] inline-flex justify-evenly items-start gap-8 overflow-hidden">
              <div>
                <h3 className="justify-start text-white text-xl font-medium">Mission Statement</h3>
                <p className="justify-start text-white text-sm font-normal">To build the world&apos;s most trusted digital community for Christians where faith-centered
                  conversations, content creation, and fellowship can flourish without compromise.</p>
              </div>
              <div className="flex flex-col gap-4">
                {aboutHighlights.map((item) => (
                  <AboutHighlightCard key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="pl-5 pr-4 py-4 bg-[#541B68] rounded-[20px] inline-flex justify-evenly items-start gap-8 overflow-hidden">
              <div>
                <h3 className="justify-start text-white text-xl font-medium">Vision Statement</h3>
                <p className="justify-start text-white text-sm font-normal">
                  To become the global digital home for Christians — a platform where faith,
                  technology, and community converge to strengthen believers and transform culture.
                </p>
              </div>
              <div className="flex w-[19rem] flex-col gap-4">
                {aboutVision.map((item) => (
                  <AboutHighlightCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
    </div>
  );
};

export default About;
