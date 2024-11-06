import LaptopMockup from "../../assets/LaptopMockup.png";
import register from "../../assets/registerbg.png";
import winner from "../../assets/winnerbg.png";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string; // Include image URL
}

const data: TimelineEntry[] = [
  {
    title: "Registration: 7th to 8th October",
    content: (
      <img
        src={register}
        alt="startup template"
        className="object-cover h-28 md:h-44 lg:h-40 ml-8 md:mx-auto"
      />
    ),
    image: register,
  },
  {
    title: "Hackathon Days: 11th to 13th October",
    content: (
      <img
        src={LaptopMockup}
        alt="startup template"
        className="object-cover h-28 md:h-44 lg:h-40 ml-8 md:mx-auto"
      />
    ),
    image: LaptopMockup,
  },
  {
    title: "Winner Announcement: 24th October",
    content: (
      <img
        src={winner}
        alt="startup template"
        className="object-cover h-28 md:h-44 lg:h-40 ml-8 md:mx-auto"
      />
    ),
    image: winner,
  },
];

const Eventdetails = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full md:mx-20 bg-dark font-sans md:px-10 overflow-y-hidden"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start md:pt-28 md:gap-10"
          >
            {/* Left Section: Timeline marker and title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Right Section: Image, content */}
            <div className="relative pl-20 pr-8 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>

              {/* Content Section */}
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;
