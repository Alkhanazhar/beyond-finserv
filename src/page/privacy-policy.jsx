import Footer from "@/components/Home/Footer";
import { HighLightedText } from "@/components/Home/Hero";
import ContentText from "@/components/shared/content";
import Wrapper from "@/components/Wrapper";
import { privacyPolicy } from "@/constants/privacy-data";

const PrivacyPolicy = () => {
  return (
    <div className="mt-12">
      <Wrapper className={"md:m-16 m-4"}>
        <div className="flex items-center justify-center md:text-4xl text-2xl font-bold md:mb-12 my-12">
          <HighLightedText text={"Privacy & Policy"} />
        </div>
        <div className="my-4">
          {privacyPolicy?.map((item, index) => {
            return <ContentText key={index} item={item} index={index} />;
          })}
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
