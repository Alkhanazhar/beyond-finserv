import ServiceHeader from "@/components/services/service-header";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import axios from "axios";
import { Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="w-full md:mt-20">
      {/* Hero Section */}
      <Wrapper>
        <ServiceHeader title={"Contact Us"} />
        {/* Contact Content */}
        <div className="mx-auto px-4 md:px-0 py-12 my-4 bg-white/50 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 ">
              <img src="contact-us.webp" alt="" />
            </div>

            {/* Contact Form */}
            <div className="">
              <h2 className="text-2xl md:text-3xl font-[500] mb-6 croogla ">
                Send us a Message
              </h2>
              <Form />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full flex flex-col md:flex-row md:gap-8 gap-4">
          <div className="flex flex-col flex-1 h-96">
            <h1 className="py-4">
              Address:1{" "}
              <p className="text-gray-500">
                Building A1, Dubai Digital Park, Dubai Silicon Oasis,Dubai,
                United Arab Emirates.
              </p>
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105704.45784318777!2d55.29019769929336!3d25.116709833539698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651c2438dc53%3A0xe6abcc1ea38a17f5!2sD1%20-%20Dubai%20Digital%20Park!5e1!3m2!1sen!2sin!4v1738579318632!5m2!1sen!2sin"
              allowfullscreen=""
              height={"400"}
              loading="lazy"
              className="flex-1"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col flex-1">
            <p className="py-4">
              {" "}
              Address:2{" "}
              <p className="text-gray-500">
                {" "}
                128 City Road, London, United Kingdom
              </p>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.9596872536144!2d-0.09081892355634699!3d51.52672950929137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e1!3m2!1sen!2sin!4v1738758203204!5m2!1sen!2sin"
              height={"400"}
              allowfullscreen=""
              loading="lazy"
              className="flex-1"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactPage;

const Form = () => {
  const countryList = [
    { name: "Afghanistan", countryCode: "AF", dialCode: "+93" },
    { name: "Albania", countryCode: "AL", dialCode: "+355" },
    { name: "Algeria", countryCode: "DZ", dialCode: "+213" },
    { name: "Andorra", countryCode: "AD", dialCode: "+376" },
    { name: "Angola", countryCode: "AO", dialCode: "+244" },
    { name: "Antigua and Barbuda", countryCode: "AG", dialCode: "+1-268" },
    { name: "Argentina", countryCode: "AR", dialCode: "+54" },
    { name: "Armenia", countryCode: "AM", dialCode: "+374" },
    { name: "Australia", countryCode: "AU", dialCode: "+61" },
    { name: "Austria", countryCode: "AT", dialCode: "+43" },
    { name: "Azerbaijan", countryCode: "AZ", dialCode: "+994" },
    { name: "Bahamas", countryCode: "BS", dialCode: "+1-242" },
    { name: "Bahrain", countryCode: "BH", dialCode: "+973" },
    { name: "Bangladesh", countryCode: "BD", dialCode: "+880" },
    { name: "Barbados", countryCode: "BB", dialCode: "+1-246" },
    { name: "Belarus", countryCode: "BY", dialCode: "+375" },
    { name: "Belgium", countryCode: "BE", dialCode: "+32" },
    { name: "Belize", countryCode: "BZ", dialCode: "+501" },
    { name: "Benin", countryCode: "BJ", dialCode: "+229" },
    { name: "Bhutan", countryCode: "BT", dialCode: "+975" },
    { name: "Bolivia", countryCode: "BO", dialCode: "+591" },
    { name: "Bosnia and Herzegovina", countryCode: "BA", dialCode: "+387" },
    { name: "Botswana", countryCode: "BW", dialCode: "+267" },
    { name: "Brazil", countryCode: "BR", dialCode: "+55" },
    { name: "Brunei", countryCode: "BN", dialCode: "+673" },
    { name: "Bulgaria", countryCode: "BG", dialCode: "+359" },
    { name: "Burkina Faso", countryCode: "BF", dialCode: "+226" },
    { name: "Burundi", countryCode: "BI", dialCode: "+257" },
    { name: "Cabo Verde", countryCode: "CV", dialCode: "+238" },
    { name: "Cambodia", countryCode: "KH", dialCode: "+855" },
    { name: "Cameroon", countryCode: "CM", dialCode: "+237" },
    { name: "Canada", countryCode: "CA", dialCode: "+1" },
    { name: "Central African Republic", countryCode: "CF", dialCode: "+236" },
    { name: "Chad", countryCode: "TD", dialCode: "+235" },
    { name: "Chile", countryCode: "CL", dialCode: "+56" },
    { name: "China", countryCode: "CN", dialCode: "+86" },
    { name: "Colombia", countryCode: "CO", dialCode: "+57" },
    { name: "Comoros", countryCode: "KM", dialCode: "+269" },
    { name: "Congo (Congo-Brazzaville)", countryCode: "CG", dialCode: "+242" },
    { name: "Costa Rica", countryCode: "CR", dialCode: "+506" },
    { name: "Croatia", countryCode: "HR", dialCode: "+385" },
    { name: "Cuba", countryCode: "CU", dialCode: "+53" },
    { name: "Cyprus", countryCode: "CY", dialCode: "+357" },
    { name: "Czech Republic", countryCode: "CZ", dialCode: "+420" },
    {
      name: "Democratic Republic of the Congo",
      countryCode: "CD",
      dialCode: "+243",
    },
    { name: "Denmark", countryCode: "DK", dialCode: "+45" },
    { name: "Djibouti", countryCode: "DJ", dialCode: "+253" },
    { name: "Dominica", countryCode: "DM", dialCode: "+1-767" },
    { name: "Dominican Republic", countryCode: "DO", dialCode: "+1-809" },
    { name: "Ecuador", countryCode: "EC", dialCode: "+593" },
    { name: "Egypt", countryCode: "EG", dialCode: "+20" },
    { name: "El Salvador", countryCode: "SV", dialCode: "+503" },
    { name: "Equatorial Guinea", countryCode: "GQ", dialCode: "+240" },
    { name: "Eritrea", countryCode: "ER", dialCode: "+291" },
    { name: "Estonia", countryCode: "EE", dialCode: "+372" },
    { name: "Eswatini", countryCode: "SZ", dialCode: "+268" },
    { name: "Ethiopia", countryCode: "ET", dialCode: "+251" },
    { name: "Fiji", countryCode: "FJ", dialCode: "+679" },
    { name: "Finland", countryCode: "FI", dialCode: "+358" },
    { name: "France", countryCode: "FR", dialCode: "+33" },
    { name: "Gabon", countryCode: "GA", dialCode: "+241" },
    { name: "Gambia", countryCode: "GM", dialCode: "+220" },
    { name: "Georgia", countryCode: "GE", dialCode: "+995" },
    { name: "Germany", countryCode: "DE", dialCode: "+49" },
    { name: "Ghana", countryCode: "GH", dialCode: "+233" },
    { name: "Greece", countryCode: "GR", dialCode: "+30" },
    { name: "Grenada", countryCode: "GD", dialCode: "+1-473" },
    { name: "Guatemala", countryCode: "GT", dialCode: "+502" },
    { name: "Guinea", countryCode: "GN", dialCode: "+224" },
    { name: "Guinea-Bissau", countryCode: "GW", dialCode: "+245" },
    { name: "Guyana", countryCode: "GY", dialCode: "+592" },
    { name: "Haiti", countryCode: "HT", dialCode: "+509" },
    { name: "Holy See", countryCode: "VA", dialCode: "+379" },
    { name: "Honduras", countryCode: "HN", dialCode: "+504" },
    { name: "Hungary", countryCode: "HU", dialCode: "+36" },
    { name: "Iceland", countryCode: "IS", dialCode: "+354" },
    { name: "India", countryCode: "IN", dialCode: "+91" },
    { name: "Indonesia", countryCode: "ID", dialCode: "+62" },
    { name: "Iran", countryCode: "IR", dialCode: "+98" },
    { name: "Iraq", countryCode: "IQ", dialCode: "+964" },
    { name: "Ireland", countryCode: "IE", dialCode: "+353" },
    { name: "Israel", countryCode: "IL", dialCode: "+972" },
    { name: "Italy", countryCode: "IT", dialCode: "+39" },
    { name: "Jamaica", countryCode: "JM", dialCode: "+1-876" },
    { name: "Japan", countryCode: "JP", dialCode: "+81" },
    { name: "Jordan", countryCode: "JO", dialCode: "+962" },
    { name: "Kazakhstan", countryCode: "KZ", dialCode: "+7" },
    { name: "Kenya", countryCode: "KE", dialCode: "+254" },
    { name: "Kiribati", countryCode: "KI", dialCode: "+686" },
    { name: "Kuwait", countryCode: "KW", dialCode: "+965" },
    { name: "Kyrgyzstan", countryCode: "KG", dialCode: "+996" },
    { name: "Laos", countryCode: "LA", dialCode: "+856" },
    { name: "Latvia", countryCode: "LV", dialCode: "+371" },
    { name: "Lebanon", countryCode: "LB", dialCode: "+961" },
    { name: "Lesotho", countryCode: "LS", dialCode: "+266" },
    { name: "Liberia", countryCode: "LR", dialCode: "+231" },
    { name: "Libya", countryCode: "LY", dialCode: "+218" },
    { name: "Liechtenstein", countryCode: "LI", dialCode: "+423" },
    { name: "Lithuania", countryCode: "LT", dialCode: "+370" },
    { name: "Luxembourg", countryCode: "LU", dialCode: "+352" },
    { name: "Madagascar", countryCode: "MG", dialCode: "+261" },
    { name: "Malawi", countryCode: "MW", dialCode: "+265" },
    { name: "Malaysia", countryCode: "MY", dialCode: "+60" },
    { name: "Maldives", countryCode: "MV", dialCode: "+960" },
    { name: "Mali", countryCode: "ML", dialCode: "+223" },
    { name: "Malta", countryCode: "MT", dialCode: "+356" },
    { name: "Marshall Islands", countryCode: "MH", dialCode: "+692" },
    { name: "Mauritania", countryCode: "MR", dialCode: "+222" },
    { name: "Mauritius", countryCode: "MU", dialCode: "+230" },
    { name: "Mexico", countryCode: "MX", dialCode: "+52" },
    { name: "Micronesia", countryCode: "FM", dialCode: "+691" },
    { name: "Moldova", countryCode: "MD", dialCode: "+373" },
    { name: "Monaco", countryCode: "MC", dialCode: "+377" },
    { name: "Mongolia", countryCode: "MN", dialCode: "+976" },
    { name: "Montenegro", countryCode: "ME", dialCode: "+382" },
    { name: "Morocco", countryCode: "MA", dialCode: "+212" },
    { name: "Mozambique", countryCode: "MZ", dialCode: "+258" },
    { name: "Myanmar", countryCode: "MM", dialCode: "+95" },
    { name: "Namibia", countryCode: "NA", dialCode: "+264" },
    { name: "Nauru", countryCode: "NR", dialCode: "+674" },
    { name: "Nepal", countryCode: "NP", dialCode: "+977" },
    { name: "Netherlands", countryCode: "NL", dialCode: "+31" },
    { name: "New Zealand", countryCode: "NZ", dialCode: "+64" },
    { name: "Nicaragua", countryCode: "NI", dialCode: "+505" },
    { name: "Niger", countryCode: "NE", dialCode: "+227" },
    { name: "Nigeria", countryCode: "NG", dialCode: "+234" },
    { name: "North Korea", countryCode: "KP", dialCode: "+850" },
    { name: "North Macedonia", countryCode: "MK", dialCode: "+389" },
    { name: "Norway", countryCode: "NO", dialCode: "+47" },
    { name: "Oman", countryCode: "OM", dialCode: "+968" },
    { name: "Pakistan", countryCode: "PK", dialCode: "+92" },
    { name: "Palau", countryCode: "PW", dialCode: "+680" },
    { name: "Palestine", countryCode: "PS", dialCode: "+970" },
    { name: "Panama", countryCode: "PA", dialCode: "+507" },
    { name: "Papua New Guinea", countryCode: "PG", dialCode: "+675" },
    { name: "Paraguay", countryCode: "PY", dialCode: "+595" },
    { name: "Peru", countryCode: "PE", dialCode: "+51" },
    { name: "Philippines", countryCode: "PH", dialCode: "+63" },
    { name: "Poland", countryCode: "PL", dialCode: "+48" },
    { name: "Portugal", countryCode: "PT", dialCode: "+351" },
    { name: "Qatar", countryCode: "QA", dialCode: "+974" },
    { name: "Romania", countryCode: "RO", dialCode: "+40" },
    { name: "Russia", countryCode: "RU", dialCode: "+7" },
    { name: "Rwanda", countryCode: "RW", dialCode: "+250" },
    { name: "Saint Kitts and Nevis", countryCode: "KN", dialCode: "+1-869" },
    { name: "Saint Lucia", countryCode: "LC", dialCode: "+1-758" },
    {
      name: "Saint Vincent and the Grenadines",
      countryCode: "VC",
      dialCode: "+1-784",
    },
    { name: "Samoa", countryCode: "WS", dialCode: "+685" },
    { name: "San Marino", countryCode: "SM", dialCode: "+378" },
    { name: "Sao Tome and Principe", countryCode: "ST", dialCode: "+239" },
    { name: "Saudi Arabia", countryCode: "SA", dialCode: "+966" },
    { name: "Senegal", countryCode: "SN", dialCode: "+221" },
    { name: "Serbia", countryCode: "RS", dialCode: "+381" },
    { name: "Seychelles", countryCode: "SC", dialCode: "+248" },
    { name: "Sierra Leone", countryCode: "SL", dialCode: "+232" },
    { name: "Singapore", countryCode: "SG", dialCode: "+65" },
    { name: "Slovakia", countryCode: "SK", dialCode: "+421" },
    { name: "Slovenia", countryCode: "SI", dialCode: "+386" },
    { name: "Solomon Islands", countryCode: "SB", dialCode: "+677" },
    { name: "Somalia", countryCode: "SO", dialCode: "+252" },
    { name: "South Africa", countryCode: "ZA", dialCode: "+27" },
    { name: "South Korea", countryCode: "KR", dialCode: "+82" },
    { name: "South Sudan", countryCode: "SS", dialCode: "+211" },
    { name: "Spain", countryCode: "ES", dialCode: "+34" },
    { name: "Sri Lanka", countryCode: "LK", dialCode: "+94" },
    { name: "Sudan", countryCode: "SD", dialCode: "+249" },
    { name: "Suriname", countryCode: "SR", dialCode: "+597" },
    { name: "Sweden", countryCode: "SE", dialCode: "+46" },
    { name: "Switzerland", countryCode: "CH", dialCode: "+41" },
    { name: "Syria", countryCode: "SY", dialCode: "+963" },
    { name: "Taiwan", countryCode: "TW", dialCode: "+886" },
    { name: "Tajikistan", countryCode: "TJ", dialCode: "+992" },
    { name: "Tanzania", countryCode: "TZ", dialCode: "+255" },
    { name: "Thailand", countryCode: "TH", dialCode: "+66" },
    { name: "Timor-Leste", countryCode: "TL", dialCode: "+670" },
    { name: "Togo", countryCode: "TG", dialCode: "+228" },
    { name: "Tonga", countryCode: "TO", dialCode: "+676" },
    { name: "Trinidad and Tobago", countryCode: "TT", dialCode: "+1-868" },
    { name: "Tunisia", countryCode: "TN", dialCode: "+216" },
    { name: "Turkey", countryCode: "TR", dialCode: "+90" },
    { name: "Turkmenistan", countryCode: "TM", dialCode: "+993" },
    { name: "Tuvalu", countryCode: "TV", dialCode: "+688" },
    { name: "Uganda", countryCode: "UG", dialCode: "+256" },
    { name: "Ukraine", countryCode: "UA", dialCode: "+380" },
    { name: "United Arab Emirates", countryCode: "AE", dialCode: "+971" },
    { name: "United Kingdom", countryCode: "GB", dialCode: "+44" },
    { name: "United States", countryCode: "US", dialCode: "+1" },
    { name: "Uruguay", countryCode: "UY", dialCode: "+598" },
    { name: "Uzbekistan", countryCode: "UZ", dialCode: "+998" },
    { name: "Vanuatu", countryCode: "VU", dialCode: "+678" },
    { name: "Venezuela", countryCode: "VE", dialCode: "+58" },
    { name: "Vietnam", countryCode: "VN", dialCode: "+84" },
    { name: "Yemen", countryCode: "YE", dialCode: "+967" },
    { name: "Zambia", countryCode: "ZM", dialCode: "+260" },
    { name: "Zimbabwe", countryCode: "ZW", dialCode: "+263" },
  ];
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(""); // Country name
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [description, setDescription] = useState("");
  const [service, setService] = useState("");

  const [countryCode, setCountryCode] = useState("us"); // Default country
  const serviceItem = [
    "Forex & CFD Broker Dealer License",
    "Fund Manager License ",
    "EMI (Electronic Money Institution) License",
    "PSP License",
    "Cryptocurrency Licenses",
    "Banking & PSP Services",
    "Fintech Setup & Technology Integration",
    "Prime of Prime Liquidity",
    "Compliance Framework",
    "Gaming License ",
  ];
  useEffect(() => {
    // Fetch user location using IP
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code) {
          setCountryCode(data.country_code.toLowerCase());
          console.log(data);
          setCountry(data.country_name); // Set country name
        }
      })
      .catch((err) => console.error("Error fetching location:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      first_name,
      last_name,
      email,
      mobile,
      country,
      description,
      service,
    });
    if (
      !first_name ||
      !last_name ||
      !email ||
      !mobile ||
      !country ||
      !description ||
      !service
    ) {
      toast.error("All fields are required. Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://beyondfinserv.affyclouditsolutions.com/api/contact-us/create",
        {
          country,
          email,
          first_name,
          last_name,
          mobile: countryCode + mobile,
          description,
          service,
        }
      );
      console.log(res?.data);
      setFirst_name("");
      setLast_name("");
      setEmail("");
      setDescription("");
      setService("");
      toast.success("Query Successfully Submitted");
    } catch (error) {
      console.log("Failed to submit location", error);
      toast.error("Something went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 " onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            placeholder="First name *"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            value={last_name}
            required
            onChange={(e) => setLast_name(e.target.value)}
            placeholder="Last name *"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <Input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address *"
          />
        </div>
        <div className="flex-1">
          <PhoneInput
            country={countryCode}
            value={mobile}
            onChange={(value, country) => {
              setMobile(value);
              setCountryCode(country.countryCode);
              setCountry(country.name);
              console.log("Update country code", country);
            }}
            enableSearch
            placeholder="Enter phone number"
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
            buttonStyle={{
              borderRadius: "8px 0 0 8px",
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 md:flex-row flex-col">
        <div className="flex-1">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none  "
            style={{
              maxHeight: "150px",
              overflowY: "auto", // ensures the dropdown is scrollable when there are many options
            }}
          >
            {countryList.map((item) => (
              <option key={item.code} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none "
            value={service}
            onChange={(value) => {
              console.log(value.target.value);
              setService(value.target.value);
            }}
          >
            <option value="">What service do you need?</option>
            {serviceItem.map((service, index) => {
              return (
                <option value={service} key={index}>
                  {service}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div>
        <Textarea
          placeholder="Message"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></Textarea>
      </div>

      <Button
        disabled={loading}
        type="submit"
        className="border  sm:h-12  w-full sm:text-lg font-[500] rounded-lg bg-primary-950  text-secondary-300 shadow-xl"
      >
        Send Now
      </Button>
    </form>
  );
};
