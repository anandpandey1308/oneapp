/* eslint-disable react/no-unescaped-entities */
import { toast } from "react-toastify";
import Card from "../../../../components/Cards/Card";
import NoContentComponent from "../../../../components/NoContent/NoContentComponent";
import Table from "../../../../components/Table/TableComponent";
import pagesConfig from "../pagesConfig"; 
import { useState } from "react";

const TelegramPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const { title, button, bgGradient, noContent, tabs, cardData } = pagesConfig.telegramPage;

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal state
  };

  const handleSubmit = () => {
    if (!mobileNumber) {
      toast.error('Please enter a mobile number');
      return;
    }
    
    toast.success('OTP has been sent to your mobile number');
    handleModalToggle();
    setMobileNumber('')
  };

  return (
    <div className="min-h-screen">
      {/* Background Section */}
      <div className={`w-full h-64 ${bgGradient} flex justify-center items-center relative`}>
        <h1 className="font-bold text-white text-3xl md:text-4xl">{title}</h1>
        <button
          type="button"
          onClick={handleModalToggle} // Open modal on click
          className="bg-orange-600 text-white rounded-full text-xs md:text-sm px-4 md:px-6 py-2 transition duration-200 md:w-auto hover:bg-orange-700 absolute top-4 right-4 md:top-5 md:right-10 flex justify-center items-center gap-1"
          aria-label={button.ariaLabel}
        >
          <button.icon className="font-bold" />
          {button.label}
        </button>
      </div>

      <div className="flex md:justify-center items-center gap-6 p-6 overflow-x-auto md:overflow-visible flex-nowrap w-full relative -mt-24 z-10 scrollbar-hide">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} description={card.description} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex justify-start items-center gap-4 p-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer rounded-full text-xs md:text-sm px-4 py-2 transition duration-200 
              ${activeTab === index ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-orange-200'}`}
          >
            {tab.title}({tab.value})
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 h-full w-full flex items-center justify-center">
        {tabs[activeTab].content && tabs[activeTab].content.length > 0 ? (
          <Table data={tabs[activeTab].content} />
        ) : (
          <NoContentComponent
            title={noContent[activeTab].title}
            description={noContent[activeTab].description}
            isbutton={noContent[activeTab].isButton}
            button_title={noContent[activeTab].buttonTitle}
          />
        )}
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto p-4">
    <div className="bg-white rounded-xl p-8 w-full max-w-md mx-auto shadow-2xl border border-gray-100 relative transform transition-all duration-300 ease-in-out hover:shadow-xl">
      {/* Close Button */}
      <button 
        onClick={handleModalToggle}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 rounded-full p-2 hover:bg-gray-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Join Telegram
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="space-y-4">
          <div>
            <label 
              htmlFor="mobile" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              pattern="[+]?[0-9]{10,14}"
            />
            <p className="text-xs text-gray-500 mt-1 ml-1">
              We'll send a verification code
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-grow bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform active:scale-95"
            >
              Send Verification
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default TelegramPage;
