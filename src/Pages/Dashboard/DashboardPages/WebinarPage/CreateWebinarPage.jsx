import { ChevronLeft, Video } from "lucide-react";
import { useState } from "react";
import dayjs from "dayjs"; // import dayjs for date management
import { useNavigate } from "react-router-dom";

const CreateWebinarPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Finance");
  const [imagePreview, setImagePreview] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [eventTab, setEventTab] = useState(0);
  const navigate = useNavigate();

  const [occurDropdownOpen, setOccurDropdownOpen] = useState(false);
  const [selectedOccurrence, setSelectedOccurrence] = useState("Weekly");

  const todayDate = dayjs().format("YYYY-MM-DD");
  const currentTime = dayjs().format("HH:mm");

  const tabs = [
    { title: "Zoom" },
    { title: "Add link" },
    { title: "Offline" },
  ];

  const eventTabs = [{ title: "Single Event" }, { title: "Recurring Event" }];

  const costTab = [
    { title: "Free" },
    { title: "Paid" },
  ]

  const eventCategory = [
    "Finance",
    "Education",
    "Astrology",
    "Others"
  ]

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleOccurDropdownToggle = () =>
    setOccurDropdownOpen(!occurDropdownOpen);

  const handleOccurOptionSelect = (option) => {
    setSelectedOccurrence(option);
    setOccurDropdownOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-6 max-w-2xl mx-auto">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full pb-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <ChevronLeft 
          onClick={() => navigate('/dashboard/webinar')}
          />
          <p className="text-lg font-medium">New Event</p>
        </div>
        <button
          type="button"
          className="bg-orange-600 text-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-orange-700 transition duration-200"
          aria-label="Publish Event"
        >
          Publish
        </button>
      </div>

      {/* Upload Image Section */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full h-72 border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center space-y-2 p-4 relative">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Event Cover Preview"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4 4m0 0l4-4m-4 4V4m0 0H4m4 0h8m0 4l4-4m-4 4V4m0 0h4"
                />
              </svg>
              <span className="text-gray-500 text-sm">
                Upload a cover image or video (16:9 for best results)
              </span>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>
      </div>

      {/* Event Information Form */}
      <div className="shadow-md rounded-lg p-6 w-full bg-white space-y-6">
        <h2 className="text-base font-semibold">What is your event?</h2>
        <hr className="border-gray-300" />

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
          />

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={handleDropdownToggle}
              className="border border-gray-300 rounded-md w-full p-2 text-left text-sm focus:outline-none focus:border-orange-600"
            >
              {selectedOption}
            </button>
            {dropdownOpen && (
              <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                {eventCategory.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="shadow-md rounded-lg p-6 w-full bg-white space-y-3">
        <h2 className="text-base font-semibold">Event Information</h2>
        <hr className="border-gray-300" />

        <div className="flex justify-start items-center gap-4 p-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer rounded-full text-xs md:text-sm px-4 py-2 transition duration-200 
                ${
                  activeTab === index
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-200"
                }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 0 && (
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-semibold">
                Connect with Zoom to automatically generate Zoom meetings
              </h3>
              <button
                type="button"
                className="bg-orange-600 text-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-orange-700 transition duration-200 w-28 flex items-center gap-2"
                aria-label="Zoom"
              >
                <span>
                  <Video />
                </span>
                Zoom
              </button>
              <p className="text-gray-500">
                Or enter meeting information manually:
              </p>
              <input
                type="text"
                placeholder="Zoom Meeting Link"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
              />
              <input
                type="text"
                placeholder="Meeting ID"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
              />
              <input
                type="text"
                placeholder="Meeting Password"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
              />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h3 className="text-sm font-semibold">Virtual Event Details</h3>
              <p className="text-gray-600 text-sm mt-2">
                Add URL of GMeet, YouTube, Microsoft Teams, or wherever it will
                take place.
              </p>
              <input
                type="text"
                placeholder="Platform Link (e.g., Google Meet, Teams)"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600 mt-2 w-full"
              />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h3 className="text-sm font-semibold">
                In-Person Event Location
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Enter the venue location to help attendees find their way to
                your event.
              </p>
              <input
                type="text"
                placeholder="Venue Location"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600 mt-2 w-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Event Timing */}
      <div className="shadow-md rounded-lg p-6 w-full bg-white space-y-3">
        <h2 className="text-base font-semibold">Event Timing</h2>
        <hr className="border-gray-300" />

        <div className="flex gap-4 p-4">
          {eventTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setEventTab(index)}
              className={`cursor-pointer rounded-full text-xs md:text-sm px-4 py-2 transition duration-200 
                ${
                  eventTab === index
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-200"
                }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Date and Time Pickers */}
        <div className="flex flex-col space-y-4 px-4 py-2">
          <label className="text-sm font-semibold">
            Event Start Date:
          </label>
          <input
            type="date"
            defaultValue={todayDate}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
          />
          <input
            type="time"
            defaultValue={currentTime}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
          />

          {eventTab === 1 && (
            <div className="relative mt-4">
              <label className="text-sm font-semibold">Repeat Every:</label>
              <button
                type="button"
                onClick={handleOccurDropdownToggle}
                className="border border-gray-300 rounded-md w-full p-2 text-left text-sm focus:outline-none focus:border-orange-600"
              >
                {selectedOccurrence}
              </button>
              {occurDropdownOpen && (
                <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                  {["Daily", "Weekly", "Monthly"].map((option) => (
                    <li
                      key={option}
                      onClick={() => handleOccurOptionSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <label className="text-sm font-semibold">
            Event End Date :
          </label>
          <input
            type="date"
            defaultValue={todayDate}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
          />
        </div>
      </div>
      

      <div className="shadow-md rounded-lg p-6 w-full bg-white space-y-3">
      <h2 className="text-base font-semibold">What is your event?</h2>
      <hr className="border-gray-300" />

      {/* Tabs for Ticket Type */}
      <div className="flex justify-start items-center gap-4 p-4">
        {costTab.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer rounded-full text-xs md:text-sm px-4 py-2 transition duration-200 
              ${
                activeTab === index
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-200"
              }`}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col gap-4 px-4 py-2">
        {activeTab === 0 && (
          <div className="flex flex-col space-1">
            <label className="text-sm font-semibold">Ticket Quantity:</label>
            <input
              type="number"
              placeholder="Enter ticket quantity"
              className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
            />
          </div>
        )}
        {activeTab === 1 && (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold">Ticket Quantity:</label>
              <input
                type="number"
                placeholder="Enter ticket quantity"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Ticket Price:</label>
              <input
                type="text"
                placeholder="Enter ticket price"
                className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default CreateWebinarPage;
