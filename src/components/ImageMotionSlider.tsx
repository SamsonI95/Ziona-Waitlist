import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { CreativeSliderImage } from "@/data/creativeSliderImages";

type ImageMotionSliderProps = {
  images: CreativeSliderImage[];
  className?: string;
  renderImage?: (
    image: CreativeSliderImage,
    imageClassName: string,
    loading: "eager" | "lazy",
  ) => ReactNode;
};

const MOBILE_AUTOPLAY_MS = 3200;

const createBalancedDesktopRows = (images: CreativeSliderImage[]) => {
  const compactImages = images.filter((image) => image.width / image.height <= 1.1);
  const wideImages = images.filter((image) => image.width / image.height > 1.1);

  const topRowImages: CreativeSliderImage[] = [];
  const bottomRowImages: CreativeSliderImage[] = [];

  while (compactImages.length > 0 || wideImages.length > 0) {
    const topCompactCount = topRowImages.filter((image) => image.width / image.height <= 1.1).length;
    const bottomCompactCount = bottomRowImages.filter((image) => image.width / image.height <= 1.1).length;
    const nextCompactImage = compactImages.shift();

    if (nextCompactImage) {
      if (topCompactCount <= bottomCompactCount) {
        topRowImages.push(nextCompactImage);
      } else {
        bottomRowImages.push(nextCompactImage);
      }
    }

    const topWideCount = topRowImages.filter((image) => image.width / image.height > 1.1).length;
    const bottomWideCount = bottomRowImages.filter((image) => image.width / image.height > 1.1).length;
    const nextWideImage = wideImages.shift();

    if (nextWideImage) {
      if (topWideCount <= bottomWideCount) {
        topRowImages.push(nextWideImage);
      } else {
        bottomRowImages.push(nextWideImage);
      }
    }
  }

  return { topRowImages, bottomRowImages };
};

const DesktopRow = ({
  images,
  direction,
  duration,
  renderImage,
}: {
  images: CreativeSliderImage[];
  direction: "left" | "right";
  duration: number;
  renderImage: ImageMotionSliderProps["renderImage"];
}) => {
  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-5 transform-gpu will-change-transform"
        animate={{
          x: direction === "left" ? ["0%", "-50%", "-50%"] : ["-50%", "0%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.94, 1],
        }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.div
            key={`${image.id}-${index}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn(
              "group relative hidden h-[16rem] shrink-0 overflow-hidden rounded-[28px] bg-neutral-background-secondary shadow-[0_18px_40px_rgba(17,12,23,0.08)] md:block lg:h-[18rem]",
              image.desktopWidthClass,
            )}
          >
            {renderImage?.(
              image,
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
              index < images.length ? "eager" : "lazy",
            ) ?? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading={index < images.length ? "eager" : "lazy"}
                  decoding="async"
                />
              )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ImageMotionSlider = ({ images, className, renderImage }: ImageMotionSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { topRowImages, bottomRowImages } = useMemo(
    () => createBalancedDesktopRows(images),
    [images],
  );

  useEffect(() => {
    if (images.length === 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, MOBILE_AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 md:block" />

      <div className="md:hidden">
        <div className="relative h-[22rem] w-full overflow-hidden rounded-[28px] bg-neutral-background-secondary shadow-[0_24px_60px_rgba(17,12,23,0.12)]">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {renderImage?.(
                activeImage,
                "h-full w-full object-cover",
                activeIndex === 0 ? "eager" : "lazy",
              ) ?? (
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="h-full w-full object-cover"
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden space-y-5 md:block">
        <DesktopRow
          images={topRowImages}
          direction="left"
          duration={34}
          renderImage={renderImage}
        />
        <div className="">
          <DesktopRow
            images={bottomRowImages}
            direction="right"
            duration={38}
            renderImage={renderImage}
          />
        </div>
      </div>

      <div className="relative z-20 mt-6 flex items-center justify-center gap-2.5 md:hidden">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.span
              key={image.id}
              animate={{
                width: isActive ? 28 : 8,
                opacity: isActive ? 1 : 0.35,
                backgroundColor: isActive ? "#742092" : "#D8D2DB",
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-block h-2 shrink-0 rounded-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageMotionSlider;
