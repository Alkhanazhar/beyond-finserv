import { cn } from "@/lib/utils";
import {
  FaArrowDown,
  FaChartBar,
  FaChartLine,
  FaClipboard,
  FaGift,
  FaMobileAlt,
  FaSyncAlt,
  FaUsers,
  FaUserTimes,
} from "react-icons/fa";

export const features = [
  {
    title: "CRM for MT5",
    description:
      "Comprehensive client relationship management tailored for MT5 platforms.",
    icon: <FaUserTimes className=" " size={28} />,
    color: "bg-orange-200",
  },
  {
    title: "Swap Free Plugin - MT5",
    description:
      "Allows brokers to provide swap-free trading accounts for MT5 users.",
    icon: <FaSyncAlt className=" " size={28} />,
    color: "bg-yellow-200",
  },
  {
    title: "Bonus Plugin - MT5",
    description:
      "Manage and allocate trading bonuses effectively within the MT5 platform.",
    icon: <FaGift className=" " size={28} />,
    color: "bg-blue-200",
  },
  {
    title: "Social Trading - MT5",
    description:
      "Facilitates traders to follow, learn, and copy strategies from other traders.",
    icon: <FaMobileAlt className=" " size={28} />,
    color: "bg-green-200",
  },
  {
    title: "Reconciliation Plugin - MT5",
    description:
      "Automates the reconciliation process for trading transactions on MT5.",
    icon: <FaChartBar className=" " size={28} />,
    color: "bg-purple-200",
  },
  {
    title: "MAM - MT5",
    description:
      "Multi-Account Management solution for managing multiple accounts on MT5.",
    icon: <FaUsers className=" " size={28} />,
    color: "bg-pink-200",
  },
  {
    title: "PAMM - MT5",
    description:
      "Percentage Allocation Management Module for efficient fund management.",
    icon: <FaChartLine className=" " size={28} />,
    color: "bg-teal-200",
  },
  {
    title: "Brokers Copier - MT5",
    description:
      "Copies trades between different accounts and brokers seamlessly.",
    icon: <FaClipboard className=" " size={28} />,
    color: "bg-gray-200",
  },
  {
    title: "Drawdown Plugin - MT5",
    description: "Helps monitor and manage trading drawdowns to reduce risks.",
    icon: <FaArrowDown className=" " size={28} />,
    color: "bg-red-200",
  },
];
export function FeaturesSectionDemo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 dark:from-blue-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
