import { motion } from "framer-motion";
import ServiceHeader from "../services/service-header";
import Wrapper from "../Wrapper";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our interactions, ensuring that our clients can trust us as their reliable partners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#002060"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and methodologies to deliver solutions that are both effective and forward-thinking.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#002060"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centricity",
      description:
        "Our client's success is our success. We tailor our services to meet the specific needs of each client, providing personalized support and guidance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#002060"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering superior quality in every aspect of our work, from strategic planning to execution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#002060"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* <div className="mt-20">
        <Hero content1="We're here to" content2="guarantee your success" />
        <Context />
        <Hero content1="We're here..." content2="no matter where you are" />
        <div ref={mapRef}>
          {isMapVisible && (
            <Suspense
              fallback={
                <div className="w-full h-64 flex items-center justify-center">
                  <h1 className="text-center">Loading map...</h1>
                </div>
              }
            >
              <WorldMapDemo />
            </Suspense>
          )}
        </div>
        <Mission />
      </div> */}
      <div className=" min-h-screen font-sans md:mt-20">
        {/* Header Strip */}
        <Wrapper>
          <ServiceHeader title={"About Us"} />

          {/* Hero Section */}
          <div className="container mx-auto  py-12">
            <div className="flex flex-col items-center text-center mb-16">
              <p className="text-lg  text-secondary-500 text-start mx-auto ">
                At Beyond Finserv, we are dedicated to empowering financial
                businesses worldwide by providing comprehensive solutions
                tailored to the unique needs of our clients. With over two
                decades of industry leadership, our expertise spans fintech
                setup and integration, global business establishment, compliance
                frameworks, and access to an extensive network of banking and
                payment service providers.
              </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className=" p-8 rounded-md shadow-md bg-secondary-500 backdrop-blur-lg">
                <h2 className="text-3xl font-semibold mb-4 text-primary-950">
                  Our Mission
                </h2>
                <p className="text-primary-950 font-[400] ">
                  Our mission is to facilitate the seamless launch, growth, and
                  scaling of financial enterprises by delivering innovative,
                  reliable, and efficient services. We strive to demystify the
                  complexities of the financial sector, enabling our clients to
                  focus on their core business objectives with confidence.
                </p>
              </div>
              <div className=" p-8 rounded-md shadow-md bg-secondary-500 backdrop-blur-lg ">
                <h2 className="text-3xl font-semibold mb-4 text-primary-950">
                  Our Vision
                </h2>
                <p className="text-primary-950 font-[400]">
                  We envision a world where financial businesses, regardless of
                  size or location, have the tools and support necessary to
                  thrive in a dynamic market. By fostering innovation and
                  maintaining unwavering commitment to excellence, we aim to be
                  the preferred partner for financial institutions seeking to
                  navigate the evolving financial landscape.
                </p>
              </div>
            </div>

            {/* Journey Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-primary-950">
                Our Journey
              </h2>
              <p className="text-gray-700 mb-6 max-w-4xl mx-auto font-[400] text-center">
                Since our inception, Beyond Finserv has been at the forefront of
                financial services innovation. Our journey is marked by a
                relentless pursuit of excellence and a commitment to staying
                ahead of industry trends. We have successfully assisted numerous
                clients in obtaining regulatory licenses, setting up trading
                platforms, integrating robust compliance frameworks, and
                establishing strong relationships with liquidity providers.
              </p>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-primary-950">
                Our Values
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {values.map((item, index) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                    key={index}
                    className="text-center p-6 bg-primary-950 backdrop-blur-lg rounded-md shadow-md"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2  text-secondary-400">
                      {item.title}
                    </h3>
                    <p className=" font-[400] text-secondary-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center text-primary-950">
                Why Choose Beyond Finserv?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-950">
                      Comprehensive Solutions
                    </h3>
                    <p className="text-gray-600 font-[400]">
                      We offer end-to-end services, from obtaining regulatory
                      licenses to setting up trading platforms and ensuring
                      compliance, making us a one-stop solution for financial
                      businesses.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-950">
                      Proven Expertise
                    </h3>
                    <p className="text-gray-600 font-[400] ">
                      With a team of seasoned professionals and a track record
                      of successful projects, we bring unparalleled expertise to
                      the table.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-950">
                      Global Reach
                    </h3>
                    <p className="text-gray-600 font-[400]">
                      Our presence in key financial hubs like London and Dubai
                      enables us to serve clients across the globe effectively.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-950">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-950">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-600 font-[400]">
                      We believe in building lasting relationships with our
                      clients, offering continuous support and adapting our
                      services to meet their evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-secondary-600 italic ">
                At Beyond Finserv, we are more than just a service provider; we
                are your partners in success, committed to helping you navigate
                the complexities of the financial industry with ease and
                efficiency.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
