import gsap from "gsap";
import { HighLightedText } from "./Hero";
import { useGSAP } from "@gsap/react";
import { TracingBeam } from "../ui/tracing-beam";
// import { useRef } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Button } from "../ui/button";
// import { ChevronRight } from "lucide-react";
import { HiArrowRight } from "react-icons/hi2";
import Wrapper from "../Wrapper";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  // const divRef = useRef(null);
  const steps = [
    {
      number: "01",
      title: "Obtain a regulatory License.",
      description:
        "Manage your money worldwide, spend and get paid in different currencies.",
    },
    { number: "02", title: "Set up your trading platform, bridge, and CRM" },
    { number: "03", title: "Onboard Liquidity providers." },
    { number: "04", title: "Set up multiple funding methods." },
    { number: "05", title: "Deploy your team." },
    { number: "06", title: "Your brokerage is live." },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        gsap.to("#number", {
          color: "#0039B3",
          height: "100%",
          opacity: 1,
          stagger: 1, // Adjusted for better effect
          duration: isDesktop ? 0.1 : 0.3, // Slightly slower for mobile
          scrollTrigger: {
            trigger: "#steps",
            scroller: "body",
            start: isDesktop ? "top 90%" : "top 20%", // Trigger earlier on mobile
            end: "bottom 100%",
            scrub: isDesktop ? 2 : 1, // Less scrub effect on mobile
          },
        });
      }
    );
  });

  const navigate = useNavigate();

  return (
    <div id="steps" className="py-4 overflow-hidden ">
      <Wrapper>
        <h2 className="text-2xl py-4 md:text-4xl sm:w-auto mx-auto font-[600] text-center">
          Your <HighLightedText text={"Financial Brokerage business"} />
          <br /> is just a few steps away!
        </h2>
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-8">
            <div>
              <img
                src="steps-com-mob.webp"
                className="w-[90%] mx-auto sm:mx-0 scale-95"
                alt=""
              />
            </div>
            <div className="">
              {/* <img src="steps-left.webp" alt="" className="w-[28rem]" /> */}
              <TracingBeam>
                <div className="bg-white p-4 md:p-6 rounded-lg overflow-hidden shadow-lg border-t drop-shadow-lg max-w-md mx-auto relative">
                  <div>
                    {steps?.map((step, index) => (
                      <div
                        key={index}
                        className={`relative  flex items-start mb-6 cursor-pointer  last:mb-0 group ${
                          index == 0 && "mb-8"
                        }`}
                      >
                        <span
                          id="number"
                          className="opacity-0 me-4 my-0 mt-[2px] "
                        >
                          <HiOutlineBadgeCheck color="#0039B3" size={21} />
                        </span>
                        <span
                          id="number"
                          className="text-[#969696] font-[500] flex text-lg mr-4"
                        >
                          {step.number}
                        </span>
                        <div className="flex flex-col">
                          <h3
                            // id={step.description ? "number" : ""}
                            className={`md:text-lg font-medium ${
                              step.description
                                ? "text-gray-800 mb-1"
                                : "text-gray-800 mb-1 text-sm md:text-base"
                            } group-hover:text-primary-950`}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={() => navigate("/contacts")}
                      size={"lg"}
                      className="text-xl w-full bg-gradient-to-r mx-auto sm:mx-0 bg-primary-950 scale-90 md:scale-100 shadow-black/20 rounded-3xl  text-secondary-300 shadow-md"
                    >
                      Get Started <HiArrowRight size={32} strokeWidth={2} />
                    </Button>
                  </div>
                </div>
              </TracingBeam>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Steps;
