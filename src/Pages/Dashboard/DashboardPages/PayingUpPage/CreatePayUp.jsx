import {MinusCircle} from "lucide-react";
import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import {BsPlusSquareDotted} from "react-icons/bs";
import {IoCloseCircleOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const CreatePayUp = () => {
  const [priceType, setPriceType] = useState("fixed");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: " ",
    description: "",
    paymentDetails: {
      currencySymbol: "IndianRupee",
      totalAmount: 0,
      paymentLink: "",
      paymentEnabled: true,
      paymentButtonTitle: "",
      ownerEmail: "",
      ownerPhone: "",
    },
    Category: {
      title: "Category",
      isActive: false,
      categoryMetaData: [""],
    },
    testimonials: {
      title: "Testimonials",
      isActive: false,
      testimonialsMetaData: [],
    },
    faQ: {
      title: "Frequently Asked Questions",
      isActive: false,
      faQMetaData: [],
    },
    refundPolicies: {
      title: "Refund Policies",
      isActive: false,
      refundPoliciesMetaData: [],
    },
    termAndConditions: {
      title: "Terms & Conditions",
      isActive: false,
      termAndConditionsMetaData: [],
    },
    coverImage: {
      title: "Cover Image",
      isActive: false,
      value: "",
    },
    file: {
      title: "File Upload",
      isActive: false,
      value: "",
    },
  });

  const handleInputChange = (e, section, field) => {
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (section === "paymentDetails" && field === "totalAmount" && priceType === "variable") {
      value = value ? `${value}+` : value; // Append '+' if value exists
    }

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

  const handleOverviewChange = (htmlContent) => {
    setFormData((prevData) => ({
      ...prevData,
      description: htmlContent,
    }));
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

  const handleProfilePicUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => {
          const updatedTestimonials = [...prevData.testimonials.testimonialsMetaData];
          if (!updatedTestimonials[index]) updatedTestimonials[index] = {}; // Ensure the object exists
          updatedTestimonials[index].profilePic = reader.result;
          return {
            ...prevData,
            testimonials: {
              ...prevData.testimonials,
              testimonialsMetaData: updatedTestimonials,
            },
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaqChange = (e, index, field) => {
    const value = e.target.value;
    setFormData((prevData) => {
      const updatedFaqs = prevData.faQ.faQMetaData.map((faq, i) => (i === index ? {...faq, [field]: value} : faq));
      return {
        ...prevData,
        faQ: {
          ...prevData.faQ,
          faQMetaData: updatedFaqs,
        },
      };
    });
  };

  const handleToggleFaq = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      faQ: {
        ...prevData.faQ,
        isActive: e.target.checked,
      },
    }));
  };

  const handleAddFaq = () => {
    setFormData((prevData) => ({
      ...prevData,
      faQ: {
        ...prevData.faQ,
        faQMetaData: [...prevData.faQ.faQMetaData, {question: "", answer: ""}],
      },
    }));
  };

  const handleRemoveFaq = (index) => {
    setFormData((prevData) => {
      const updatedFaqs = prevData.faQ.faQMetaData.filter((_, i) => i !== index);
      return {
        ...prevData,
        faQ: {
          ...prevData.faQ,
          faQMetaData: updatedFaqs,
        },
      };
    });
  };

  const handleRatingChange = (e, index) => {
    const value = parseInt(e.target.value);
    setFormData((prevData) => {
      const updatedTestimonials = prevData.testimonials.testimonialsMetaData.map((testimonial, i) => (i === index ? {...testimonial, rating: value} : testimonial));
      return {
        ...prevData,
        testimonials: {
          ...prevData.testimonials,
          testimonialsMetaData: updatedTestimonials,
        },
      };
    });
  };

  const fakeApiCall = () => {
    console.log("Sending data to API...");
    setTimeout(() => {
      console.log("API response:", formData);
    }, 1000);
  };

  const consoleFormData = () => {
    fakeApiCall();
  };

  return (
    <div className="max-w-full min-h-screen bg-gray-200 flex  flex-col md:flex-row">
      <div className="flex items-center justify-center w-full">
        <div className="px-9  bg-gray-100 ">
          {/* Form Field */}
          <div className="flex py-6 px-5 border-b-2 w-full sticky bg-white top-0  z-10">
            <div className="flex gap-4 items-center">
              <IoCloseCircleOutline className="size-9" onClick={() => navigate("/dashboard/payingup")} />
              <div className="w-[2px] h-9 bg-gray-200"></div>
              <h2 className="font-poppins font-bold tracking-tight text-2xl text-gray-800">New PayUp page</h2>
            </div>
          </div>

          <form action="" className="flex flex-col gap-6 py-6">
            {/* For Title */}
            <div className="flex flex-col gap-2 ">
              <label htmlFor="title" className="font-poppins font-semibold text-md tracking-tight text-gray-800 flex gap-2 items-center">
                Checkout Title
              </label>
              <input
                type="text"
                onChange={(e) => handleInputChange(e, "formData", "title")}
                id="title"
                className="w-full  h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div className="flex gap-5 flex-col flex-wrap py-3">
                  {/* Price Type Selection */}
                  <div className="flex gap-4">
                    <a className={`px-4 py-2 font-poppins flex items-center rounded-lg ${priceType === "fixed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setPriceType("fixed")}>
                      Fixed Price
                    </a>
                    <a className={`px-4 py-2 font-poppins flex items-center rounded-lg ${priceType === "variable" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setPriceType("variable")}>
                      Variable Price
                    </a>
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
                      className="w-full  h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pay Now"
                    />
                  </div>

                  <div className="flex md:flex-row flex-col gap-4">
                    {/* Payment amount */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="totalAmount" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                        Amount
                      </label>
                      <input
                        type="number"
                        onChange={(e) => handleInputChange(e, "paymentDetails", "totalAmount")}
                        id="totalAmount"
                        className="w-[200px] text-[10px] max-w-md h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="200"
                      />
                    </div>

                    <div className="flex gap-4">
                      {/* Owner email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="ownerEmail" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                          Support Email
                        </label>
                        <input
                          type="email"
                          onChange={(e) => handleInputChange(e, "paymentDetails", "ownerEmail")}
                          id="ownerEmail"
                          className="w-[200px] text-[10px] h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Support email"
                        />
                      </div>
                      {/* Owner Phone number */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="ownerPhone" className="font-poppins font-normal text-sm tracking-tight text-gray-800 flex gap-2 items-center">
                          Support Phone Number
                        </label>
                        <input
                          type="text"
                          value={formData.paymentDetails.ownerPhone}
                          onChange={(e) => handleInputChange(e, "paymentDetails", "ownerPhone")}
                          id="ownerPhone"
                          className="w-[200px] text-[10px] h-12 rounded-lg text-gray-700 border-gray-300 border-2 px-4 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Support phone number"
                        />
                      </div>
                    </div>
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
              <ReactQuill
                value={formData.description} // Pass value prop to sync Quill editor with state
                onChange={handleOverviewChange} // Update the state on change
                theme="snow"
                className="quill-editor"
                modules={{
                  toolbar: [[{header: [1, 2, false]}], ["bold", "italic", "underline", "strike"], [{list: "ordered"}, {list: "bullet"}], ["link", "image"]],
                }}
              />
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
                          onChange={(e) => handleProfilePicUpload(e, index)}
                          id={`profilePic-${index}`}
                          className="w-full max-w-md h-12 text-gray-700 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex gap-9 items-center">
                          {testimonial.profilePic && <img src={testimonial.profilePic} alt="Profile" className="w-16 h-16 rounded-full mt-2" />}
                          <div className="flex flex-col ">
                            <label htmlFor={`rating-${index}`} className="font-poppins font-normal text-sm tracking-tight text-gray-800">
                              Rating
                            </label>
                            <select onChange={(e) => handleRatingChange(e, index)} value={testimonial.rating} className="w-[150px] py-2 px-1 rounded-lg h-12 border-gray-300 font-poppins text-sm tracking-tight shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
            {/* Enable FAQ Checkbox */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-poppins font-semibold text-md text-gray-800">Enable FAQs</label>
                <input type="checkbox" checked={formData.faQ.isActive} onChange={handleToggleFaq} />
              </div>
              {formData.faQ.isActive && (
                <div className="flex flex-col">
                  {/* FAQ Section in Form */}
                  <div className="flex flex-col gap-2">
                    {/* <h2 className="font-bold tracking-tight font-poppins">FAQs</h2> */}
                    {formData.faQ.faQMetaData.map((faq, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <input type="text" value={faq.question} onChange={(e) => handleFaqChange(e, index, "question")} className="w-full h-12 rounded-lg border-gray-300 border-2 px-4 text-sm shadow-sm" placeholder="FAQ Question" />
                        <textarea value={faq.answer} onChange={(e) => handleFaqChange(e, index, "answer")} className="w-full h-20 rounded-lg border-gray-300 border-2 px-4 text-sm shadow-sm" placeholder="FAQ Answer" />
                        <div className="flex justify-end">
                          <button type="button" onClick={() => handleRemoveFaq(index)} className="text-red-500 flex items-center gap-1 text-sm">
                            <MinusCircle /> Remove FAQ
                          </button>
                        </div>
                      </div>
                    ))}
                    <div>
                      <button type="button" onClick={handleAddFaq} className="bg-gray-300 font-poppins tracking-tight py-2 px-3 rounded-lg text-black cursor-pointer text-sm flex items-center gap-3">
                        <BsPlusSquareDotted /> Add FAQ
                      </button>
                    </div>
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

            <div>
              {/* File Upload Section */}
              <div className="flex flex-col gap-4 p-6 border-2 border-gray-300 rounded-lg">
                <h3 className="text-lg font-poppins font-semibold text-gray-800">Upload your Digital Files</h3>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 bg-gray-50 relative">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-pink-100 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="pink" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-poppins">Browse files from your system</p>
                  </div>
                  <input
                    type="file"
                    onChange={(e) => {
                      const files = e.target.files;
                      let fileNames = "";
                      if (files && files.length > 0) {
                        fileNames = Array.from(files)
                          .map((file) => file.name)
                          .join(", ");
                      }
                      handleInputChange({target: {value: fileNames}}, "file", "value");
                    }}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    multiple
                  />
                </div>
                {formData.file.value && (
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-700 font-poppins text-sm">Uploaded Files:</p>
                    <p className="text-gray-800 font-poppins text-sm">{formData.file.value}</p>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <input type="text" placeholder="Add link to your files" className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 font-poppins text-sm text-gray-700" />
                  <button type="button" className="bg-black text-white px-4 py-2 rounded-lg font-poppins text-sm">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Console Form Data Button */}
            <div className="mt-4 flex items-center justify-center">
              <button type="button" onClick={consoleFormData} className="bg-blue-500 text-white font-poppins tracking-tight py-2 px-4 rounded-lg cursor-pointer text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Preview Section */}
    </div>
  );
};

export default CreatePayUp;
