import Footer from "@/components/Home/Footer";
import { HighLightedText } from "@/components/Home/Hero";
import ServiceHeader from "@/components/services/service-header";
import ContentTerms from "@/components/shared/content-terms";
import Wrapper from "@/components/Wrapper";
import { term_conditions } from "@/constants/Data";

const TermsConditions = () => {
  return (
    <div className="">
      <Wrapper>
        <div className="flex items-center justify-center md:text-4xl text-2xl font-bold mb-16 my-8"></div>
        <ServiceHeader title={"Term & Conditions of use"} />
        <div className="my-8">
          {term_conditions?.map((item, index) => {
            return <ContentTerms key={index} item={item} index={index} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default TermsConditions;
