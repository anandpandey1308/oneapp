import { CheckCheck, IndianRupee } from "lucide-react";
import { pluginConfig } from './pluginConfig';


const PluginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-8">
          {pluginConfig.map((plan, index) => (
            <div 
              key={index} 
              className="relative w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Highlight Badge */}
              {plan.cardHighlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {plan.cardHighlight}
                </div>
              )}

              <div className="p-6 flex flex-col">
                {/* Plan Type */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  {plan.planType}
                </h2>

                {/* Price */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  <IndianRupee className="w-5 h-5" />
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.timeFrame}</span>
                </div>

                {/* Description */}
                <p className="text-center text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Button */}
                <button 
                  className={`${plan.buttonColor} w-full py-3 px-4 rounded-lg 
                    ${plan.buttonColor === 'bg-white' ? 'border-2 border-gray-200 text-gray-800' : 'text-white'} 
                    font-semibold hover:opacity-90 transition-opacity`}
                >
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="mt-6">
                  {plan.feature.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 mb-3">
                      <CheckCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PluginPage;