import AlternatingComponent from "@/components/services/alernate";
import ServiceHeader from "@/components/services/service-header";
import { Button } from "@/components/ui/button";

import Wrapper from "@/components/Wrapper";
import { pluginsData } from "@/constants/Data";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mt-16 overflow-hidden">
      {/* <Hero /> */}

      <Wrapper>
        <ServiceHeader title={"Technology"} />
        <img
          src="service-screen-bg.jpg"
          className="absolute inset-0 overflow-hidden -z-10 opacity-75 blur"
        />

        <div className="-mt-8 md:mt-0">
          {pluginsData.map((item, index) => {
            return (
              <AlternatingComponent
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                reverse={index % 2 == 0 || index == 0}
              />
            );
          })}
        </div>
        <div className="py-8 text-center md:space-y-6 -mt-8 md:mt-0 ">
          <h2 className="text-3xl relative z-20 md:text-4xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Looking for a{" "}
            <span className=" relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="drop-shadow-md py-4 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-secondary-700 via-secondary-400 to-secondary-500 ">
                <span>customized technology development</span>
              </div>
            </span>
            <br />
            for your Trading
          </h2>
          <Button
            onClick={() => navigate("/contacts")}
            size="lg"
            className="bg-primary-950 text-white shadow-lg rounded-2xl hidden md:flex mx-auto"
          >
            {" "}
            Contact us
          </Button>
          <Button
            onClick={() => navigate("/contacts")}
            className="mt-8 md:mt-0 bg-primary-950 text-white shadow-lg rounded-2xl flex mx-auto md:hidden"
          >
            {" "}
            Contact us
          </Button>
        </div>
        {/* <FeaturesSectionDemo /> */}
      </Wrapper>
    </div>
  );
};

export default Products;
