import { useState } from "react";
import NoAudienceComponent from "../../../../components/NoContent/NoAudienceComponent";
import yourCustomerConfig from "./yourCustomerConfig";
import AudienceTableComponent from "../../../../components/Table/AudienceTableComponent";

const AudiencePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = yourCustomerConfig.tabs[activeTab];

  return (
    <div className="min-h-screen">
      <h1 className="text-black text-xl md:text-xl p-4">{yourCustomerConfig.title}</h1>
      <hr className="border-gray-300 mb-3" />

      {/* Tabs */}
      <div className="flex justify-start items-center gap-4 p-4">
        {yourCustomerConfig.tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer rounded-full text-xs md:text-sm px-4 py-2 transition duration-200 
              ${activeTab === index ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-orange-200'}`}
          >
            {tab.title} ({tab.value})
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 h-full w-full flex items-center justify-center">
        {currentTab.content.length > 0 ? (
          <AudienceTableComponent data={currentTab.content} />
        ) : (
          <NoAudienceComponent
            title={yourCustomerConfig.noContentData[currentTab.title.toLowerCase()].title}
            description={
              Array.isArray(yourCustomerConfig.noContentData[currentTab.title.toLowerCase()].description)
                ? yourCustomerConfig.noContentData[currentTab.title.toLowerCase()].description
                : [yourCustomerConfig.noContentData[currentTab.title.toLowerCase()].description]
            }
            buttonTitle={yourCustomerConfig.noContentData[currentTab.title.toLowerCase()].buttonTitle}
          />
        )}
      </div>
    </div>
  );
};

export default AudiencePage;
