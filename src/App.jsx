import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
// import Service from "./page/service";
import Navbar from "./components/Navbar";
import TermsConditions from "./page/terms-conditions";
import PrivacyPolicy from "./page/privacy-policy";
import Footer from "./components/Home/Footer";
import { lazy, Suspense } from "react";
import { Loader } from "lucide-react";
import ContactPage from "./page/Contact";
import { Toaster } from "react-hot-toast";
import ChatFloatingBtn from "./components/ChatFloatingBtn";
const Products = lazy(() => import("./page/Products"));
const Service = lazy(() => import("./page/service"));
const AboutUs = lazy(() => import("./page/About-us"));
// import  from "./page/About-us";

function App() {
  return (
    <main className="antialiased tracking-[.001em]">
      <Toaster />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route
            path="/fund-manager-licenses"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/payment-service-provider-license"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/electronic-money-institutions-license"
            element={<Service />}
          />
          <Route
            path="/cryptocurrencies-license"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/prime-of-prime-liquidity"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/fintech-setup-integration"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/banking-psp"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/compliance-framework"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />{" "}
          <Route
            path="/forex-broker-dealer-license"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />{" "}
          <Route
            path="/gaming-license-solutions"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center min-h-screen justify-center">
                    <Loader className="animate-spin" />
                  </div>
                }
              >
                <Service />
              </Suspense>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-conditions" element={<TermsConditions />} />
        </Routes>
        <ChatFloatingBtn />

        <Footer />
      </HashRouter>
    </main>
  );
}

export default App;
