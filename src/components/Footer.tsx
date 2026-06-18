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
    <footer className="py-10 border-t border-border">
      <div className="container text-center space-y-4">
        <img src={zionaWordmark} alt="Ziona" className="h-8 mx-auto" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ZionKing LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
