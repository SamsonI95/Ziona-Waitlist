import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

import type { ZionaTestimonial } from "@/data/zionaTestimonials";

type ZionaTestimonialCarouselProps = {
  items: ZionaTestimonial[];
  className?: string;
};

const ZionaTestimonialCarousel = ({ items, className }: ZionaTestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  return (
    <div className={className}>
      <div
        className="overflow-hidden rounded-[2rem] px-5 py-5 shadow-[0_22px_60px_rgba(17,12,23,0.12)] sm:px-6 sm:py-6 lg:px-7 lg:py-7"
        style={{ backgroundColor: activeItem.shellBackground }}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeItem.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-8"
          >
            <div className="flex items-center gap-3 lg:w-[10rem] lg:flex-col lg:items-start lg:gap-4 lg:pt-5">
              <img
                src={activeItem.avatarSrc}
                alt={activeItem.avatarAlt}
                className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white/20 lg:h-14 lg:w-14"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-inter text-lg font-semibold leading-6 text-white">{activeItem.name}</p>
                <p className="mt-1 font-inter text-base leading-5 text-white/85">{activeItem.role}</p>
              </div>
            </div>

            <div
              className="rounded-[1.5rem] px-6 py-6 text-white sm:px-7 sm:py-7 lg:min-h-[17rem] lg:px-8 lg:py-8"
              style={{ backgroundColor: activeItem.cardBackground }}
            >
              <div className="flex items-center gap-2">
                {Array.from({ length: activeItem.rating }).map((_, index) => (
                  <Star
                    key={`${activeItem.id}-star-${index}`}
                    className="h-5 w-5 fill-current"
                    style={{ color: activeItem.accentColor }}
                  />
                ))}
              </div>

              <blockquote className="mt-10 max-w-[40rem] font-inter text-2xl leading-[1.55] tracking-[-0.02em] lg:mt-14 lg:text-[2.05rem]">
                "{activeItem.quote}"
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/85"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next testimonial"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/85"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ZionaTestimonialCarousel;
