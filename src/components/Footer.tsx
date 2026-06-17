import { ChevronUp, } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

type FooterSection = {
  title: string;
  links: Array<{
    label: string;
    to: string;
  }>;
};

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [{ label: "About", to: "/about" }],
  },
  {
    title: "Support",
    links: [{ label: "Contact", to: "/contact" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/privacy" },
      { label: "Terms of service", to: "/terms-of-service" },
      { label: "Community guidelines", to: "/community-guidelines" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ziona.app?igsh=bmR3aXV5ZGx3ZHo1", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1UN2Xjh7mF/", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zionas/", icon: FaLinkedinIn },
  { label: "Tiktok", href: "https://www.tiktok.com/@ziona.socials?_r=1&_t=ZS-96gcCdrKykk", icon: FaTiktok }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09000D] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-[88px] lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="hidden lg:block">
            <h2 className="mx-auto max-w-[600px] text-center font-bree text-lg leading-[1.35] text-white lg:text-[3.5rem]">
              A Creative Home for Christian
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4 lg:gap-8">
              <Link to="/" className="inline-flex w-fit items-center">
                <img src="/White-logo.png" alt="Ziona logo" className="h-10 w-auto lg:h-12" />
              </Link>

              <h2 className="font-bree text-lg leading-[1.3] text-white lg:hidden">
                A Creative Home for Christian
              </h2>

              <div className="flex items-center gap-3 lg:hidden">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.14] text-white transition-colors hover:bg-white/20"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:gap-0 sm:grid-cols-3">
              {footerSections.map((section) => (
                <div key={section.title} className="w-fit">
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {section.title}
                  </h3>
                  <div className="mt-2 flex flex-col gap-4 lg:mt-5">
                    {section.links.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="text-base leading-tight text-white/90 transition-colors hover:text-white "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/90" />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-[1.45rem] text-white lg:text-[1.2rem]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white text-lg font-semibold">
                C
              </span>
              <span className="text-sm">zionkingllc</span>
            </div>

            <div className="flex items-center justify-between gap-5 lg:justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/[0.08] text-white transition duration-200 hover:bg-white/[0.16] hover:shadow-lg active:scale-95"
              >
                <ChevronUp className="h-6 w-6" />
              </button>

              <div className="hidden items-center gap-5 lg:flex">
                <span className="text-[1.2rem] font-semibold text-white">Follow us on</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="text-white transition-opacity hover:opacity-80"
                    >
                      <Icon className="h-7 w-7" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
