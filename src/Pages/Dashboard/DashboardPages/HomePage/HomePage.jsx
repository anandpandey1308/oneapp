import { ChevronFirst, ChevronLast, Plus, Sparkles } from "lucide-react";
import CommunityCard from "../../../../components/Cards/CommunityCard"; 
import InspiredCard from "../../../../components/Cards/InspiredCard";
import ActionAreaCard from "../../../../components/Cards/ActionAreaCard";
import { HomePageConfig } from "./homeConfig";
import { toast } from "react-toastify";
import { useState } from "react";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = () => {
    setIsLoading(true);
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

  const handleNextCourse = () => {
    if (currentCourseIndex < HomePageConfig.exclusiveCourses.length - 3) {
      setCurrentCourseIndex(prev => prev + 3);
    }
  };

  const handlePreviousCourse = () => {
    if (currentCourseIndex > 0) {
      setCurrentCourseIndex(prev => prev - 3);
    }
  };

  const handleNextResource = () => {
    if (currentResourceIndex < HomePageConfig.topResources.length - 3) {
      setCurrentResourceIndex(prev => prev + 3);
    }
  };

  const handlePreviousResource = () => {
    if (currentResourceIndex > 0) {
      setCurrentResourceIndex(prev => prev - 3);
    }
  };

  const isNextDisabled = currentIndex >= HomePageConfig.inspirationCards.length - 3;
  const isPrevDisabled = currentIndex === 0;
  const isNextCourseDisabled = currentCourseIndex >= HomePageConfig.exclusiveCourses.length - 3;
  const isPrevCourseDisabled = currentCourseIndex === 0;
  const isNextResourceDisabled = currentResourceIndex >= HomePageConfig.topResources.length - 3;
  const isPrevResourceDisabled = currentResourceIndex === 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative pb-6 mb-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-gray-800 text-3xl md:text-4xl font-mono tracking-tight">
              {HomePageConfig.title}
            </h1>
            <button
              type="button"
              disabled={isLoading}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-6 py-2.5 transition duration-300 hover:from-orange-600 hover:to-orange-700 disabled:opacity-70 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Create"
              onClick={handleCreate}
            >
              <Plus className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Creating...' : 'Create'}
            </button>
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

        {/* Get Inspired Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-2xl text-gray-800">Get Inspired</h4>
              <div className="h-1 w-1 rounded-full bg-orange-500" />
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Exclusive Courses Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-2xl text-gray-800">Exclusive Courses</h4>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">Premium</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePreviousCourse}
                disabled={isPrevCourseDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous courses"
              >
                <ChevronFirst className={`${isPrevCourseDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={handleNextCourse}
                disabled={isNextCourseDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next courses"
              >
                <ChevronLast className={`${isNextCourseDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HomePageConfig.exclusiveCourses.slice(currentCourseIndex, currentCourseIndex + 3).map((card, index) => (
              <ActionAreaCard
                key={index}
                image={card.image}
                altText={card.altText}
                title={card.title}
                description={card.description}
                isLocked={card.isLocked}
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>

        {/* Top Resources Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-2xl text-gray-800">Top Resources</h4>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">Featured</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePreviousResource}
                disabled={isPrevResourceDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Previous resources"
              >
                <ChevronFirst className={`${isPrevResourceDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={handleNextResource}
                disabled={isNextResourceDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Next resources"
              >
                <ChevronLast className={`${isNextResourceDisabled ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HomePageConfig.topResources.slice(currentResourceIndex, currentResourceIndex + 3).map((card, index) => (
              <ActionAreaCard
                key={index}
                image={card.image}
                altText={card.altText}
                title={card.title}
                description={card.description}
                isLocked={false}
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;