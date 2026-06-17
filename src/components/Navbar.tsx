import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
];

const Navbar = () => {
  return (
    <nav className="z-50 px-3 pt-6.5 font-inter lg:px-20 lg:pt-11.5">
      <div className="container mx-auto rounded-[100px] bg-white px-4 py-3 shadow-[0_2px_2px_0px_rgba(176,168,168,0.06),0_-2px_2px_0px_rgba(176,168,168,0.06),2px_0px_2px_0px_rgba(176,168,168,0.06),-2px_0px_2px_0px_rgba(176,168,168,0.06)] sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 justify-start">
            <Link to="/">
              <img src="/Nav-Logo.png" alt="zionking-logo" width={120} height={40} />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-lg leading-6 transition-colors ${isActive
                    ? "font-medium text-primary-brand"
                    : "font-normal text-neutral-text-secondary hover:text-primary-brand"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-1 justify-end">
            <Button variant="navbarCta" className="hidden font-inter sm:inline-flex">
              Download the app
            </Button>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 rounded-full text-neutral-text-primary hover:bg-neutral-background-secondary"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[82%] border-l-0 bg-white px-6 py-8 sm:max-w-sm">
                  <SheetHeader className="text-left">
                    <SheetTitle className="font-bree text-2xl text-neutral-text-primary">Menu</SheetTitle>
                    <SheetDescription className="font-inter text-neutral-text-secondary">
                      Explore Ziona and navigate through the site.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-10 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <NavLink
                          to={link.to}
                          end={link.end}
                          className={({ isActive }) =>
                            `rounded-2xl px-4 py-3 text-base transition-colors ${isActive
                              ? "bg-primary-brand/10 font-medium text-primary-brand"
                              : "text-neutral-text-primary hover:bg-neutral-background-secondary"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-8">
                    <SheetClose asChild>
                      <Button variant="navbarCta" className="w-full font-inter">
                        Download the app
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
