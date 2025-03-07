/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaAngleDoubleDown } from "react-icons/fa";
import Wrapper from "../Wrapper";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial render
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const tl = gsap.timeline();
  // useGSAP(
  //   () => {
  //     tl.to("#page1 #video", {
  //       width: "1440px",
  //       height: "82%",
  //       margin: "0 32px",
  //       borderRadius: "2rem",
  //       scrollTrigger: {
  //         trigger: "#page1",
  //         scroller: "body",
  //         start: "top 0",
  //         end: "top -100%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     });
  //   },
  //   { scope: ref.current }
  // );
  // useGSAP(() => {
  //   gsap.from("#hero", {
  //     // y: -100,
  //     opacity: 0,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <div
      id="page1"
      ref={ref}
      className="flex justify-center items-center h-[93vh] md:h-screen w-full px-4 md:px-8 "
    >
      {/*  */}
      <Wrapper
        className={
          "bg-primary-950 flex justify-between items-center w-full flex-col-reverse md:flex-row  rounded-xl md:h-[82%] h-[90%] -mt-12 sm:-mt-8  md:mt-0 p-4"
        }
      >
        {/* Text Content */}
        <div className="flex-1 justify-center flex flex-col space-y-6">
          {/* <h5 className="text-[1.5rem] hero-text sm:text-xl lg:text-4xl xl:text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-100 ">
            <div className="md:whitespace-nowrap inline-block poppins font-[500]">
              <HighLightedText text={"Start, grow"} /> and
              <HighLightedText text={" Scale"} />{" "}
            </div>
            <br />
            <div className="md:whitespace-nowrap inline-block">
              your <HighLightedText text={"financial business"} />{" "}
            </div>
            <br />
            with us, effortlessly.
          </h5> */}
          <h4 className="md:px-16 px-8 text-[7vw] sm:text-4xl xl:text-6xl whitespace-nowrap leading-tight tracking-normal text-white">
            <span className="text-secondary-500">Start, grow</span> and{" "}
            <span className="text-secondary-500">Scale </span>
            <br /> your{" "}
            <span className="text-secondary-500">financial business</span>
            <br /> with us, effortlessly.
          </h4>
          <Button
            asChild
            size="lg"
            className="hidden md:flex md:mx-16 mx-8 w-fit bg-secondary-400 hover:bg-secondary-500 text-black rounded-full"
          >
            <Link to={"/contacts"}>Get Started</Link>
          </Button>
          <Button
            asChild
            className="md:hidden flex md:mx-16 mx-8 w-fit bg-secondary-400 hover:bg-secondary-500 text-black rounded-full"
          >
            <Link to={"/contacts"}>Get Started</Link>
          </Button>
        </div>

        {/* Image */}
        <div className="justify-center items-center z-[90] flex-1">
          <img
            id="hero"
            src="hero.gif"
            alt=""
            className="sm:w-[50%] md:w-[90%] lg:w-[80%] xl:w-[80%] w-[77%]"
          />
          {/* <img src="mobile.svg" /> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
export const HighLightedText = ({ text }) => {
  return <span className="text-secondary-500">{text}</span>;
};
