import Footer from "@/components/Home/Footer";
import { HighLightedText } from "@/components/Home/Hero";
import ServiceHeader from "@/components/services/service-header";
import ContentText from "@/components/shared/content";
import Wrapper from "@/components/Wrapper";
import { privacyPolicy } from "@/constants/privacy-data";

const PrivacyPolicy = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex items-center justify-center md:text-4xl text-2xl font-bold md:mb-12 my-8"></div>
        <ServiceHeader title={"Privacy & Policy"} />
        <div className="my-8">
          {privacyPolicy?.map((item, index) => {
            return <ContentText key={index} item={item} index={index} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default PrivacyPolicy;
