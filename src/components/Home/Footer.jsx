import { Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";

import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import { navItems } from "../Navbar";

const services = [
  "Business Setup",
  "Fintech Setup",
  "Banking Solution",
  "PSP Solution",
  "Development",
  "Financial Setup",
];

const Footer = () => {
  return (
    <footer className="pt-8 border-t border-primary-600/20 mt-5">
      <Wrapper>
        <div className="px-4 xl:px-0 flex flex-col sm:flex-row gap-6 md:gap-14">
          <FooterLogo />

          <div className="flex gap-8 flex-col lg:flex-row">
            <Services />
            <div className="flex flex-col gap-8">
              <Content />
            </div>
          </div>
        </div>
        <div className="border-t  border-blue-100  mt-4 ">
          <FooterEnd />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

export const FooterEnd = () => {
  return (
    <footer className=" border-blue-100 py-4  ">
      <div className=" sm:px-0 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 ">
        <Link className="my-4 sm:my-0 text-black/60 font-[400] text-sm">
          &copy; Copyright beyond finserv
        </Link>
        <p>© {new Date().getFullYear()} Beyond Finserv. All rights reserved.</p>
        {/* Contact Information */}
        <div className="flex gap-8 items-center justify-center">
          <Link
            to={"/term-conditions"}
            className="text-black/70 cursor-pointer font-[400] text-sm"
          >
            Terms and Conditions
          </Link>
          <Link
            to={"/privacy-policy"}
            className="text-black/70 cursor-pointer font-[400] text-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

const QuickLinks = () => {
  
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h3 className="text-base font-semibold text-secondary-600 mb-4 whitespace-nowrap">
        Quick Links
      </h3>
      <ul className="md:space-y-2">
        {navItems.map((navItem, index) => {
          return (
            <div key={navItem.name}>
              <Link
                key={index}
                to={navItem.route}
                className="text-gray-500 w-fit cursor-pointer text-sm font-[400] hover:text-gray-800 whitespace-nowrap"
              >
                {navItem.name}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
const Services = () => {
  return (
    <>
      <div className="lg:flex  hidden flex-col">
        <QuickLinks />
      </div>
      <div className="grid md:hidden grid-cols-12">
        <ul className="space-y-2 sm:col-span-2 col-span-4">
          <QuickLinks />
        </ul>
      </div>
    </>
  );
};

const FooterLogo = () => {
  return (
    <div className=" col-span-2 flex-col justify-between flex  space-y-2 ">
      <div className="flex justify-center sm:justify-start items-start mx-auto sm:mx-0">
        <Link to={"/"}>
          <h6 className="sm:text-2xl md:text-4xl whitespace-nowrap  text-primary-950  leading-none">
            beyond finserv
          </h6>
          <div className="flex space-x-4 mt-4">
            <a
              onClick={() =>
                window.open("https://www.instagram.com/beyondfinserv", "_blank")
              }
              className="cursor-pointer"
            >
              <Instagram className="w-6 h-6 text-primary-950 hover:text-pink-500" />
            </a>
            <a
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/beyondfinserv/",
                  "_blank"
                )
              }
              className="cursor-pointer"
            >
              <Linkedin className="w-6 h-6 text-primary-950 hover:text-blue-600" />
            </a>
          </div>
        </Link>
      </div>

      <div className="space-y-1 ">
        <div className="text-sm font-[300] text-gray-500  space-y-2 ">
          <div className="flex items-center space-x-2">
            <MapPin className="text-gray-400" size={16} />
            <span>Office: London | Dubai</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall className="text-gray-400" size={16} />
            <span>Tel: +44 7488 848654</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="text-gray-400" size={16} />
            <span>hello@beyondfinserv.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="text-[11px] text-gray-400 font-[400] text-justify">
      <strong className=" text-gray-500">Disclaimer : </strong>
      This website disclaimer for beyond finserv serves to clarify that the
      information provided on the website is for general informational purposes
      only and does not constitute financial advice. While efforts are made to
      ensure accuracy, beyond finserv does not guarantee the completeness or
      reliability of the content, reserving the right to update or remove
      information without prior notice. Third-party links included on the site
      are not endorsed, and users are advised to review external {"sites'"}{" "}
      terms and privacy policies. beyond finserv, its affiliates, and
      contributors are not liable for any damages arising from the use of the
      website. The intellectual property rights of the {"site's"}
      content belong to beyond finserv, and any reproduction or exploitation
      requires written permission. Users are encouraged to periodically review
      this disclaimer for changes. The disclaimer is governed by the laws of the
      specified jurisdiction, with any disputes subject to the
      {"jurisdiction's"} courts. For inquiries, users can contact beyond finserv
      via the provided email address. Use of the website implies acceptance of
      these terms and conditions.
      <br />
      <br />
      The logos, trademarks, and names of regulatory bodies, technology
      providers, financial institutions, government entities, and other
      organizations featured on this website are used solely for informational
      and reference purposes. Their inclusion does not imply any affiliation,
      endorsement, or approval of our services by these entities. Beyond Finserv
      is an independent entity that operates in full compliance with applicable
      laws and regulations within its respective jurisdictions. Visitors are
      encouraged to verify regulatory information directly with the relevant
      authorities. For any inquiries regarding regulatory status, licensing, or
      affiliations, please contact us at{" "}
      <a
        className="underline cursor-pointer text-primary-950
      "
      >
        hello@beyondfinserv.com
      </a>
    </div>
  );
};
