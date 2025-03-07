import Wrapper from "../shared/Wrapper";

const FinancialSolutions = () => {
  const content = {
    heading: "Beyond finserv:",
    headingSecond: "Innovative Financial Solutions",
    paragraph: `Beyond finserv is a comprehensive full-suite service provider for
            Financial businesses operating from Dubai and London. We specialize
            in offering customized solutions to meet the dynamic needs of the
            financial enterprise.`,
  };

  return (
    <section className="relative px-4 md:px-0">
      <Wrapper>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Section */}
            <div className="flex-1">
              <h6 className="text-2xl md:text-5xl text-gray-900 mb-4 font-[400]">
                {content.heading}
              </h6>
              <h3 className="text-xl md:text-4xl font-bold text-blue-600 mb-6">
                {content.headingSecond}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content.paragraph}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/c94d/6273/081b0c149247c602bcab06ecd9b45a45?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEBaHo3LhBM4datq8Y7OMzRwDTqL2-W4qdw~JqBPqRBh7a9O318dMfA-xthBGMjob0Y-5-OpJOEQ2ee3pjaMtAHEuYQrqA7T7G8B1zAQ4L84mLkAZn9gAxP2H1OVZ2v4Blyp-wzfWzrGhZiuSpe6Oj-uxYCVvuN695N0ZtkCzJHZMW39tZpKKBfXdOXzCYODgOWdWQSjfZtfymK8MkSl~STfr58fNY2v15l7funNJEMcFJtAaCopc6D19V03-Zx56G-l5RXP7AIsTEdO8Dvk97MhFpNlWNUaJWjvYX9fdp0zk0VszcHs9Zr9~-BmEF7FfUM6fKmxKCDx5bj9gpu9Ug__" // Replace with your image
                alt="Financial Solutions Illustration"
                className="w-full max-w-lg mix-blend-multiply h-auto"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FinancialSolutions;
