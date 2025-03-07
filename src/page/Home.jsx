/* eslint-disable no-unused-vars */
import ChatFloatingBtn from "@/components/ChatFloatingBtn";
import { testimonials } from "@/components/Home/Carousel";
// import Contact from "@/components/Home/Contact";
import Cta from "@/components/Home/Cta";
import Hero from "@/components/Home/Hero";
import IndustryLeadership from "@/components/Home/IndustryLeadership";
// import Services from "@/components/Home/Services";
// import FinancialSolutions from "@/components/Home/Solutions";
import Steps from "@/components/Home/Steps";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <main id="main" className="md:mt-4">
      <Hero />
      <Cta />
      <Steps />
      <IndustryLeadership />
      <AnimatedTestimonials testimonials={testimonials} />
    </main>
  );
};

export default Home;
