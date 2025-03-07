import Wrapper from "../Wrapper";

const missionDetails = [
  {
    title: "Unmatched service",
    description:
      "Support corporate clients and financial investors with their growth strategy and international development.",
  },
  {
    title: "Specific",
    description:
      "ConsultUs’ core expertise lies in the ability to support our clients in understanding, analyzing, and executing commercial and investment strategies in specific markets.",
  },
  {
    title: "Experience",
    description:
      "Experience in working with and assisting a wide range of clients from international corporations to small/medium-sized businesses, from large corporate debt providers to mid-market private equity investors.",
  },
  {
    title: "Technology",
    description: "The best combination of technology and people.",
  },
];

const Mission = () => {
  return (
    <div className="py-8 px-4 md:px-0">
      <Wrapper>
        <h2 className="md:text-5xl text-3xl  font-bold mb-4 ">
          Our <span className=" text-primary-900">Mission</span>
        </h2>
        <div className="w-[50%] h-[7px] bg-[#D0D5DD]  mt-4"></div>
        <div className="border-gray-300 mt-4 pt-4">
          {missionDetails.map((item, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col sm:flex-row justify-between"
            >
              <h3 className=" text-gray-800 flex-[.6] font-[600]">
                {item.title}
              </h3>
              <p className="text-gray-700 flex-[1.4] font-[400]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Mission;
