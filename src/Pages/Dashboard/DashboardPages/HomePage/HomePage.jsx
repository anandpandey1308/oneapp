/* eslint-disable no-unused-vars */
import { Sparkles } from "lucide-react";
import CommunityCard from '../../../../components/Cards/CommunityCard';
import { useState } from "react";
import { HomePageConfig } from './homeConfig';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col">
      {/* Centered and Lowered Title Section */}
      <div className="flex-grow flex items-center justify-center -mt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight mb-12">
            {HomePageConfig.title}
          </h1>

          {/* Notice Banner */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 border border-blue-200 rounded-2xl p-4 flex items-center justify-center space-x-4 shadow-sm">
              <Sparkles className="h-6 w-6 text-blue-600 animate-pulse" />
              <p className="text-gray-700 font-medium text-center">
                {HomePageConfig.noticeText}
              </p>
            </div>
          </div>

          {/* Community Cards Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CommunityCard
                icon={HomePageConfig.telegram.icon}
                title={HomePageConfig.telegram.title}
                description={HomePageConfig.telegram.description}
                link={HomePageConfig.telegram.link}
                buttonLabel={HomePageConfig.telegram.buttonLabel}
                buttonColor={HomePageConfig.telegram.buttonColor}
                isLoading={isLoading}
              />
              <CommunityCard
                icon={HomePageConfig.whatsApp.icon}
                title={HomePageConfig.whatsApp.title}
                description={HomePageConfig.whatsApp.description}
                link={HomePageConfig.whatsApp.link}
                buttonLabel={HomePageConfig.whatsApp.buttonLabel}
                buttonColor={HomePageConfig.whatsApp.buttonColor}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;