import Card from "../../../../components/Cards/Card";
import NoContentComponent from "../../../../components/NoContent/NoContentComponent";
import Table from "../../../../components/Table/TableComponent";
import pagesConfig from "../pagesConfig"; 
import { useState } from "react";

const TelegramPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const { title, button, bgGradient, noContent, tabs, cardData } = pagesConfig.telegramPage;

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal state
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Telegram</h2>
            <p className="text-gray-600">This is the modal content.</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleModalToggle}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelegramPage;
