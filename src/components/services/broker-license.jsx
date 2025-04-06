import { useLocation } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/infinte-carousel";

const routes = ["/fintech-setup-integration", "/banking-psp"];
const BrokerLicense = () => {
  const arrayOfTen = Array.from({ length: 9 }, (_, index) => index + 1);
  const arrayOfTen2 = Array.from({ length: 9 }, (_, index2) => index2 + 10);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="flex gap-2 text-center flex-col mt-8 justify-center my-4 md:my-8">
        {routes.includes(location.pathname) && (
          <div className="mt-8">
            <InfiniteMovingCards speed="1.4" first={true} />
            <InfiniteMovingCards
              speed="1.4"
              direction="reverse"
              second={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BrokerLicense;
