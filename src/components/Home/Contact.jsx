import { useGSAP } from "@gsap/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Wrapper from "../shared/Wrapper";
import gsap from "gsap";
import { HighLightedText } from "./Hero";

const Contact = () => {
  useGSAP(() => {
    gsap.to("#formpage", {
      color: "#0039B3",
      height: "100%",
      filter: "none",
      transition: "ease-in-out",
      opacity: 1,
      stagger: 1,
      duration: 0.9,
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 60%",
        end: "bottom 70%",
        scrub: 1,
        // pin: true,
      },
    });
  });

  const steps = `Our experts are here to guide you through personalized solutions for all your financial needs. Fill out the form now, and let us help you achieve your financial goals!`;
  return (
    <div id="contact" className="py-4 sm:mb-4 relative overflow-hidden pb-8 ">
      <img
        src="leadership-bg.svg"
        alt=""
        className="absolute top-0 bottom-0 h-full w-[120%] opacity-85 -z-[100]"
      />
      <h2 className="relative text-center text-2xl md:text-4xl font-bold mb-8 w-fit mx-auto py-3">
        Looking for expert
        <HighLightedText text={" financial solutions"}></HighLightedText>
      </h2>
      <Wrapper>
        <div className="px-4 sm:px-0 flex flex-col justify-center items-center lg:flex-row-reverse gap-8">
          {/* Contact Info Section */}
          <div className="flex-1 text-center md:text-left px-4 sm:px-0">
            <div className="text-gray-500  ms-auto w-auto md:w-[80%]">
              <span id="formpage" className="text-2xl font-bold">
                {' " '}
              </span>

              {steps?.split(" ").map((step, index) => {
                return (
                  <span
                    className={`text-2xl leading-[2rem] sm:text-3xl sm:leading-[3rem]  font-[400] inline-block`}
                    key={index}
                  >
                    {step.split("").map((item, index) => {
                      return (
                        <span key={index} id="formpage" className="blur-[2px]">
                          {item}
                        </span>
                      );
                    })}
                    <span className="ms-2"> </span>
                  </span>
                );
              })}
              <span id="formpage" className="text-2xl font-bold">
                {' " '}
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-primary-100 p-6 rounded-lg shadow-lg w-full lg:w-1/2 border">
            <h2 className="text-xl  text-primary-950 text-center font-semibold mb-4">
              Submit your details -{" We'll"} call you back
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name*
                </label>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number*
                </label>
                <Input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email*
                </label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border  bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="business-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Name*
                </label>
                <Input
                  type="text"
                  id="business-name"
                  className="w-full px-4 py-2 border  bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Your Business Name"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-900 text-white py-2 px-4 rounded-md shadow hover:bg-primary-950 transition"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
