import { ChevronFirst, ChevronLast, Plus } from "lucide-react";
import CommunityCard from "../../../../components/Cards/CommunityCard"; 
import InspiredCard from "../../../../components/Cards/InspiredCard"; // Import your new InspiredCard component
import { HomePageConfig } from "./homeConfig";
import { toast } from "react-toastify";
import { useState } from "react";


const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.info('Navigate to create page');
    }, 1000);
  };

  const handleNext = () => {
    if (currentIndex < HomePageConfig.inspirationCards.length - 3) {
      setCurrentIndex(prev => prev + 3);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 3);
    }
  };

  const isNextDisabled = currentIndex >= HomePageConfig.inspirationCards.length - 3;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
      <h1 className="font-bold text-gray-800 text-2xl md:text-3xl mb-6 font-mono">
        {HomePageConfig.title}
      </h1>

      {/* Create Button */}
      <button
        type="button"
        disabled={isLoading}
        className="bg-orange-600 text-white rounded-full text-xs md:text-sm px-4 md:px-6 py-2 transition duration-200 md:w-auto hover:bg-orange-700 absolute top-4 right-4 md:top-5 md:right-10 flex items-center gap-1 shadow-lg disabled:opacity-70"
        aria-label="Create"
        onClick={handleCreate}
      >
        <Plus className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        {isLoading ? 'Creating...' : 'Create'}
      </button>

      {/* Welcome Message */}
      <div className="border border-gray-300 rounded-full h-12 w-3/5 text-center p-2 bg-white shadow-sm mb-8 flex items-center justify-center">
        {HomePageConfig.noticeText}
      </div>

      {/* Community Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
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

      {/* Get Inspired Section */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-xl text-gray-800">Get Inspired</h4>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={isPrevDisabled}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous cards"
            >
              <ChevronFirst className={`${isPrevDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next cards"
            >
              <ChevronLast className={`${isNextDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HomePageConfig.inspirationCards.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <InspiredCard
              key={index}
              image={card.image}
              text={card.text}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;