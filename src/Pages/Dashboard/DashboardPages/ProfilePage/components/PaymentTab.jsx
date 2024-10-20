/* eslint-disable no-unused-vars */
import { KYCStatus } from "../../../../../utils/constants/constants";
import { useState, useRef } from "react";
import { FaCcMastercard, FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";
import PaymentCard from "../../../../../components/Cards/PaymentCard";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { LuSmilePlus } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import PaymentDrawer from "./PaymentDrawer";

const PaymentTab = () => {
  const [userKYCStatus, setUserKYCStatus] = useState(KYCStatus[0]);
  const [isGSTChanged, setIsGSTChangeI] = useState(false);
  const [isGSTNumber, setIsGSTNumber] = useState("");
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const paymentCardData = [
    {
      icon: <IoBookmarkOutline className="text-3xl" />,
      title: "Track purchase activity",
      description:
        "View all transactions right within your SuperProfile dashboard.",
    },
    {
      icon: <BiBookmarkAltPlus className="text-3xl" />,
      title: "Manage refunds",
      description: "View and manage refunds right on the platform.",
    },
    {
      icon: <LuSmilePlus className="text-3xl" />,
      title: "Seamless settlements",
      description:
        "All your earnings are settled to your bank account regularly.",
    },
  ];

  const handleGSTChange = (event) => {
    setIsGSTChangeI(true);
    setIsGSTNumber(event.target.value);
  };

  const handleAboutMeSave = () => {
    console.log("GST Number Saved:", isGSTNumber);
    setIsGSTChangeI(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    if (drawerRef.current && drawerRef.current.contains(event.target)) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-sm md:text-lg font-semibold">SuperProfile payments</h2>
          <div
            className={`border rounded-xl ${userKYCStatus.color} text-[10px] md:text-sm px-2 py-1 mt-3 md:mt-0`}
          >
            {userKYCStatus.status}
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
          {/* Payment Options Icons */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <SiPaytm className="text-4xl md:text-5xl border p-2 rounded-xl" />
            <SiPhonepe className="text-4xl md:text-5xl border p-2 rounded-xl" />
            <FaGooglePay className="text-4xl md:text-5xl border p-2 rounded-xl" />
            <RiVisaLine className="text-4xl md:text-5xl border p-2 rounded-xl" />
            <FaCcMastercard className="text-4xl md:text-5xl border p-2 rounded-xl" />
          </div>

          {/* Info Text */}
          <p className="text-sm text-center px-4 md:px-0">
            Offer your customers a choice to pay with UPI, all major credit cards, BNPL (Buy now, Pay Later), and more.
          </p>

          {/* Setup Button */}
          <button
            type="button"
            className="bg-orange-600 text-white rounded-full text-sm px-6 py-2 transition duration-200 w-full md:w-auto hover:bg-orange-700"
            onClick={toggleDrawer(true)}
          >
            Set up payment
          </button>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <div
              ref={drawerRef} 
              onKeyDown={toggleDrawer(false)}
              className="flex flex-col"
              tabIndex={0}
              role="button"
            >
              <PaymentDrawer />
            </div>
          </Drawer>

          {/* Setup Info */}
          <p className="text-xs text-center">
            Set up SuperProfile Payments in less than 10 mins
          </p>
        </div>

        <hr className="border-gray-100" />

        {/* Scrollable Payment Cards */}
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {paymentCardData.map((card, index) => (
            <PaymentCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* GST Section */}
      <div className="shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4 bg-white">
        <h2 className="text-sm md:text-lg font-semibold">GST on sales</h2>
        <span className="text-xs text-gray-500">
          Want to enable GST on your product sales? Set it here.
        </span>

        <input
          type="text"
          value={isGSTNumber}
          onChange={handleGSTChange}
          className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your GST Number"
        />

        {isGSTChanged && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAboutMeSave}
              className="bg-orange-600 text-white rounded-full text-xs md:text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentTab;
