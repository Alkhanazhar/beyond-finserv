/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  second = false,
  className,
  first = false,
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
  const fintech = [
    "image 1.png",
    "image 2.png",
    "image 3.png",
    "image 4.png",
    "image 5.png",
    "image 6.png",
    "image 7.png",
    "image 8.png",
    "image 9.png",
    "image 10.png",
    "image 11.png",
    "image 12.png",
    "image 13.png",
    "image 14.png",
    // "image 15.svg",
    "image 16.png",
    "image 17.png",
    "image 18.png",
  ];
  const banking = [
    "bank 1.png",
    "bank 2.png",
    "bank 3.png",
    "bank 4.png",
    "bank 5.png",
    "bank 6.png",
    "bank 7.png",
    "bank 8.png",
    "bank 9.png",
    "bank 10.png",
    "bank 11.png",
    "bank 12.png",
    "bank 13.png",
    "bank 14.png",
    "bank 15.png",
    "bank 16.png",
    "bank 17.png",
    "bank 18.png",
  ];
  let items;
  if (location.href.includes("/banking-psp")) {
    console.log("Banking");
    console.log(first);
    const mid = Math.ceil(banking.length / 2);

    items = first ? banking.slice(0, mid) : banking.slice(mid);
  } else if (location.href.includes("/fintech-setup-integration")) {
    console.log("fintech");
    console.log(first);

    const mid = Math.ceil(fintech.length / 2);

    items = first ? fintech.slice(0, mid) : fintech.slice(mid);
  }
  console.log(items);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-0 w-full overflow-hidden mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8  w-max  mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          return (
            <li
              className=" max-w-full relative rounded-2xl flex items-center  flex-shrink-0  px-4 py-4"
              style={{
                background: "",
              }}
              key={item}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <img
                  src={"services/" + item}
                  className="w-20 sm:w-24 md:w-28 lg:w-32 aspect-square object-contain"
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
