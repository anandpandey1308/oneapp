/* eslint-disable no-unused-vars */
import { Sparkles } from "lucide-react";
import CommunityCard from "../../../../components/Cards/CommunityCard"; 
import { HomePageConfig } from "./homeConfig";
import { useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative pb-6 mb-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-gray-800 text-3xl md:text-4xl font-mono tracking-tight">
              {HomePageConfig.title}
            </h1>
          </div>
          
          {/* Welcome Message */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-100 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700 font-medium">{HomePageConfig.noticeText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CommunityCard
            icon={HomePageConfig.telegram.icon}
            title={HomePageConfig.telegram.title}
            description={HomePageConfig.telegram.description}
            link={HomePageConfig.telegram.link}
            buttonLabel={HomePageConfig.telegram.buttonLabel}
            buttonColor={HomePageConfig.telegram.buttonColor}
            textColor={HomePageConfig.telegram.textColor}
            isLoading={isLoading}
          />
          <CommunityCard
            icon={HomePageConfig.whatsApp.icon}
            title={HomePageConfig.whatsApp.title}
            description={HomePageConfig.whatsApp.description}
            link={HomePageConfig.whatsApp.link}
            buttonLabel={HomePageConfig.whatsApp.buttonLabel}
            buttonColor={HomePageConfig.whatsApp.buttonColor}
            textColor={HomePageConfig.whatsApp.textColor}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;