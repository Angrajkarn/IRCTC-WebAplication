import React from "react";
import { FaTrain, FaTicketAlt, FaSearch } from "react-icons/fa";
import { MdTrain, MdOutlineFastfood } from "react-icons/md";
import { BiStation } from "react-icons/bi";
import { IoTrainOutline } from "react-icons/io5";
import "./ExploreMore.css"

const ExploreMore = () => {
  const features = [
    { icon: <FaTrain />, label: "Running Status" },
    { icon: <FaTicketAlt />, label: "PNR Status Enquiry" },
    { icon: <FaSearch />, label: "Train Seat Availability" },
    { icon: <FaSearch />, label: "Search By Name/Number" },
    { icon: <BiStation />, label: "Search By Station" },
    { icon: <MdTrain/>, label: "Train Platform Locator" },
    { icon: <FaTicketAlt />, label: "Tatkal Railway Reservation" },
    { icon: <IoTrainOutline />, label: "Vande Bharat Express" },
    { icon: <MdOutlineFastfood />, label: "IRCTC Food Booking" }
  ];

  return (
    <div className="explore-more">
      <h1>Explore More With RailBooking</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-label">{feature.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
