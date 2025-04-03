/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  second = false,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const route = useLocation();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-0  w-full overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-2 w-max   flex-nowrap",
          start && "animate-scroll  ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const index = second ? ++idx : ++idx + 9;
          const src = route.pathname.includes("banking-psp")
            ? "./services/bank" + ` ${index}.png`
            : "./services/image" +
              (index != 15 ? ` ${index}.png` : ` ${index}.svg`);

          return (
            <li
              className=" max-w-full relative rounded-2xl flex items-center  flex-shrink-0  px-4 py-4"
              style={{
                background: "",
              }}
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <img
                  src={src}
                  className={`bg-contain mix-blend-multiply object-contain origin-top-left md:w-36 md:h-auto sm:w-32 sm:h-32 w-20 h-20 `}
                />
                {/* <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div> */}
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
