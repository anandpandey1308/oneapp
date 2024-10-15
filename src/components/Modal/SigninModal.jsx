/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Modal } from "@mui/material";
import { toast } from 'react-toastify';

const SigninModal = ({ open, handleClose, label, value, onSave }) => {
  const [tempValue, setTempValue] = useState(value);
  const [isPrimaryEmailChecked, setIsPrimaryEmailChecked] = useState(false);
  const [isOtherReasonChecked, setIsOtherReasonChecked] = useState(false);
  const [otherReasonText, setOtherReasonText] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const correctOtp = "000000";

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const handleCloseModal = () => {
    setIsOtpSent(false);
    setOtpValue("");
    setIsPrimaryEmailChecked(false);
    setIsOtherReasonChecked(false);
    setOtherReasonText("");
    handleClose();
  };

  const handleSave = () => {
    fakeApiCallToSendOtp().then(() => {
      setIsOtpSent(true);
      toast.success("OTP has been sent!");
    });
  };

  const handleOtpSubmit = () => {
    if (otpValue === correctOtp) {
      onSave(tempValue);
      handleCloseModal();
      toast.success("Updated successfully!");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleOtherReasonChange = (e) => {
    setIsOtherReasonChecked(e.target.checked);
    if (!e.target.checked) {
      setOtherReasonText("");
    }
  };

  const handleOtherReasonTextChange = (e) => {
    if (e.target.value.length <= 250) {
      setOtherReasonText(e.target.value);
    }
  };

  const fakeApiCallToSendOtp = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <div className="flex items-center justify-center min-h-screen p-4 md:p-0">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Change your email address</h1>
            <div
              className="text-gray-500 cursor-pointer text-xl hover:text-gray-800 transition-colors"
              onClick={handleCloseModal}
            >
              &times;
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />
          <p className="text-gray-600 mb-6">
            This is the email you use to sign in to your SuperProfile account. Why do you wish to change it?
          </p>

          {/* Primary Email Checkbox */}
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              checked={isPrimaryEmailChecked}
              onChange={(e) => setIsPrimaryEmailChecked(e.target.checked)}
              className="form-checkbox text-orange-500 focus:ring-orange-500 mt-1"
            />
            <span className="ml-3 text-gray-700">
              This was not my primary email account and I want to update my SuperProfile account with a new email.
            </span>
          </div>

          {/* Other Reason Checkbox */}
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              checked={isOtherReasonChecked}
              onChange={handleOtherReasonChange}
              className="form-checkbox text-orange-500 focus:ring-orange-500 mt-1"
            />
            <span className="ml-3 text-gray-700">Other reason</span>
          </div>

          {isOtherReasonChecked && (
            <div className="mb-6">
              <label htmlFor="otherReason" className="block text-gray-700 mb-2">
                Please specify (max 250 characters):
              </label>
              <textarea
                id="otherReason"
                value={otherReasonText}
                onChange={handleOtherReasonTextChange}
                maxLength={250}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Type your reason here..."
              />
              <p className="text-gray-500 text-sm mt-1">
                {otherReasonText.length}/250 characters
              </p>
            </div>
          )}

          {/* Email Input Field */}
          <div className="mb-6">
            <span className="block text-gray-700 mb-2">Enter your email</span>
            <input
              type="email"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your new email"
            />
          </div>

          {isOtpSent && (
            <div className="mb-6">
              <span className="block text-gray-700 mb-2">Enter OTP</span>
              <input
                type="text"
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter OTP"
              />
              <button
                onClick={handleOtpSubmit}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Submit OTP
              </button>
            </div>
          )}

          {/* Submit Button */}
          {!isOtpSent && (
            <button
              onClick={handleSave}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Verify and update your email
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SigninModal;
