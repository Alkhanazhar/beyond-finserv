import { isString } from "@/lib/utils";

const ContentTerms = ({ item, index }) => {
  return (
    <div className="m-2 ">
      <div className="">
        <h5 className="text-base sm:text-2xl font-[500] text-primary-900 my-4">
          {index + 1 + " . "}
          {item?.heading}
        </h5>
        {isString(item?.content) ? (
          <div className="m-4 md:mx-8 text-gray-800/80 text-sm font-[400]">
            {item?.content}
          </div>
        ) : (
          item?.content.map((item) => (
            <div className="m-2 md:mx-8 text-gray-800/80 text-sm font-[400]">
              <li>{item}</li>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContentTerms;
