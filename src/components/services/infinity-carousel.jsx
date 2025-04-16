import { banking, fintech } from "@/constants/Data";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/infinte-carousel";

const InfinityCarousel = () => {
  const location = useLocation();

  // Define state to store the selected array and halves
  const [selectedArray, setSelectedArray] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  // Use useEffect to watch for location changes
  useEffect(() => {
    // Determine the array to use based on the pathname
    const isBankingPath = location.pathname === "/banking-psp";
    const isFintechPath = location.pathname === "/fintech-setup-integration";

    // Select the appropriate array based on the route
    const selected = isBankingPath ? banking : isFintechPath ? fintech : [];

    // Set the selected array and split it into halves
    if (selected.length > 0) {
      const halfLength = Math.ceil(selected.length / 2);
      setSelectedArray(selected);
      setFirstHalf(selected.slice(0, halfLength));
      setSecondHalf(selected.slice(halfLength));
    }
  }, [location.pathname, banking, fintech]); // Dependencies to trigger when location changes

  return (
    <div className="mt-8">
      <InfiniteMovingCards speed="1.4" items={firstHalf} />
      <InfiniteMovingCards speed="1.4" direction="reverse" items={secondHalf} />
    </div>
  );
};

export default InfinityCarousel;
