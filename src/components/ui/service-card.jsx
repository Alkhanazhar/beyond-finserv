/* eslint-disable react/prop-types */
import { Button } from "./button";

export default function ServiceCard({ imageUrl, title, description }) {
  return (
    <div className="flex-1">
      <div className="mx-auto w-full">
        <div className="relative isolate overflow-hidden  sm:rounded-3xl  lg:flex lg:gap-x-20 ">
          <div className="flex w-full flex-col-reverse lg:flex-row-reverse gap-8">
            <div className="flex-1 lg:py-32 lg:text-left space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-lg/12 text-pretty text-gray-600 font-[400]">
                {description}
              </p>
              <div className="mt-10 flex items-center justify-start  lg:justify-start">
                <Button href="#" className="bg-primary-950 text-white">
                  Call Now
                </Button>
              </div>
            </div>
            <div className="md:relative flex-1 justify-center flex items-center">
              <img
                alt="App screenshot"
                src={imageUrl}
                className="w-full object-cover h-96 rounded-3xl bg-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
