import { GoPlus } from "react-icons/go";
import Card from "../../../../components/Cards/Card";
import { cardData, tabContents } from "../../../../utils/constants/constants";
import { useState } from "react";

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Background Section */}
      <div className="w-full h-64 bg-gradient-to-b from-[#f08a5d] to-[#ffdda1] flex justify-center items-center relative">
        <h1 className="font-bold text-white text-3xl md:text-4xl">Payment Page</h1>
        <button
          type="button"
          className="bg-orange-600 text-white rounded-full text-xs md:text-sm px-4 md:px-6 py-2 transition duration-200 md:w-auto hover:bg-orange-700 absolute top-4 right-4 md:top-5 md:right-10 flex justify-center items-center gap-1"
          aria-label="Create Payment Page"
        >
          <GoPlus className="font-bold" />
          Create Payment Page
        </button>
      </div>

      <div className="flex md:justify-center items-center gap-6 p-6 overflow-x-auto md:overflow-visible flex-nowrap w-full relative -mt-24 z-10 scrollbar-hide">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex justify-start items-center gap-4 p-6">
        {tabContents.map((tab, index) => (
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
        {tabContents[activeTab].content ? (
          <>
            {activeTab === 0 && (
              <div className="bg-blue-100 text-blue-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">Published Items</h2>
                <p>{tabContents[activeTab].content}</p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="bg-purple-100 text-purple-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">Unpublished Items</h2>
                <p>{tabContents[activeTab].content}</p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-orange-100 text-orange-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">Draft Items</h2>
                <p>{tabContents[activeTab].content}</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            {activeTab === 0 && (
              <div className="bg-red-100 text-red-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">No Published Content</h2>
                <p>There are currently no published items. Please publish some items.</p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">No Unpublished Content</h2>
                <p>There are currently no unpublished items available.</p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="bg-green-100 text-green-600 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-2">No Draft Content</h2>
                <p>There are currently no draft items. Please create some drafts.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
