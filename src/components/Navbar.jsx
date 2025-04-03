/* eslint-disable react/prop-types */
import { AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const services = [
  {
    title: "Forex & CFD Broker License",
    url: "/services",
  },
  {
    title: "Fund Manager License",
    url: "/fund-manager-licenses",
  },
  {
    title: "Electronic Money Institutions License",
    url: "/electronic-money-institutions-license",
  },
  {
    title: "Payment Service Provider License",
    url: "/payment-service-provider-license",
  },
  {
    title: "Cryptocurrencies License",
    url: "/cryptocurrencies-license",
  },
  {
    title: "Banking & PSP",
    url: "/banking-psp",
  },
  {
    title: "Fintech Setup & Integration",
    url: "/fintech-setup-integration",
  },
  {
    title: "Prime of Prime Liquidity",
    url: "/prime-of-prime-liquidity",
  },
  {
    title: "Compliance Framework",
    url: "/compliance-framework",
  },
  {
    url: "/gaming-license-solutions",
    title: "Gaming License Solutions",
  },
];

export const navItems = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Technology", route: "/products", href: "products" },
  { name: "Contact us", route: "/contacts" },
  { name: "Services", route: "/forex-broker-dealer-license", href: "services" },
];

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [expandedService, setExpandedService] = useState(false);

  const handleServiceClick = () => {
    setExpandedService(!expandedService);
  };

  return (
    <div id="navbar" className="md:absolute top-0 left-0 w-full relative ">
      <div className="flex items-center justify-between py-1 xl:max-w-9xl max-w-7xl  mx-auto px-8 ">
        <div className="z-[80]">
          <Link
            className="text-2xl sm:font-[500] sm:text-3xl md:text-4xl md:py-4 py-2 inline-block croogla text-primary-950 "
            to={"/"}
          >
            beyond finserv
          </Link>
        </div>
        <div id="navitems" className="hidden md:flex ">
          <NavItemsComponent navItems={navItems} />
        </div>
        <div className="flex md:hidden z-[100]">
          <Sheet modal={modal} onOpenChange={setModal} open={modal}>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent className="z-[110]">
              <SheetHeader>
                <SheetTitle className="croogla text-2xl font-medium  me-auto">
                  beyond finserv
                </SheetTitle>
                <SheetDescription>
                  {/* <NavItemsComponent navItems={navItems} /> */}

                  <div>
                    {navItems.map((item, index) => {
                      if (item.name === "Services") {
                        return (
                          <div key={item.name}>
                            <div
                              onClick={handleServiceClick}
                              className="my-4 font-medium sm:text-base w-full inline-block text-start text-xl text-primary-950 cursor-pointer leading-4 whitespace-nowrap z-[100]"
                            >
                              <div className="flex items-center justify-between">
                                {item.name}{" "}
                                {expandedService ? (
                                  <ChevronUp />
                                ) : (
                                  <ChevronDown />
                                )}
                              </div>
                            </div>
                            <AnimatePresence>
                              {expandedService && (
                                <motion.div
                                  exit={{}}
                                  className="pl-2 text-start "
                                >
                                  {services.map((service) => (
                                    <Link
                                      key={service.title}
                                      to={service.url}
                                      className="border-b w-full py-2 list-item"
                                      onClick={() => {
                                        setModal(false);
                                        setExpandedService(false);
                                      }}
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <div key={item.name}>
                          {item.name !== "Services" && (
                            <Link
                              onClick={() => setModal(false)}
                              key={index}
                              to={item.route}
                              className="my-4 font-medium sm:text-base w-full inline-block text-start text-xl text-primary-950 cursor-pointer leading-4 whitespace-nowrap z-[100]"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const NavItemsComponent = ({ navItems = {} }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:gap-5 sm:flex flex-col sm:flex-row ">
      {navItems?.map((item, index) => {
        if (
          item.name == "About Us" ||
          item.name == "Home" ||
          item.name == "Technology" ||
          item.name == "Contact us"
        )
          return (
            <Link
              key={index}
              to={item.route}
              className="md:text-lg font-medium sm:text-base w-full inline-block text-start mt-8 sm:mt-0 text-xl text-primary-950 cursor-pointer leading-4 whitespace-nowrap z-[100]"
            >
              {item.name}
            </Link>
          );
        else {
          return (
            <>
              <div
                className="relative hidden md:flex"
                key={item.href}
                onMouseEnter={() => {
                  setOpen(true);
                }}
                onMouseLeave={() => {
                  setOpen(false);
                }}
              >
                <div className="md:text-lg font-medium sm:text-base w-full inline-block text-start mt-8 sm:mt-0 text-xl text-primary-950 cursor-pointer leading-4 whitespace-nowrap z-[100]">
                  {item.name}
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="border border-b-gray-600/30 z-[100] absolute top-8 bg-white rounded-md shadow-lg w-56 -right-6 overflow-hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                          to={service.url}
                          key={index}
                          className="hover:bg-gray-200 font-[400] block border-b border-gray-300 text-sm  p-3 cursor-pointer hover:text-primary-900 duration-150 transition-all z-10"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to={item.href}
                className="md:hidden font-medium sm:text-base w-full inline-block text-start mt-8 sm:mt-0 text-xl text-primary-950 cursor-pointer leading-4 whitespace-nowrap z-[100]"
              >
                {item.name}
              </Link>
            </>
          );
        }
      })}
    </div>
  );
};
