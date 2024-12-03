import { useState } from "react";
// import { IoSettingsOutline } from "react-icons/io5";
import { PiIdentificationCardThin } from "react-icons/pi";
import BusinessInformationTab from './BusinessInformationTab';
import VerificationTab from './VerificationTab';
import BankDetailsTab from './BankDetailsTab';

const KYCpage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-full min-h-screen md:px-5 md:py-3 px-2 py-2 bg-gradient-to-b from-gray-100 to-white">
      <div className="flex flex-col bg-white md:py-3 md:px-4 py-3 px-2 rounded-md">
        {/* Header Section */}
        <div className="flex bg-[#EFF4F5] py-6 px-3 rounded-md items-center justify-between">
          <div className="flex gap-3">
            <PiIdentificationCardThin className="md:size-8 size-5" />
            <p className="font-poppins tracking-tight text-[16px] md:text-xl font-bold">
              KYC Section
            </p>
          </div>
          {/* <div className="w-8 h-8 rounded-full bg-white cursor-pointer flex items-center justify-center relative">
            <IoSettingsOutline className="size-5" />
          </div> */}
        </div>

        {/* Tab Section */}
        <div className="mt-6">
          <div className="flex flex-col">
            {/* Centered tabs with responsive layout */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="flex flex-col md:flex-row md:space-x-8 border-b border-gray-300">
                <button
                  className={`
                    w-full md:w-auto 
                    py-3 md:py-2 
                    text-center 
                    transition-all 
                    duration-200 
                    text-base md:text-xl 
                    ${
                      value === "1"
                        ? "border-b-2 border-orange-500 text-orange-500"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  onClick={() => handleChange("1")}
                >
                  Personal and Business Information
                </button>
                <button
                  className={`
                    w-full md:w-auto 
                    py-3 md:py-2 
                    text-center 
                    transition-all 
                    duration-200 
                    text-base md:text-xl 
                    ${
                      value === "2"
                        ? "border-b-2 border-orange-500 text-orange-500"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  onClick={() => handleChange("2")}
                >
                  Identity and Verification
                </button>
                <button
                  className={`
                    w-full md:w-auto 
                    py-3 md:py-2 
                    text-center 
                    transition-all 
                    duration-200 
                    text-base md:text-xl 
                    ${
                      value === "3"
                        ? "border-b-2 border-orange-500 text-orange-500"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                  onClick={() => handleChange("3")}
                >
                  Banking Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {value === "1" && <BusinessInformationTab/>}
        {value === "2" && <VerificationTab />}
        {value === "3" && <BankDetailsTab />}
      </div>
    </div>
  );
};

export default KYCpage;