// src/ProfilePage.jsx
import { useState } from "react";
import ProfileTab from "./components/ProfileTab";
import BillingTab from "./components/BillingTab";
import BrandingTab from "./components/BrandingTab";
import PaymentTab from "./components/PaymentTab";

const ProfilePage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Account Settings</h1>
        <div className="border-b border-gray-300">
          <div className="flex justify-center space-x-8 mb-4">
            <button
              className={`pb-2 transition-all duration-200 ${
                value === "1" ? "border-b-2 border-blue-500 font-semibold" : ""
              }`}
              onClick={() => handleChange("1")}
            >
              Profile
            </button>
            <button
              className={`pb-2 transition-all duration-200 ${
                value === "2" ? "border-b-2 border-blue-500 font-semibold" : ""
              }`}
              onClick={() => handleChange("2")}
            >
              Billing
            </button>
            <button
              className={`pb-2 transition-all duration-200 ${
                value === "3" ? "border-b-2 border-blue-500 font-semibold" : ""
              }`}
              onClick={() => handleChange("3")}
            >
              Branding
            </button>
            <button
              className={`pb-2 transition-all duration-200 ${
                value === "4" ? "border-b-2 border-blue-500 font-semibold" : ""
              }`}
              onClick={() => handleChange("4")}
            >
              Payments
            </button>
          </div>
        </div>
      </div>

      <div>
        {value === "1" && <ProfileTab />}
        {value === "2" && <BillingTab />}
        {value === "3" && <BrandingTab />}
        {value === "4" && <PaymentTab />}
      </div>
    </div>
  );
};

export default ProfilePage;
