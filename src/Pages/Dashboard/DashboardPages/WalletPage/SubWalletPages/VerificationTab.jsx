import { useState } from "react";

const VerificationTab = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
    telegram: "",
    discord: "",
    other: "",
  });

  const [idVerification, setIdVerification] = useState({
    aadhaarNumber: "",
    aadhaarImage: null,
    panCard: null,
    selfie: null,
  });

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleIDVerificationChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
      setIdVerification((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setIdVerification((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    alert("Information saved successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      {/* Social Media Links Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mb-8">
        <h1 className="text-lg font-semibold mb-4">Social Media Links</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {["instagram", "facebook", "youtube", "twitter", "telegram", "discord"].map((platform) => (
            <div key={platform}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {platform}
              </label>
              <input
                type="text"
                name={platform}
                value={socialMediaLinks[platform]}
                onChange={handleSocialMediaChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder={`Enter your ${platform} link`}
              />
            </div>
          ))}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Other
            </label>
            <input
              type="text"
              name="other"
              value={socialMediaLinks.other}
              onChange={handleSocialMediaChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter other social media links"
            />
          </div>
        </div>
      </div>

      {/* ID Verification Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mb-8">
        <h1 className="text-lg font-semibold mb-4">ID Verification</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhaar Number
            </label>
            <input
              type="text"
              name="aadhaarNumber"
              value={idVerification.aadhaarNumber}
              onChange={handleIDVerificationChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Aadhaar Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhaar Card Front & Back Image
            </label>
            <input
              type="file"
              name="aadhaarImage"
              onChange={handleIDVerificationChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PAN Card
            </label>
            <input
              type="file"
              name="panCard"
              onChange={handleIDVerificationChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Selfie
            </label>
            <input
              type="file"
              name="selfie"
              onChange={handleIDVerificationChange}
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

export default VerificationTab;
