/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isUsingEmail, setIsUsingEmail] = useState(true);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const images = [
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46944GlobalSignin4.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46943GlobalSignin3.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46945GlobalSignin.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
  ];

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPhoneNumberValid(phoneNumber.length >= 10);
  }, [phoneNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex === images.length - 1) {
        setIsResetting(true);
        setTimeout(() => {
          setCurrentImageIndex(0);
          setIsResetting(false);
        }, 500);
      } else {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const fakeApiCall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("API call data:", data);
        resolve({ success: true, message: "OTP sent successfully" });
      }, 1000);
    });
  };

  const handleFormSubmit = async () => {
    const userData = isUsingEmail ? { email } : { phoneNumber };
    console.log("User input:", userData);

    try {
      const response = await fakeApiCall(userData);
      if (response.success) {
        toast.success(isUsingEmail ? "OTP Sent to Email!" : "OTP Sent to Phone Number!");
        setShowOTPInput(true);
      }
    } catch (error) {
      console.error("API call error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleOTPSubmit = async () => {
    const otpData = { otp, ...(isUsingEmail ? { email } : { phoneNumber }) };
    console.log("OTP submission:", otpData);

    try {
      const response = await fakeApiCall(otpData);
      if (response.success) {
        if (otp === "000000") {
          toast.success("OTP Verified!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          toast.error("Invalid OTP. Please try again.");
        }
      }
    } catch (error) {
      console.error("API call error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage: "url(https://d3qp9zvlyuxos1.cloudfront.net/Gradient+background.svg)",
      }}
    >
      <div className="flex justify-center items-start min-h-screen pt-8">
        <div
          className="shadow-xl flex flex-col lg:flex-row bg-white rounded-[24px] w-full max-w-[1000px] relative"
          style={{ height: "auto" }}
        >
          <div className="relative flex flex-col flex-1 p-6 md:p-12 pb-6 rounded-l-[24px] lg:rounded-l-[24px] w-full">
            <div className="w-full flex flex-col items-center justify-center gap-6 mt-4">
              <div className="flex flex-col items-center justify-center gap-1">
                <h2 className="text-xl md:text-2xl font-bold">Welcome Back!</h2>
                <p className="text-base font-semibold text-gray-500">
                  Sign in to your SuperProfile account
                </p>
              </div>

              {isUsingEmail ? (
                <div className="flex flex-col gap-1 w-[85%]">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-1 w-[85%]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {showOTPInput && (
                <div className="flex flex-col gap-1 w-[85%]">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="mt-2 w-[85%] flex justify-center text-sm items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-full"
                    onClick={handleOTPSubmit}
                  >
                    Submit OTP
                  </button>
                </div>
              )}

              {!showOTPInput && (
                <button
                  className={`w-[85%] flex justify-center text-sm items-center gap-2 ${
                    (isUsingEmail && isEmailValid) || (!isUsingEmail && isPhoneNumberValid)
                      ? "bg-slate-900 text-white"
                      : "bg-gray-400 text-gray-700"
                  } py-2 px-4 rounded-full`}
                  disabled={
                    (isUsingEmail && !isEmailValid) ||
                    (!isUsingEmail && !isPhoneNumberValid)
                  }
                  onClick={handleFormSubmit}
                >
                  {isUsingEmail ? "Send OTP to Email" : "Send OTP to Phone"}
                </button>
              )}

              <div className="flex items-center justify-between w-[80%]">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-sm text-[#5f5f5f]">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <button
                className="w-[85%] flex justify-center text-sm items-center gap-2 text-black py-2 px-4 rounded-full border border-slate-900"
                onClick={() => {
                  setIsUsingEmail((prev) => !prev);
                  setShowOTPInput(false);
                }}
              >
                <FontAwesomeIcon icon={isUsingEmail ? faMobileScreenButton : faEnvelope} />
                Continue with {isUsingEmail ? "Phone Number" : "Email"}
              </button>
              <button className="w-[85%] flex justify-center text-sm items-center gap-2 text-black py-2 px-4 rounded-full border border-slate-900">
                <FontAwesomeIcon icon={faGoogle} />
                Continue with Google
              </button>

              <p className="text-center text-gray-600 font-medium text-sm mt-2">
                Don't have an account?{" "}
                <a href="/freelancing/#/signup" className="text-blue-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 rounded-r-[24px] justify-center items-center bg-slate-900 relative overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out h-full ${
                isResetting ? "opacity-0" : ""
              }`}
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-contain"
                  style={{ flex: "0 0 auto" }}
                />
              ))}
            </div>

            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-gray-500"
                  } transition-all duration-300`}
                  onClick={() => handleImageChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;