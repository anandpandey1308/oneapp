/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import SubscriptionPage from "./SubscriptionsPage";

const SignUpPage = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("instagram");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [goalDropdownOpen, setGoalDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [subscriptionPage, setSubscriptionPage] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const containerRef = useRef(null);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");


  const countryCodes = ["+1", "+91", "+44", "+61"];
  const socialMediaOptions = [
    { value: "instagram", label: "Instagram", icon: faInstagram },
    { value: "twitter", label: "Twitter", icon: faTwitter },
    { value: "facebook", label: "Facebook", icon: faFacebook },
    { value: "tiktok", label: "TikTok", icon: faTiktok },
    { value: "linkedin", label: "LinkedIn", icon: faLinkedin },
  ];

  const images = [
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46944GlobalSignin4.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46943GlobalSignin3.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46945GlobalSignin.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
  ];

  const goals = [
    "Improve your social media presence",
    "Increase website traffic",
    "Boost engagement on content",
    "Grow your email list",
    "Enhance your personal brand",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setGoalDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectSocialMedia = (platform) => {
    setSelectedSocialMedia(platform);
    setDropdownOpen(false);
  };

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };
  
  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Enter a valid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };
  
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleGetStarted = () => {
    const isNameValid = validateName();
    const isPhoneValid = validatePhoneNumber();
    const isEmailValid = validateEmail();

    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      toast.error("Please fix the errors");
      return;
    }
    const userData = {
      name,
      phoneNumber: selectedCountryCode + phoneNumber,
      email,
      socialMedia: selectedSocialMedia,
      username,
      goals: selectedGoals,
      heardFrom,
    };
    console.log("User Data:", userData);
    setOtpScreen(true);

    // fetch("https://fakapi.com/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("API Response:", data);
    //     setOtpScreen(true);
    //   })
    //   .catch(error => {
    //     console.error("API Error:", error);
    //     toast.error("An error occurred. Please try again.");
    //   });
  };

  const handleOTPSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "000000") {
      toast.success("OTP Verified!");
      setTimeout(() => {
        setSubscriptionPage(true);
      }, 1000);
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleGoalToggle = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const toggleGoalDropdown = () => {
    setGoalDropdownOpen((prev) => !prev);
  };

  const isFormValid = () => {
    return name && phoneNumber && email && username && selectedGoals.length > 0 && heardFrom;
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage:
          "url(https://d3qp9zvlyuxos1.cloudfront.net/Gradient+background.svg)",
      }}
    >
      {subscriptionPage ? (
        <SubscriptionPage />
      ) : (
        <div className="flex justify-center items-start min-h-screen pt-8">
          <div className="shadow-xl flex flex-col lg:flex-row bg-white rounded-[24px] w-full max-w-[1000px] h-[692px] relative">
            <div
              className="relative flex flex-col flex-1 lg:w-1/2 p-6 md:p-12 pb-6 rounded-tl-[24px] rounded-bl-[24px] w-full"
              style={{ paddingBottom: "24px" }}
            >
              {otpScreen ? (
                <div className="w-full flex flex-col items-center justify-center gap-6 mt-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Verify Your Phone Number
                  </h2>
                  <p className="text-gray-500">
                    We've sent an OTP to your phone number
                  </p>

                  <div className="flex space-x-2 justify-center mt-4">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-input-${i}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ))}
                  </div>

                  <button
                    className="mt-6 w-[85%] bg-[#10172A] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition duration-200"
                    onClick={handleOTPSubmit}
                  >
                    Confirm OTP
                  </button>

                  <p className="text-gray-600 text-sm mt-4">
                    Didn't receive the OTP?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Resend
                    </a>
                  </p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center gap-6 mt-4">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-xl md:text-2xl font-bold">
                      Let's create your SuperProfile!
                    </h2>
                    <p className="text-base font-semibold text-gray-500">
                      Your all-in-one digital store to showcase and sell
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 w-[85%]">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onBlur={validateName}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-2 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {nameError && <span className="text-red-500 text-xs">{nameError}</span>}
                    <div className="flex border border-gray-300 rounded mt-2.5 text-sm">
                      <select
                        className="p-2"
                        value={selectedCountryCode}
                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                      >
                        {countryCodes.map((code) => (
                          <option key={code} value={code}>
                            {code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onBlur={validatePhoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="p-2 flex-1"
                      />
                      {phoneError && <span className="text-red-500 text-xs">{phoneError}</span>}
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onBlur={validateEmail}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {emailError && <span className="text-red-500 text-xs">{emailError}</span>}
                    <div className="flex items-center justify-start border border-gray-300 rounded-lg relative w-full mt-2.5 text-sm">
                      <button
                        type="button"
                        className="flex items-center p-2"
                        onClick={handleDropdownToggle}
                      >
                        {selectedSocialMedia ? (
                          <FontAwesomeIcon
                            icon={
                              socialMediaOptions.find(
                                (option) => option.value === selectedSocialMedia
                              )?.icon
                            }
                            className="text-xl"
                          />
                        ) : (
                          <span>Select Platform</span>
                        )}
                      </button>
                      {dropdownOpen && (
                        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2.5 text-sm w-full">
                          {socialMediaOptions.map((platform) => (
                            <div
                              key={platform.value}
                              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                handleSelectSocialMedia(platform.value)
                              }
                            >
                              <FontAwesomeIcon
                                icon={platform.icon}
                                className="mr-2"
                              />
                              {platform.label}
                            </div>
                          ))}
                        </div>
                      )}
                      <input
                        type="text"
                        placeholder="@username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 flex-1 rounded-r-lg w-[80%]"
                      />
                    </div>

                    <div className="relative mt-2.5" ref={containerRef}>
                      <button
                        type="button"
                        className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center"
                        onClick={toggleGoalDropdown}
                      >
                        {selectedGoals.length > 0 ? `${selectedGoals.length} goals selected` : "select goals"}
                      </button>
                      {goalDropdownOpen && (
                        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2.5 w-full">
                          {goals.map((goal) => (
                            <div
                              key={goal}
                              className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
                                selectedGoals.includes(goal)
                                  ? "bg-gray-100"
                                  : ""
                              }`}
                              onClick={() => handleGoalToggle(goal)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedGoals.includes(goal)}
                                onChange={() => {}}
                                className="mr-2"
                              />
                              {goal}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="How did you hear about us?"
                      value={heardFrom}
                      onChange={(e) => setHeardFrom(e.target.value)}
                      className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    className={`w-[85%] flex justify-center text-sm items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-full ${
                      !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleGetStarted}
                    disabled={!isFormValid()}
                  >
                    Get Started
                  </button>
                  <p className="text-center text-gray-600 font-medium text-sm mt-2">
                    Already have an account?{" "}
                    <a href="/freelancing/#/signin" className="text-blue-500">
                      Sign in
                    </a>
                  </p>
                </div>
              )}
            </div>


            <div className="relative flex flex-1 lg:w-1/2 rounded-tr-[24px] rounded-br-[24px] w-full overflow-hidden hidden lg:flex">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://superprofile.bio/_next/static/media/super-profile-bg.e492fb38.png')",
                }}
              ></div>
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="w-full h-full relative">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className={`w-full h-full object-contain transition-opacity duration-1000 ${
                      fadeOut ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-gray-500 bg-opacity-50"
                        } transition-all duration-300`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
