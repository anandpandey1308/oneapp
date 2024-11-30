import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiIdentificationCardThin } from "react-icons/pi";

const KYCpage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-full min-h-screen px-4 py-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="flex flex-col bg-white py-4 px-3 md:py-6 md:px-6 rounded-md shadow-md">
        {/* Header Section */}
        <div className="flex bg-[#EFF4F5] py-4 px-3 rounded-md items-center justify-between">
          <div className="flex items-center gap-3">
            <PiIdentificationCardThin className="w-5 h-5 md:w-6 md:h-6" />
            <p className="font-poppins tracking-tight text-base md:text-lg font-bold">
              KYC Section
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white cursor-pointer flex items-center justify-center relative">
            <IoSettingsOutline className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>

        {/* Tab Buttons Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <div className="border-b border-gray-300 w-full">
            <div className="flex justify-center flex-wrap space-x-4 md:space-x-8 mb-4">
              <button
                className={`pb-2 transition-all duration-200 text-sm md:text-base ${
                  value === "1"
                    ? "border-b-2 border-orange-500 font-semibold"
                    : ""
                }`}
                onClick={() => handleChange("1")}
              >
                Personal and Business Information
              </button>
              <button
                className={`pb-2 transition-all duration-200 text-sm md:text-base ${
                  value === "2"
                    ? "border-b-2 border-orange-500 font-semibold"
                    : ""
                }`}
                onClick={() => handleChange("2")}
              >
                Identity and Verification
              </button>
              <button
                className={`pb-2 transition-all duration-200 text-sm md:text-base ${
                  value === "3"
                    ? "border-b-2 border-orange-500 font-semibold"
                    : ""
                }`}
                onClick={() => handleChange("3")}
              >
                Banking Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCpage;
