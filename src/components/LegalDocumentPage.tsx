import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export type LegalContentBlock =
  | string
  | {
    heading?: string;
    intro?: string;
    bullets?: string[];
    outro?: string;
    emphasized?: boolean;
  };

export type LegalSection = {
  id: string;
  title: string;
  content: LegalContentBlock[];
};

type LegalDocumentPageProps = {
  title: string;
  introContent?: readonly LegalContentBlock[];
  introClassName?: string;
  sections: readonly LegalSection[];
};

const renderContentBlock = (block: LegalContentBlock, key: string) => {
  if (typeof block === "string") {
    return (
      <p key={key} className="whitespace-pre-line">
        {block.replace(/<br\s*\/?>/g, "\n")}
      </p>
    );
  }

  const emphasisClass = block.emphasized ? "font-semibold" : "";

  return (
    <div key={key} className="space-y-3">
      {block.heading ? <h3 className="text-base font-semibold text-black">{block.heading}</h3> : null}
      {block.intro ? <p className={`whitespace-pre-line ${emphasisClass}`.trim()}>{block.intro}</p> : null}
      {block.bullets?.length ? (
        <ul className="ml-6 list-disc space-y-1 pl-6">
          {block.bullets.map((item, index) => (
            <li key={`${key}-bullet-${index}`}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.outro ? <p className={`whitespace-pre-line ${emphasisClass}`.trim()}>{block.outro}</p> : null}
    </div>
  );
};

const LegalDocumentPage = ({ title, introContent, introClassName, sections }: LegalDocumentPageProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 180;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        const element = document.getElementById(section.id);

        if (element && window.scrollY + offset >= element.offsetTop) {
          setActiveSection(section.id);
          return;
        }
      }

      if (sections[0]) {
        setActiveSection(sections[0].id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-4 lg:px-20">
        <section className="py-10 lg:py-15">
          <h1 className="text-start font-bree text-3xl text-[#1a131c] lg:text-6xl">{title}</h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${isActive ? "text-black" : "text-primary-brand hover:text-[#1a131c]"
                        }`}
                    >
                      {section.title}
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className={introContent?.length ? "space-y-6" : "space-y-10"}>
              {introContent?.length ? (
                <div className={`space-y-1 text-xs font-normal leading-5 text-black ${introClassName ?? ""}`.trim()}>
                  {introContent.map((block, index) => renderContentBlock(block, `intro-${index}`))}
                </div>
              ) : null}
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-36">
                  <h2 className="text-xl font-semibold text-black">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-7 text-black">
                    {section.content.map((block, index) => renderContentBlock(block, `${section.id}-${index}`))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LegalDocumentPage;
