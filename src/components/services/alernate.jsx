import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AlternatingComponent = ({
  title,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={` my-12 flex flex-col md:flex-row items-start rounded-3xl overflow-hidden  ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-8 py-4`}
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left mt-8 space-y-4">
        <h2 className="text-2xl md:font-bold font-semibold   ">{title}</h2>
        <div>
          <p className="text-gray-500 w-[90%] ">
            {description.split(".")[0] + "."}
          </p>
          <br />
          {/* <p className="text-gray-500 w-[90%]">
            <br />
          </p> */}

          <p className="text-gray-500 w-[90%] ">
            {description.split(".")[1] + "."}
          </p>
        </div>
        <Button
          className="bg-primary-950 text-white hover:bg-primary-950/70"
          asChild
        >
          <Link to={"/contacts"}>
            {" "}
            <Phone />
            Contact now
          </Link>
        </Button>
      </div>

      {/* Image */}
      <div className="flex-1 lg:h-80 h-60 ">
        <img
          src={imageUrl}
          loading="lazy"
          alt={title}
          className="w-full h-full object-cover rounded-3xl shadow-md  "
        />
      </div>
    </div>
  );
};

export default AlternatingComponent;
