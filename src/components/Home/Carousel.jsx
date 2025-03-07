import { useState } from "react";
import { HighLightedText } from "./Hero";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import Wrapper from "../Wrapper";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";

export const testimonials = [
  {
    name: "Sandra",
    designation: "Investment Analyst",
    src: "testimonials-2.webp", // Replace with actual image URLs
    rating: 4.8,
    feedback: "This platform changed how I approach investments.",
    description:
      "Thanks to their expert advice, I learned how to diversify my portfolio effectively and maximize returns. Their guidance is truly a game-changer for anyone in the financial sector, making complex concepts simple to understand.",
  },
  {
    name: "John",
    designation: "Financial Planner",
    src: "testimonial-1.webp", // Replace with actual image URLs
    rating: 4.9,
    feedback: "Highly professional and insightful!",
    description:
      "Their financial tools and resources helped me create better plans for my clients. The detailed breakdowns and strategies they offer are invaluable for anyone looking to succeed in finance, ensuring steady growth and client satisfaction.",
  },
  {
    name: "Michelle",
    designation: "Wealth Manager",
    src: "testimonial-3.webp", // Replace with actual image URLs
    // Replace with actual image URLs
    rating: 5.0,
    feedback: "Excellent service and practical insights.",
    description:
      "I gained clarity on wealth-building strategies and efficient budgeting methods. Their support helped me provide better value to my clients and achieve greater financial stability, ensuring long-term success for everyone involved.",
  },
  // Add more testimonials as needed
];

export function CarouselHome() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    // <Carousel
    //   opts={{
    //     align: "start",
    //   }}
    //   className="w-full max-w-7xl mx-auto py-8"
    // >
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
    //         <div className="p-3 border border-primary-950 shadow-lg shadow-primary-700">
    //           <div>
    //             <h6 className="flex aspect-square items-center justify-center p-6">
    //               <span className="text-3xl font-semibold">{index + 1}</span>
    //             </h6>
    //           </div>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <div className="md:pb-8">
      <Wrapper className={"bg-primary-950 text-white"}>
        <div className="relative  w-full  py-10 px-5 md:px-0">
          <h2 className="relative text-center text-2xl md:text-4xl font-bold mb-8 w-fit mx-auto py-4">
            <div className="blur rounded-full w-full h-4 bg-blue-600/10 absolute bottom-0  "></div>
            <HighLightedText text={"Satisfied"}></HighLightedText> Clients,{" "}
            <HighLightedText text={"Proven"}></HighLightedText> Results
          </h2>

          <div className="flex items-center justify-center space-x-4 relative pb-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 shadow-cards rounded-lg ${
                  index === currentIndex
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-70 hidden md:flex"
                }`}
              >
                <div className="shadow-primary-700 p-6 max-w-xs relative">
                  <img
                    src="carousel-bg.webp"
                    className="absolute inset-0 bg-cover h-full -z-10"
                  />
                  <div className="flex items-center">
                    <img
                      src="carousel-card.png"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mx-auto mb-4"
                    />
                    <div>
                      <p className="text-gray-700 font-semibold text-start">
                        {testimonial.name}
                      </p>
                      <p className="text-center text-sm text-gray-500 mb-2">
                        {testimonial.designation}
                      </p>
                      <div className="flex justify-center mb-2">
                        {Array.from({
                          length: Math.floor(testimonial.rating),
                        }).map((_, index) => (
                          <Star
                            key={index}
                            color="orange"
                            size={18}
                            fill="orange"
                          />
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <StarHalf size={18} color="orange" fill="orange" />
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-center font-semibold mb-4 py-4">
                    {testimonial.feedback}
                  </p>
                  <p className="text-gray-600 text-sm text-center font-[400] ">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full  ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                }`}
              >
                g
              </button>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white mt-16 sm:mt-0 border rounded-full p-2 shadow-lg"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border mt-16 sm:mt-0 rounded-full p-2 shadow-lg"
          >
            <ChevronRight />
          </button>
        </div>
      </Wrapper>
    </div>
  );
}
