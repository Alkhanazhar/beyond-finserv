import Footer from "@/components/Home/Footer";
import { HighLightedText } from "@/components/Home/Hero";
import ContentTerms from "@/components/shared/content-terms";
import Wrapper from "@/components/Wrapper";
import { term_conditions } from "@/constants/Data";

const TermsConditions = () => {
  return (
    <div className="mt-12">
      <Wrapper className={"md:m-16 m-4"}>
        <div className="flex items-center justify-center md:text-4xl text-2xl font-bold mb-16 mt-20">
          <HighLightedText text={"Term & Conditions of use"} />
        </div>
        <div className="my-4">
          {term_conditions?.map((item, index) => {
            return <ContentTerms key={index} item={item} index={index} />;
          })}
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default TermsConditions;
