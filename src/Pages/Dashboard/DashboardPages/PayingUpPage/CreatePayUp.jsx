import {MinusCircle} from "lucide-react";
import {useState} from "react";
import {BsPlusSquareDotted} from "react-icons/bs";
import {FaDesktop, FaMobileAlt} from "react-icons/fa";
import {IoCloseCircleOutline} from "react-icons/io5";
import Pattern from "../../../../assets/pattern.png";

const CreatePayUp = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [formData, setFormData] = useState({
    title: " ",
    paymentDetails: {
      currencySymbol: "IndianRupee",
      totalAmount: 100,
      paymentLink: "https://example.com/payment-link",
      paymentEnabled: true,
      paymentButtonTitle: "Pay Now",
      ownerEmail: "owner@example.com",
      ownerPhone: "9876543210",
    },
    Category: {
      title: "Category",
      isActive: true,
      categoryMetaData: [""],
    },
    description: ["In this section, your goal is to motivate potential students to purchase the course. What valuable knowledge will they gain? What opportunities will they miss if they dont enroll? Why is now the perfect time to sign up?"],
    testimonials: {
      title: "Testimonials",
      isActive: true,
      testimonialsMetaData: [
        {
          name: "John Doe",
          profilePic: "",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris eget nunc faucibus consectetur.",
          rating: 5,
        },
      ],
    },
    faQ: {
      title: "Frequently Asked Questions",
      isActive: true,
      faQMetaData: [
        {
          question: "What is the course about?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris eget nunc faucibus consectetur.",
        },
      ],
    },
    refundPolicies: {
      title: "Refund Policies",
      isActive: true,
      refundPoliciesMetaData: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris eget nunc faucibus consectetur."],
    },
    termAndConditions: {
      title: "Terms & Conditions",
      isActive: true,
      termAndConditionsMetaData: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris eget nunc faucibus consectetur."],
    },
    coverImage: {
      title: "Cover Image",
      isActive: false,
      value: "https://dowellfileuploader.uxlivinglab.online/hr/logo-2-min-min.png",
    },
  });

  // Toggle view function
  const toggleView = () => {
    setIsMobileView((prev) => !prev);
  };

  const handleInputChange = (e, section, field) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (section === "formData") {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      }));
    }
  };

  const handleAddField = (section, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: [...prevData[section][key], ""],
      },
    }));
  };

  const handleRemoveField = (section, key, index) => {
    setFormData((prevData) => {
      const updatedArray = [...prevData[section][key]];
      updatedArray.splice(index, 1);
      return {
        ...prevData,
        [section]: {
          ...prevData[section],
          [key]: updatedArray,
        },
      };
    });
  };
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Use FileReader to generate a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          coverImage: {
            ...prevData.coverImage,
            value: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const consoleFormData = () => {
    console.log(formData);
  };

  return (
    <div className="max-w-full min-h-screen bg-white flex">
      <div className="w-1/2 overflow-y-auto h-screen">
        {/* Form Field */}
        {/* Checkout Navbar */}
        <div className="flex py-6 px-5 border-b-gray-200 border-b-2 w-full sticky top-0 bg-white z-10">
          <div className="flex gap-4 items-center">
            <IoCloseCircleOutline className="size-9" />
            <div className="w-[2px] h-9 bg-gray-200"></div>
            <h2 className="font-poppins font-bold tracking-tight text-2xl text-gray-800">New PayUp page</h2>
          </div>
        </div>

        <div className="px-9 py-5 bg-gray-100">
          <form action="" className="flex flex-col gap-6">
            {/* For Title */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex gap-2 items-center">
                Checkout Title
              </label>
              <input
                type="text"
                onChange={(e) => handleInputChange(e, "formData", "title")}
                id="title"
                className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Welcome to my cooking course"
              />
            </div>

            {/* Payment */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="paymentEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Payment
                </label>
                <input type="checkbox" checked={formData.paymentDetails.paymentEnabled} onChange={(e) => handleInputChange(e, "paymentDetails", "paymentEnabled")} />
              </div>
              {formData.paymentDetails.paymentEnabled && (
                <div className="flex gap-3 flex-wrap py-3">
                  {/* Currency */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="currencySymbol" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                      Currency
                    </label>
                    <select className="w-[150px] py-2 px-1 rounded-lg h-12 border-gray-300 border-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => handleInputChange(e, "paymentDetails", "currencySymbol")}>
                      <option value="INR">Indian Rupees</option>
                      <option value="USD">USD</option>
                      <option value="GBP">Pounds</option>
                    </select>
                  </div>
                  {/* Payment amount */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="totalAmount" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                      Amount
                    </label>
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, "paymentDetails", "totalAmount")}
                      id="totalAmount"
                      className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="200"
                    />
                  </div>
                  {/* Payment Button */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="paymentButtonTitle" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                      Payment Button Title
                    </label>
                    <input
                      type="text"
                      onChange={(e) => handleInputChange(e, "paymentDetails", "paymentButtonTitle")}
                      id="paymentButtonTitle"
                      className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pay Now"
                    />
                  </div>
                  {/* Owner email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ownerEmail" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                      Owner Email
                    </label>
                    <input
                      type="email"
                      onChange={(e) => handleInputChange(e, "paymentDetails", "ownerEmail")}
                      id="ownerEmail"
                      className="w-[300px] h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Owner email"
                    />
                  </div>
                  {/* Owner Phone number */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ownerPhone" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                      Owner Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.paymentDetails.ownerPhone}
                      onChange={(e) => handleInputChange(e, "paymentDetails", "ownerPhone")}
                      id="ownerPhone"
                      className="w-[300px] h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Owner phone number"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="categoryEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Category
                </label>
                <input type="checkbox" checked={formData.Category.isActive} onChange={(e) => handleInputChange(e, "Category", "isActive")} />
              </div>
              {formData.Category.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  {formData.Category.categoryMetaData.map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        onChange={(e) => {
                          const updatedCategories = [...formData.Category.categoryMetaData];
                          updatedCategories[index] = e.target.value;
                          setFormData((prevData) => ({
                            ...prevData,
                            Category: {
                              ...prevData.Category,
                              categoryMetaData: updatedCategories,
                            },
                          }));
                        }}
                        className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Category"
                      />
                      <MinusCircle className="text-red-500 cursor-pointer size-5" onClick={() => handleRemoveField("Category", "categoryMetaData", index)} />
                    </div>
                  ))}
                  <div className="mt-1">
                    <button type="button" className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3" onClick={() => handleAddField("Category", "categoryMetaData")}>
                      <BsPlusSquareDotted /> Add Category
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="flex flex-col gap-2">
              <label htmlFor="overview" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                Overview
              </label>
              {formData.description.map((desc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <textarea
                    onChange={(e) => {
                      const updatedDescription = [...formData.description];
                      updatedDescription[index] = e.target.value;
                      setFormData((prevData) => ({
                        ...prevData,
                        description: updatedDescription,
                      }));
                    }}
                    id="overview"
                    className="w-full h-20 rounded-lg text-gray-700 border-gray-300 border-2 px-4 py-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Overview of the content"
                  />
                </div>
              ))}
              <div className="mt-1"></div>
            </div>

            {/* Testimonials */}
            {/* Testimonials */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="testimonialsEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Testimonials
                </label>
                <input type="checkbox" checked={formData.testimonials.isActive} onChange={(e) => handleInputChange(e, "testimonials", "isActive")} />
              </div>
              {formData.testimonials.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  {formData.testimonials.testimonialsMetaData.map((testimonial, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <input
                        type="text"
                        onChange={(e) => {
                          const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
                          updatedTestimonials[index].name = e.target.value;
                          setFormData((prevData) => ({
                            ...prevData,
                            testimonials: {
                              ...prevData.testimonials,
                              testimonialsMetaData: updatedTestimonials,
                            },
                          }));
                        }}
                        className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                      />
                      <div className="flex gap-4 items-center">
                        <textarea
                          onChange={(e) => {
                            const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
                            updatedTestimonials[index].description = e.target.value;
                            setFormData((prevData) => ({
                              ...prevData,
                              testimonials: {
                                ...prevData.testimonials,
                                testimonialsMetaData: updatedTestimonials,
                              },
                            }));
                          }}
                          className="w-full h-20 rounded-lg text-gray-700 border-gray-300 border-2 px-4 py-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Testimonial Description"
                        />
                        <MinusCircle className="text-red-500 cursor-pointer size-5" onClick={() => handleRemoveField("testimonials", "testimonialsMetaData", index)} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor={`profilePic-${index}`} className="font-poppins font-normal text-sm tracking-tight text-gray-800">
                          Upload Profile Picture
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
                                updatedTestimonials[index].profilePic = reader.result;
                                setFormData((prevData) => ({
                                  ...prevData,
                                  testimonials: {
                                    ...prevData.testimonials,
                                    testimonialsMetaData: updatedTestimonials,
                                  },
                                }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          id={`profilePic-${index}`}
                          className="w-full max-w-md h-12 text-gray-700 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex gap-9 items-center">
                          {testimonial.profilePic && <img src={testimonial.profilePic} alt="Profile" className="w-16 h-16 rounded-full mt-2" />}
                          <div className="flex flex-col ">
                            <label htmlFor={`rating-${index}`} className="font-poppins font-normal text-sm tracking-tight text-gray-800">
                              Rating
                            </label>
                            <select
                              onChange={(e) => {
                                const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
                                updatedTestimonials[index].rating = parseInt(e.target.value);
                                setFormData((prevData) => ({
                                  ...prevData,
                                  testimonials: {
                                    ...prevData.testimonials,
                                    testimonialsMetaData: updatedTestimonials,
                                  },
                                }));
                              }}
                              value={testimonial.rating}
                              className="w-[150px] py-2 px-1 rounded-lg h-12 border-gray-300  font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id={`rating-${index}`}
                            >
                              <option value={1}>1 Star</option>
                              <option value={2}>2 Stars</option>
                              <option value={3}>3 Stars</option>
                              <option value={4}>4 Stars</option>
                              <option value={5}>5 Stars</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-1">
                    <button type="button" className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3" onClick={() => handleAddField("testimonials", "testimonialsMetaData")}>
                      <BsPlusSquareDotted /> Add Testimonial
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* FAQs */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="faQEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable FAQs
                </label>
                <input type="checkbox" checked={formData.faQ.isActive} onChange={(e) => handleInputChange(e, "faQ", "isActive")} />
              </div>
              {formData.faQ.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  {formData.faQ.faQMetaData.map((faq, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <input
                        type="text"
                        onChange={(e) => {
                          const updatedFAQs = [...formData.faQ.faQMetaData];
                          updatedFAQs[index].question = e.target.value;
                          setFormData((prevData) => ({
                            ...prevData,
                            faQ: {
                              ...prevData.faQ,
                              faQMetaData: updatedFAQs,
                            },
                          }));
                        }}
                        className="w-full max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="FAQ Question"
                      />
                      <div className="flex items-center gap-3">
                        <textarea
                          onChange={(e) => {
                            const updatedFAQs = [...formData.faQ.faQMetaData];
                            updatedFAQs[index].answer = e.target.value;
                            setFormData((prevData) => ({
                              ...prevData,
                              faQ: {
                                ...prevData.faQ,
                                faQMetaData: updatedFAQs,
                              },
                            }));
                          }}
                          className="w-full h-20 rounded-lg text-gray-700 border-gray-300 border-2 px-4 py-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="FAQ Answer"
                        />
                        <MinusCircle className="text-red-500 cursor-pointer size-5" onClick={() => handleRemoveField("faQ", "faQMetaData", index)} />
                      </div>
                    </div>
                  ))}
                  <div className="mt-1">
                    <button type="button" className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3" onClick={() => handleAddField("faQ", "faQMetaData")}>
                      Add FAQ
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Refund Policies */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="refundPoliciesEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Refund Policies
                </label>
                <input type="checkbox" checked={formData.refundPolicies.isActive} onChange={(e) => handleInputChange(e, "refundPolicies", "isActive")} />
              </div>
              {formData.refundPolicies.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  {formData.refundPolicies.refundPoliciesMetaData.map((policy, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <textarea
                        onChange={(e) => {
                          const updatedPolicies = [...formData.refundPolicies.refundPoliciesMetaData];
                          updatedPolicies[index] = e.target.value;
                          setFormData((prevData) => ({
                            ...prevData,
                            refundPolicies: {
                              ...prevData.refundPolicies,
                              refundPoliciesMetaData: updatedPolicies,
                            },
                          }));
                        }}
                        className="w-full h-20 rounded-lg text-gray-700 border-gray-300 border-2 px-4 py-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Refund Policy"
                      />
                      <MinusCircle className="text-red-500 cursor-pointer size-5" onClick={() => handleRemoveField("refundPolicies", "refundPoliciesMetaData", index)} />
                    </div>
                  ))}
                  <div className="mt-1">
                    <button type="button" className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3" onClick={() => handleAddField("refundPolicies", "refundPoliciesMetaData")}>
                      Add Refund Policy
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="termAndConditionsEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Terms & Conditions
                </label>
                <input type="checkbox" checked={formData.termAndConditions.isActive} onChange={(e) => handleInputChange(e, "termAndConditions", "isActive")} />
              </div>
              {formData.termAndConditions.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  {formData.termAndConditions.termAndConditionsMetaData.map((term, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <textarea
                        onChange={(e) => {
                          const updatedTerms = [...formData.termAndConditions.termAndConditionsMetaData];
                          updatedTerms[index] = e.target.value;
                          setFormData((prevData) => ({
                            ...prevData,
                            termAndConditions: {
                              ...prevData.termAndConditions,
                              termAndConditionsMetaData: updatedTerms,
                            },
                          }));
                        }}
                        className="w-full h-20 rounded-lg text-gray-700 border-gray-300 border-2 px-4 py-2 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Term & Condition"
                      />
                      <MinusCircle className="text-red-500 cursor-pointer size-5" onClick={() => handleRemoveField("termAndConditions", "termAndConditionsMetaData", index)} />
                    </div>
                  ))}
                  <div className="mt-1">
                    <button type="button" className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3" onClick={() => handleAddField("termAndConditions", "termAndConditionsMetaData")}>
                      <BsPlusSquareDotted /> Add Term & Condition
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cover Image */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="coverImageEnabled" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex items-center gap-2">
                  Enable Cover Image
                </label>
                <input type="checkbox" checked={formData.coverImage.isActive} onChange={(e) => handleInputChange(e, "coverImage", "isActive")} />
              </div>
              {formData.coverImage.isActive && (
                <div className="flex flex-col gap-2 py-3">
                  <input type="file" accept="image/*" onChange={handleCoverImageChange} className="w-full max-w-md h-12 text-gray-700 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {formData.coverImage.value && <img src={formData.coverImage.value} alt="Cover" className="w-32 h-32 max-w-md rounded-lg shadow-md mt-3" />}
                </div>
              )}
            </div>

            {/* Console Form Data Button */}
            <div className="mt-4">
              <button type="button" onClick={consoleFormData} className="bg-blue-500 text-white font-poppins tracking-tight py-2 px-4 rounded-lg cursor-pointer text-sm">
                Console Form Data
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Preview Section */}
      <div
        className="w-1/2 min-h-screen sticky top-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(${Pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* View Toggle Button */}
        <div className="absolute top-4 right-4 flex items-center justify-center bg-gray-800 text-white rounded-full p-2 cursor-pointer z-2" onClick={toggleView}>
          {isMobileView ? <FaDesktop className="text-xl" /> : <FaMobileAlt className="text-xl" />}
        </div>

        {/* Mock Browser Preview */}
        <div className={`relative bg-white rounded-lg shadow-lg ${isMobileView ? "w-[60%] h-[90%]" : "w-[90%] h-[90%]"}`}>
          <div className="flex items-center bg-black p-2 rounded-t-lg justify-between">
            <div className="flex gap-2 ml-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="font-poppins text-sm ml-4 text-white px-8 rounded-full py-1 bg-gray-500">www.oneapp/create-paying-up</div>
            <div></div>
          </div>

          <div>
            <div className="bg-gradient-to-r from-orange-300 to-orange-600 ">
              <div className="flex items-center flex-col py-3">
                {/* Checkout Title */}
                <h2 className="text-[18px] font-bold text-white font-poppins ">{formData.title === " " ? "Paying Title" : formData.title}</h2>
                {/* Categories */}
                <div className="flex items-center gap-1 mt-2">
                  {formData.Category.categoryMetaData.map((category, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 text-[11px] font-poppins px-2 py-1 rounded-full">
                      {category === ""  ? "Categories" : category}
                    </span>
                  ))}
                </div>
                {/* Payment */}
                <div className="flex items-center gap-1 mt-3">
                  <button className="font-poppins text-[11px] px-3 py-1 rounded-full bg-black text-white flex gap-2">{formData.paymentDetails.paymentButtonTitle}<span> ₹ {formData.paymentDetails.totalAmount}</span></button>
                </div>
              </div>
            </div>
            <div className="mt-2 px-8 text-center">
              <h2 className="font-bold tracking-tight font-poppins">
                Overview
              </h2>
              <p className="font-poppins text-[12px] px-4 py-2">{formData.description === " " ? "Description" : formData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePayUp;
