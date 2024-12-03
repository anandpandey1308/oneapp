import { useState } from "react";
import { toast } from "react-toastify";

const BusinessInformationTab = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [sebiNumber,setSebiNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const businessStructure = [
    "sole proprietorship",
    "Limited Liability Company",
    "Corporation",
  ];

  const validateInputs = () => {
    if (!firstName.trim()) {
      toast.error("First Name is required.");
      return false;
    }
    if (!lastName.trim()) {
      toast.error("Last Name is required.");
      return false;
    }
    if (!/^\d+$/.test(gstNumber.trim())) {
      // GST Number must be numeric
      toast.error("GST Number must be a valid number.");
      return false;
    }
    if (!/^\d+$/.test(setSebiNumber.trim())) {
      // GST Number must be numeric
      toast.error("SEBI Number must be a valid number.");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateInputs()) return;

    setLoading(true);

    // Simulating a fake API call
    setTimeout(() => {
      setLoading(false);

      const isSuccess = Math.random() > 0.2; 

      if (isSuccess) {
        toast.success("Information saved successfully!");
      } else {
        toast.error("Failed to save information. Please try again later.");
      }
    }, 2000); 
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
              {businessStructure.map((structure, index) => (
                <option key={index} value={structure}>
                  {structure}
                </option>
              ))}
            </select>
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GST Number
            </label>
            <input
              type="number"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              placeholder="GST Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {/* SEBI Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEBI Number
            </label>
            <input
              type="number"
              value={sebiNumber}
              onChange={(e) => setSebiNumber(e.target.value)}
              placeholder="SEBI Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
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
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-[#FA6E25] hover:bg-orange-600"
          } text-white py-2 px-6 rounded-lg focus:ring focus:ring-orange-300`}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default BusinessInformationTab;
