import { useState } from "react";

const BusinessInformationTab = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSave = () => {
    alert("Information saved successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      {/* Personal Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mb-8">
        <h1 className="text-lg font-semibold mb-4">Personal Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mb-8">
        <h1 className="text-lg font-semibold mb-4">Business Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Business Structure */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Structure
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="single-owner">Single Owner</option>
              <option value="partnership">Partnership</option>
              <option value="corporation">Corporation</option>
            </select>
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GST Number
            </label>
            <input
              type="text"
              placeholder="GST Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {/* SEBI Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEBI Number
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="single-owner">Single Owner</option>
              <option value="partnership">Partnership</option>
              <option value="corporation">Corporation</option>
            </select>
          </div>

          {/* SEBI Certificate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEBI Certificate
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleSave}
          className="bg-[#FA6E25] text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BusinessInformationTab;
