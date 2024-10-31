/* eslint-disable react/prop-types */

const CardSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-12 w-12 bg-gray-200 rounded-full mb-6 mx-auto" />
    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-3" />
    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-6" />
    <div className="h-10 bg-gray-200 rounded-md w-full" />
  </div>
);

const CommunityCard = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  buttonColor,
  textColor,
  link,
  isLoading
}) => {
  if (isLoading) return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-2 bg-white">
      <CardSkeleton />
    </div>
  );

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2 bg-white transition hover:shadow-xl">
      <div className="mb-4">
        <Icon className={`h-10 w-10`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        {description}
      </p>
      <button 
        onClick={() => window.open(link, '_blank')}
        className={`w-full max-w-xs px-6 py-2.5 ${buttonColor} ${textColor} rounded-md font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 border border-sm`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default CommunityCard;