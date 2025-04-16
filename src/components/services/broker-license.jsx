import { useLocation } from "react-router-dom";
import InfinityCarousel from "./infinity-carousel";

const BrokerLicense = () => {
  const routes = ["/fintech-setup-integration", "/banking-psp"];
  const location = useLocation();
  return (
    <>
      <div className="flex gap-2 text-center flex-col mt-8 justify-center my-4 md:my-8">
        {routes.includes(location.pathname) && <InfinityCarousel />}
      </div>
    </>
  );
};

export default BrokerLicense;
