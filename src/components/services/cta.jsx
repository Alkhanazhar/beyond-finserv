import { Button } from "../ui/button";

const Cta = ({ title, points, ctaBtn }) => {
  return (
    <div className="rounded-lg  backdrop-blur  ">
      <div className=" w-full flex items-center justify-center space-y-4 flex-col-reverse md:flex-row">
        <div className="md:flex-1 px-4 space-y-4">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            we serve
          </h2>
          <h1 className=" md:text-5xl lg:text-3xl text-2xl font-bold  ">
            {title}
          </h1>
          <div className="text-start">
            {points.map((item, index) => {
              return (
                <li
                  className="text-slate-700 font-[300] mb1 text-pretty mx-auto"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 ">
            <Button className="md:text-md"> {ctaBtn}</Button>
          </div>
        </div>
        <div className="md:flex-[.6] w-full  flex items-center justify-center">
          <img
            src="service.gif"
            loading="lazy"
            className="w-full md:h-96 h-60 aspect-square bg-cover object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
