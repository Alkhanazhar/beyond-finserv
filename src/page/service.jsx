import BrokerLicense from "@/components/services/broker-license";
import ServiceHeader from "@/components/services/service-header";
import Features from "@/components/ui/features";
import Wrapper from "@/components/Wrapper";
import { useLocation } from "react-router-dom";
export const titles = {
  "/services": {
    title: "Forex & CFD Broker Dealer License",
    imageUrl:
      "https://images.pexels.com/photos/7567396/pexels-photo-7567396.jpeg",
    description:
      "Launching a successful Forex and CFD brokerage requires more than just capital and a trading platform. It demands comprehensive licensing and compliance with local and international regulations. Beyond Finserv specializes in helping brokers navigate the complex landscape of regulatory frameworks to secure the necessary licenses and approvals.",
    subheading: "Our Comprehensive Services Include",
    subheadingPoints: [
      "Jurisdiction Selection: Expert advice on the best regulatory jurisdictions based on your business goals and operational needs.",
      "Documentation & Application: Preparation and submission of all licensing documents, ensuring accuracy and compliance.",
      "Regulatory Compliance: Comprehensive support in meeting ongoing compliance requirements to maintain a strong regulatory standing.",
      "Liaison with Authorities: Direct communication with financial regulatory authorities to expedite the approval process.",
    ],
    cta: "Launch your brokerage with confidence.",
    ctaBtn: "Contact Us for Licensing Solutions",
  },
  "/forex-broker-dealer-license": {
    title: "Forex & CFD Broker Dealer License",
    imageUrl:
      "https://images.pexels.com/photos/7567396/pexels-photo-7567396.jpeg",
    description:
      "Launching a successful Forex and CFD brokerage requires more than just capital and a trading platform. It demands comprehensive licensing and compliance with local and international regulations. Beyond Finserv specializes in helping brokers navigate the complex landscape of regulatory frameworks to secure the necessary licenses and approvals.",
    subheading: "Our Comprehensive Services Include",
    subheadingPoints: [
      "Jurisdiction Selection: Expert advice on the best regulatory jurisdictions based on your business goals and operational needs.",
      "Documentation & Application: Preparation and submission of all licensing documents, ensuring accuracy and compliance.",
      "Regulatory Compliance: Comprehensive support in meeting ongoing compliance requirements to maintain a strong regulatory standing.",
      "Liaison with Authorities: Direct communication with financial regulatory authorities to expedite the approval process.",
    ],
    cta: "Launch your brokerage with confidence.",
    ctaBtn: "Contact Us for Licensing Solutions",
  },
  "/fund-manager-licenses": {
    title: "Fund Manager License Acquisition",
    imageUrl:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Navigating the complexities of acquiring a Fund Manager License can be challenging, especially with evolving regulatory requirements. Beyond Finserv offers end-to-end support to ensure your fund management operations are fully licensed and compliant with international standards.",
    subheading: "What We Offer",
    subheadingPoints: [
      "Jurisdictional Analysis: Expert guidance on the best regions for establishing your fund management operations.",
      "End-to-End Application Support: Preparation and submission of all necessary documents for swift approval.",
      "Compliance Advisory: Ongoing compliance and regulatory reporting support to maintain your license in good standing.",
      "Operational Structuring: Assistance in structuring your operations, risk management strategies, and client onboarding processes.",
    ],
    cta: "Build trust and credibility in your investment services.",
    ctaBtn: "Get Licensed Today",
  },
  "/electronic-money-institutions-license": {
    title: "EMI (Electronic Money Institution) License",
    imageUrl:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The surge in digital payments has made EMI licenses essential for companies providing electronic money and payment services. Beyond Finserv simplifies the process of obtaining this critical license, enabling you to offer seamless financial services such as e-wallets, prepaid cards, and payment processing solutions.",
    subheading: "Our EMI Licensing Services Include",
    subheadingPoints: [
      "Licensing Application: Comprehensive assistance in preparing and submitting EMI license applications.",
      "Regulatory Advisory: Guidance on legal requirements and compliance strategies to meet EMI-specific regulations.",
      "Operational Structuring: Support in structuring your EMI business operations for efficient and compliant service delivery.",
      "System Integration: Assistance in integrating secure payment gateways and financial processing systems.",
    ],
    cta: "Transform your digital payment operations.",
    ctaBtn: "Start the Licensing Process",
  },
  "/payment-service-provider-license": {
    title: "PSP (Payment Service Provider) License Solutions",
    imageUrl:
      "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Payment service providers play a critical role in the digital economy by facilitating secure and efficient payment processing. Beyond Finserv offers comprehensive services to help your business obtain a PSP license, ensuring that you can process payments seamlessly and in compliance with global regulatory standards.",
    subheading: "Our PSP Licensing Services Include",
    subheadingPoints: [
      "Licensing Application Support: Expert assistance in preparing and submitting PSP license applications, ensuring compliance with legal and regulatory requirements.",
      "Compliance Strategy Development: Tailored compliance frameworks to meet payment industry regulations and safeguard your business.",
      "Operational Structuring: Guidance on building a robust PSP business model, including risk management and customer onboarding processes.",
      "Technology Integration: Seamless integration of secure payment platforms and fraud prevention tools.",
    ],
    cta: "Power your payment operations with a PSP license.",
    ctaBtn: "Get Started Today",
  },
  "/cryptocurrencies-license": {
    title: "Cryptocurrency Licenses",
    imageUrl:
      "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg",

    description:
      "With the growing adoption of cryptocurrencies, regulatory compliance is more critical than ever. Beyond Finserv helps businesses acquire cryptocurrency licenses, set up secure trading platforms, and integrate compliance solutions to operate confidently in the evolving crypto landscape.",
    subheading: "Our Crypto Licensing Services Include",
    subheadingPoints: [
      "License Acquisition: Assistance in obtaining broker-dealer, prop trading, and exchange licenses.",
      "Compliance Advisory: Guidance on meeting crypto-specific regulatory requirements.",
      "Technology Integration: Setup of trading platforms, wallets, and security systems for seamless crypto operations.",
    ],
    cta: "Enter the crypto market with confidence.",
    ctaBtn: "Get Licensed Today",
  },
  "/banking-psp": {
    title: "Banking & PSP Services",
    imageUrl:
      "https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg",
    description:
      "Accessing reliable banking and payment services is crucial for any financial enterprise. Beyond Finserv offers partnered solutions with renowned banks and PSPs to streamline your financial operations.",
    subheading: "Our Services Include",
    subheadingPoints: [
      "Banking Solutions: Account setup and transaction processing support.",
      "Payment Processing: Secure and efficient payment gateway integration.",
      "Customized Fintech Solutions: Tailored payment and transaction services to suit your business needs.",
    ],
    cta: "Simplify your financial operations.",
    ctaBtn: "Talk to Our Experts",
  },
  "/fintech-setup-integration": {
    title: "Fintech Setup & Technology Integration",
    imageUrl:
      "https://images.pexels.com/photos/5831658/pexels-photo-5831658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Beyond Finserv specializes in setting up and integrating cutting-edge financial technologies to enhance operational efficiency and customer experience.",
    subheading: "Our Fintech Solutions Include",
    subheadingPoints: [
      "Trading Platform Setup: Deployment of secure and scalable trading platforms.",
      "CRM Integration: Seamless integration of customer relationship management systems.",
      "Liquidity Hubs: Establishment of liquidity distribution networks.",
      "Risk Management Tools: Implementation of advanced risk management solutions.",
    ],
    cta: "Future-proof your fintech operations.",
    ctaBtn: "Schedule a Consultation",
  },
  "/prime-of-prime-liquidity": {
    title: "Prime of Prime Liquidity",
    imageUrl:
      "https://images.pexels.com/photos/7567396/pexels-photo-7567396.jpeg",
    description:
      "Accessing deep liquidity is essential for financial institutions, brokerages, and trading firms to ensure smooth trade execution, better spreads, and robust risk management. At Beyond Finserv, we provide end-to-end liquidity consulting services designed to optimize your trading operations and give you access to institutional-grade liquidity pools.",
    subheading: "Our Comprehensive Liquidity Services Include",
    subheadingPoints: [
      "Direct connections to Tier-1 liquidity providers, including global banks and financial institutions.",
      "Access to highly competitive spreads for all major asset classes, including Forex, CFDs, and digital assets.",
      "Tailored liquidity solutions based on your business size, trading model, and risk appetite.",
      "Advanced tools to monitor and mitigate risks associated with market volatility.",
      "Real-time monitoring of financial transactions to detect potential fraud or regulatory violations.",
      "Seamless integration with trading platforms such as MT4, MT5, and proprietary systems.",
    ],
    cta: "Maximize trading efficiency. ",
    ctaBtn: "Request a Consultation",
  },
  "/compliance-framework": {
    title: "Compliance Framework",
    imageUrl:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    description:
      "Navigating complex regulatory requirements is essential for sustainable growth. Beyond Finserv provides tailored compliance frameworks and reporting solutions to keep your business compliant and secure.",
    subheading: "Our Services Include",
    subheadingPoints: [
      "Development of customized compliance frameworks tailored to your business model and jurisdiction.",
      "Assistance in obtaining financial licenses, including broker-dealer, fund management, and PSP licenses.",
      "Preparation and submission of license applications with regulatory authorities.",
      "Coordination with legal and financial advisors to meet licensing requirements.",
      "Real-time monitoring of financial transactions to detect potential fraud or regulatory violations.",
      "Comprehensive training sessions for your team on regulatory requirements and best practices.",
    ],
    cta: "Stay compliant and confident.  ",
    ctaBtn: "Talk to Our Compliance Experts",
  },
  "/gaming-license-solutions": {
    title: "Gaming License Solutions",
    imageUrl:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    description: `Navigate the Gaming Industry with Confidence Entering the online gaming and gambling industry requires the right licensing to ensure legal compliance and player trust. At Beyond FinServ, we simplify the complex licensing process, guiding you from application to regulatory compliance in leading global jurisdictions.`,
    subheading: "Why a Gaming License is Essential",
    subheadingPoints: [
      "Jurisdiction Selection: Expert advice on choosing the best licensing region.",
      "License Application: Preparation and submission of all required documents.",
      "Market Expansion: Serve players in regulated markets globally.",
      "Payment Solutions: Secure merchant accounts and payment gateways.",
      "Ongoing Support: Assistance with license renewals and regulatory audits.",
      "Licensing Jurisdictions We Cover: Malta, Curacao, Isle of Man, Gibraltar, Kahnawake, and more",
      "Ideal for: Online Casinos, Sports Betting Platforms, Poker Rooms, Lottery Operators , Skill-Based & eSports Games",
    ],
    cta: " CTA: Secure your gaming license today and unlock new opportunities. ",
    ctaBtn: "Contact Us to get started.",
  },
};
const Service = () => {
  const location = useLocation();

  return (
    <div className="md:mt-20 relative">
      <Wrapper className={"mb-4"}>
        <ServiceHeader title={titles[location.pathname]?.title} />
        <Features item={titles[location.pathname]} />
        <BrokerLicense />
      </Wrapper>
    </div>
  );
};

export default Service;
