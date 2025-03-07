import { isString } from "@/lib/utils";

const ContentText = ({ item, index }) => {
  return (
    <div className="m-2 ">
      <div className="">
        <h5 className="text-base sm:text-2xl font-[500] text-primary-900 my-4">
          {index + 1 + " . "}
          {item?.heading}
        </h5>
        {isString(item?.content) && (
          <div className="m-4 md:mx-8 text-gray-800/80 text-sm font-[400]">
            {item?.content}
          </div>
        )}

        {Array.isArray(item?.content) &&
          item?.content?.map((content, idx) => {
            return (
              <>
                {isString(content) && (
                  <div className="m-2 mx-4 text-gray-800/80 content" key={idx}>
                    {content}
                  </div>
                )}

                {Array.isArray(item?.content) && (
                  <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                    {isString(item.content)
                      ? {
                          /* <h2>{(console.log(item), "content")}</h2> */
                        }
                      : item?.content?.map((content, idx) => {
                          return (
                            <div
                              className="mx-6 border-2 p-3 text-primary-900/60 text-sm my-2"
                              key={idx}
                            >
                              {content?.subHeading}
                              {content?.description?.length > 1 && (
                                <div className="text-gray-800/70 m-2">
                                  {content?.description}
                                </div>
                              )}
                            </div>
                          );
                        })}
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ContentText;
