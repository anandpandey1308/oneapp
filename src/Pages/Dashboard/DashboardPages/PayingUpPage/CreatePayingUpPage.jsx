import { useState } from "react";
import * as Icons from "lucide-react";
import { payingUpConfig } from "./payingUpConfig";
import oneApp from "../../../../assets/oneapp.jpeg";

const CreatePayingUpPage = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  const CurrencyIcon = Icons[payingUpConfig.paymentDetails.currencySymbol];

  const handlePayment = () => {
    window.location.href = payingUpConfig.paymentDetails.paymentLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div
          className={`h-[60vh] w-full relative ${
            payingUpConfig.coverImage.isActive
              ? "" // Use no additional classes if the image is active
              : "bg-gradient-to-b from-[#ADD8E6] to-[#FFD700]" // Apply gradient if image is inactive
          }`}
        >
          {payingUpConfig.coverImage.isActive && (
            <>
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={payingUpConfig.coverImage.value}
                alt="Course Cover"
                className="w-full h-full object-cover"
              />
            </>
          )}

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              {payingUpConfig.title}
            </h1>
            {payingUpConfig.Category.isActive && (
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {payingUpConfig.Category.categoryMetaData.map(
                  (category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  )
                )}
              </div>
            )}
            <button
              onClick={handlePayment}
              disabled={!payingUpConfig.paymentDetails.paymentEnabled}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex"
            >
              {payingUpConfig.paymentDetails.paymentButtonTitle}{" "}
              {CurrencyIcon && <CurrencyIcon className="w-5 h-5" />}
              <span>{payingUpConfig.paymentDetails.totalAmount}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Overview
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {payingUpConfig.description}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      {payingUpConfig.testimonials.isActive && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              {payingUpConfig.testimonials.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {payingUpConfig.testimonials.testimonialsMetaData.map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.profilePic || oneApp}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icons.Star
                              key={i}
                              className="w-4 h-4 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {payingUpConfig.faQ.isActive && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              {payingUpConfig.faQ.title}
            </h2>
            <div className="space-y-4">
              {payingUpConfig.faQ.faQMetaData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <Icons.ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all ${
                      openFaq === index ? "py-4" : "h-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Refund Policies */}
      {payingUpConfig.refundPolicies.isActive && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              {payingUpConfig.refundPolicies.title}
            </h2>
            <div className="space-y-6">
              {payingUpConfig.refundPolicies.refundPoliciesMetaData.map(
                (policy, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <p className="text-gray-600 text-center">{policy}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Terms & Conditions */}
      {payingUpConfig.termAndConditions.isActive && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              {payingUpConfig.termAndConditions.title}
            </h2>
            <div className="space-y-6">
              {payingUpConfig.termAndConditions.termAndConditionsMetaData.map(
                (term, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <p className="text-gray-600 text-center">{term}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
          <div className="flex justify-center gap-8">
            <a
              href={`mailto:${payingUpConfig.paymentDetails.ownerEmail}`}
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Icons.Mail className="w-5 h-5" />
              <span>{payingUpConfig.paymentDetails.ownerEmail}</span>
            </a>
            <a
              href={`tel:${payingUpConfig.paymentDetails.ownerPhone}`}
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Icons.Phone className="w-5 h-5" />
              <span>{payingUpConfig.paymentDetails.ownerPhone}</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatePayingUpPage;
