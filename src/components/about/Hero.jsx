/* eslint-disable react/prop-types */
import { HighLightedText } from "../Home/Hero";
import Wrapper from "../Wrapper";

const Hero = ({ content1, content2 }) => {
  return (
    <>
      <div className="py-12">
        <Wrapper>
          <h6 className="md:text-5xl text-4xl font-[400] w-[90%] text-center mx-auto ">
            {content1} <br /> <HighLightedText text={content2} />
          </h6>
          <div className="w-[60%] h-[7px] bg-[#D0D5DD] mx-auto mt-4"></div>
        </Wrapper>
      </div>
    </>
  );
};

export default Hero;
