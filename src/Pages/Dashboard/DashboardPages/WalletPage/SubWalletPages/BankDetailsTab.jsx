import  { useState } from "react";

const BankDetailsTab = () => {
  const [bankingInfo, setBankingInfo] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankDocument: null,
    upiId: "",
  });

  const handleBankingInfoChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setBankingInfo((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setBankingInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    // Save logic here
    alert("Banking Information saved successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 mt-12">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        {/* Banking Information */}
        <h1 className="text-lg font-semibold mb-4">Banking Information</h1>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Account Holder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolderName"
              value={bankingInfo.accountHolderName}
              onChange={handleBankingInfoChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Account Holder Name"
            />
          </div>

          {/* Primary Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={bankingInfo.accountNumber}
              onChange={handleBankingInfoChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Account Number"
            />
          </div>

          {/* IFSC Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              name="ifscCode"
              value={bankingInfo.ifscCode}
              onChange={handleBankingInfoChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter IFSC Code"
            />
          </div>

          {/* Bank Passbook / Statement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Passbook / Statement (Any One)
            </label>
            <input
              type="file"
              name="bankDocument"
              onChange={handleBankingInfoChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {/* Add UPI ID */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add UPI ID
            </label>
            <input
              type="text"
              name="upiId"
              value={bankingInfo.upiId}
              onChange={handleBankingInfoChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter UPI ID"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="bg-[#FA6E25] text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:ring focus:ring-blue-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BankDetailsTab;