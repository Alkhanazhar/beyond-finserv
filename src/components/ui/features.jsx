import { Link } from "react-router-dom";
import { Button } from "./button";
import { Phone } from "lucide-react";

const Features = ({ item }) => {
  console.log(item);
  return (
    <div className="overflow-hidden bg-white ">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center text-center ">
          <p className="text-lg text-secondary-600  text-start ">
            {item?.description}
          </p>
        </div>
      </div>

      <div className="">
        <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 px-2">
            <div>
              <div className="mt-4 max-w-xl space-y-2 text-base/7 text-gray-500 lg:max-w-none">
                <div className="text-2xl md:font-bold   text-gray-900 font-semibold">
                  {item?.subheading}
                </div>
                {item?.subheadingPoints?.map((feature) => (
                  <div key={feature.name} className="relative ">
                    <li className=" font-[400] text-gray-500 list-item">
                      {feature}
                    </li>{" "}
                  </div>
                ))}
              </div>
              <Button className="mt-4 hidden md:flex w-fit" asChild size="lg">
                <Link to={"/contacts"}>
                  <Phone className="mr-2 scale-125" />
                  {item?.ctaBtn}
                </Link>
              </Button>
              <Button className="mt-8 md:hidden flex w-fit" asChild>
                <Link to={"/contacts"}>
                  <Phone className="scale-105" />
                  contact us
                </Link>
              </Button>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={"services/" + item.imageUrl}
            className="h-96 w-[40rem] object-cover bg-left object-left my-auto max-w-none rounded-xl ring-1  ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
