import { FaGlobeAmericas } from "react-icons/fa";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { GoTools } from "react-icons/go";
import { PiTrophy } from "react-icons/pi";
import { SiSecurityscorecard } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import Wrapper from "../Wrapper";

const businessSetupInfo = [
  {
    title: "Fintech Setup & Integration",
    icon: GoGraph,
    description:
      "Support for launching and growing businesses worldwide, including market-making, forex, and CFD broker licenses.",
  },
  {
    title: "Global Business Setup",
    icon: FaGlobeAmericas,
    description:
      "Comprehensive solutions for setting up new businesses globally with a focus on compliance and operational efficiency.",
  },
  {
    title: "Compliance Framework",
    icon: RiDownloadCloud2Fill,
    description:
      "Robust frameworks to ensure adherence to global regulations and standards for seamless operations.",
  },
  {
    title: "Banking & PSP Solutions",
    icon: SiSecurityscorecard,
    description:
      "Access to over 100 banking and payment service provider solutions to empower your global business ventures.",
  },

  {
    title: "Financial Licenses",
    icon: PiTrophy,
    description:
      "Integration with global payment solutions, including Visa, MasterCard, cryptocurrency, and other modern financial tools.",
  },
  {
    title: "Financial Technology",
    icon: GoTools,
    description:
      "End-to-end fintech solutions and seamless integration of advanced financial technologies.",
  },
];

const Cta = () => {
  return (
    <div className="h-full pb-4 flex justify-center items-center ">
      <Wrapper>
        <div className="w-full bg-secondary-500 h-full grid sm:grid-cols-6 md:grid-cols-6 grid-cols-3  border border-blue-50/10 md:-mt-4 p-8 rounded-xl shadow-md ">
          {businessSetupInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="sm:p-2 p-3 flex text-center flex-col items-center justify-start gap-4"
              >
                <div>
                  <Icon className="text-primary-950" size={34} stroke="12" />
                  {/* <img src={item.icon} /> */}
                </div>
                <div className="flex flex-col">
                  <h3 className="md:whitespace-nowrap text-sm md:text-base  text-primary-950 font-[400] md:font-[500]">
                    {item?.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Cta;
