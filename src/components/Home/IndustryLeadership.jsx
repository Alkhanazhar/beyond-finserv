import { HighLightedText } from "./Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo } from "react";

const steps = `With 20+ years of proven expertise,we empower businesses with innovative solutions, strategic insights, and trusted industry leadership`;

const IndustryLeadership = () => {
  useGSAP(() => {
    gsap.to("#leader ", {
      color: "#0039B3",
      // color: "#ff3131",

      height: "100%",
      filter: "none",
      transition: "ease-in-out",
      opacity: 1,
      stagger: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#leadership",
        scroller: "body",
        start: "top 60%",
        end: "bottom 50%",
        scrub: 1,
        // pin: true,
      },
    });
  });
  return (
    <div className="relative overflow-hidden  px-8">
      {/* <img
        src="leadership-bg.svg"
        alt=""
        className="absolute top-0 bottom-0 h-full w-[120%] opacity-85"
      /> */}

      <div id="leadership" className="py-8 relative">
        <div className="max-w-7xl  mx-auto">
          <h2 className="relative text-center text-2xl md:text-4xl font-bold mb-8 w-fit mx-auto py-3">
            {/* <div className="blur rounded-full w-full h-4 bg-blue-600/20 absolute bottom-0  "></div> */}

            <HighLightedText
              text={" Two Decade of Industry Leadership"}
            ></HighLightedText>
            {/* Clients,{" "} */}
            {/* <HighLightedText text={"Proven"}></HighLightedText> Results */}
          </h2>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left px-4 sm:px-0">
              <div className=" tracking-wide font-[300] text-gray-900 sm:w-auto bg-clip-text text-transparent bg-gradient-to-b opacity-85">
                {steps?.split(" ").map((step, index) => {
                  return (
                    <span
                      id="leader"
                      className={`leading-[2rem] sm:text-3xl sm:leading-[3rem]  font-[300] inline-block`}
                      key={index}
                    >
                      {step.split("").map((item, index) => {
                        return (
                          <span
                            key={index}
                            // id="leader"
                            className="text-gray-800  font-[400]"
                          >
                            {item}
                          </span>
                        );
                      })}
                      <span className="ms-2"> </span>
                    </span>
                  );
                })}
                {/* <span id="leader" className="text-2xl font-bold blur-[1.5px]">
                  {'" '}
                </span> */}
              </div>
              {/* <TextGenerateEffect words={steps} duration={2} /> */}
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-end items-center relative  ">
              <img
                src="cta.gif" // Replace with your image
                alt="Illustration"
                className="w-[70%] mix-blend-multiply mx-auto md:mx-0"
              />
              {/* <img
              src="services.svg"
              alt=""
              className="w-60 md:w-52 hidden sm:flex "
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(IndustryLeadership);
