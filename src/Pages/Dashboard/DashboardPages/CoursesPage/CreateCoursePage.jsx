/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  ArrowLeftCircleIcon,
  MinusCircle,
  Pencil,
  PlusCircle,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { toast } from "react-toastify";

const fakeApiCall = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("API Response: Course created successfully with data:", data);
      resolve({ success: true, message: "Course created successfully!" });
    }, 1000);
  });
};

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const languages = ["English", "Spanish", "French", "Hindi"];
  const validity = ["Monthly","Half-Yearly","Yearly","Lifetime"];
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    validity: "",
    aboutThisCourse: {
      description: "",
      features: [""],
    },
    testimonials: {
      title: "Testimonials",
      isActive: false,
      testimonialsMetaData: [
        { name: "", profilePic: null, description: "", rating: "" },
      ],
    },
    courseBenefits: {
      title: "Course Benefits",
      benefitsActive: false,
      benefitsMetaData: [{ emoji: "", title: "" }],
    },
    faQ: {
      title: "Frequently Asked Questions",
      isActive: false,
      faQMetaData: [
        {
          question: "",
          answer: "",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      isActive: false,
      imageMetaData: [
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
        { name: "", image: "" },
      ],
    },
    products: {
      title: "Products",
      isActive: false,
      productMetaData: [
        { name: "", price: "", productLink: "" },
        { name: "", price: "", productLink: "" },
      ],
    },
    language: {
      title: "Language",
      isActive: false,
      value: [],
    },
    coverImage: {
      value: null,
      isActive: false,
    },
    lessons: {
      isActive: false,
      lessonData: [
        {
          lessonName: "",
          videos: [""],
        },
      ],
    },
  });
  const [imagePreviews, setImagePreviews] = useState({});
  const [testimonialImagePreviews, setTestimonialImagePreviews] = useState({});
  const [videoPreviews, setVideoPreviews] = useState({});
  const [error, setError] = useState("");

  const handleAddFeature = () =>
    setFormData({
      ...formData,
      aboutThisCourse: {
        ...formData.aboutThisCourse,
        features: [...formData.aboutThisCourse.features, ""],
      },
    });

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...formData.aboutThisCourse.features];
    updatedFeatures[index] = value;
    setFormData({
      ...formData,
      aboutThisCourse: {
        ...formData.aboutThisCourse,
        features: updatedFeatures,
      },
    });
  };

  const handleRemoveFeature = (index) => {
    const updatedFeatures = [...formData.aboutThisCourse.features];
    updatedFeatures.splice(index, 1);
    setFormData({
      ...formData,
      aboutThisCourse: {
        ...formData.aboutThisCourse,
        features: updatedFeatures,
      },
    });
  };

  const handleAddTestimonial = () => {
    setFormData({
      ...formData,
      testimonials: {
        ...formData.testimonials,
        testimonialsMetaData: [
          ...formData.testimonials.testimonialsMetaData,
          { name: "", profilePic: null, description: "", rating: "" },
        ],
      },
    });
  };

  const handleRemoveTestimonial = (index) => {
    const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
    updatedTestimonials.splice(index, 1);
    setFormData({
      ...formData,
      testimonials: {
        ...formData.testimonials,
        testimonialsMetaData: updatedTestimonials,
      },
    });
  };

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...formData.testimonials.testimonialsMetaData];
    updatedTestimonials[index][field] = value;
    setFormData({
      ...formData,
      testimonials: {
        ...formData.testimonials,
        testimonialsMetaData: updatedTestimonials,
      },
    });
  };

  const handleAddBenefit = () => {
    setFormData({
      ...formData,
      courseBenefits: {
        ...formData.courseBenefits,
        benefitsMetaData: [
          ...formData.courseBenefits.benefitsMetaData,
          { emoji: "", title: "" },
        ],
      },
    });
  };

  const handleRemoveBenefit = (index) => {
    const updatedBenefits = [...formData.courseBenefits.benefitsMetaData];
    updatedBenefits.splice(index, 1);
    setFormData({
      ...formData,
      courseBenefits: {
        ...formData.courseBenefits,
        benefitsMetaData: updatedBenefits,
      },
    });
  };

  const handleBenefitChange = (index, field, value) => {
    const updatedBenefits = [...formData.courseBenefits.benefitsMetaData];
    updatedBenefits[index][field] = value;
    setFormData({
      ...formData,
      courseBenefits: {
        ...formData.courseBenefits,
        benefitsMetaData: updatedBenefits,
      },
    });
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...formData.gallery.imageMetaData];
      updatedImages[index].image = file;
      setFormData({
        ...formData,
        gallery: { ...formData.gallery, imageMetaData: updatedImages },
      });

      setImagePreviews({
        ...imagePreviews,
        [index]: URL.createObjectURL(file),
      });
    }
  };

  const handleTestimonialImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedTestimonials = [
        ...formData.testimonials.testimonialsMetaData,
      ];
      updatedTestimonials[index].profilePic = file;
      setFormData({
        ...formData,
        testimonials: {
          ...formData.testimonials,
          testimonialsMetaData: updatedTestimonials,
        },
      });
      setTestimonialImagePreviews({
        ...testimonialImagePreviews,
        [index]: URL.createObjectURL(file),
      });
    }
  };

  // const handleGalleryImageUpload = (index, event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const updatedImages = [...formData.gallery.imageMetaData];
  //     updatedImages[index].image = file;
  //     setFormData({
  //       ...formData,
  //       gallery: {...formData.gallery, imageMetaData: updatedImages},
  //     });

  //     setImagePreviews({
  //       ...imagePreviews,
  //       [index]: URL.createObjectURL(file),
  //     });
  //   }
  // };

  const handleAddFAQ = () => {
    setFormData({
      ...formData,
      faQ: {
        ...formData.faQ,
        faQMetaData: [
          ...formData.faQ.faQMetaData,
          { question: "", answer: "" },
        ],
      },
    });
  };

  const handleRemoveFAQ = (index) => {
    const updatedFAQs = [...formData.faQ.faQMetaData];
    updatedFAQs.splice(index, 1);
    setFormData({
      ...formData,
      faQ: { ...formData.faQ, faQMetaData: updatedFAQs },
    });
  };

  const handleFAQChange = (index, field, value) => {
    const updatedFAQs = [...formData.faQ.faQMetaData];
    updatedFAQs[index][field] = value;
    setFormData({
      ...formData,
      faQ: { ...formData.faQ, faQMetaData: updatedFAQs },
    });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.gallery.imageMetaData];
    updatedImages[index].image = null;
    setFormData({
      ...formData,
      gallery: { ...formData.gallery, imageMetaData: updatedImages },
    });

    const updatedPreviews = { ...imagePreviews };
    delete updatedPreviews[index];
    setImagePreviews(updatedPreviews);
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: {
        ...formData.products,
        productMetaData: [
          ...formData.products.productMetaData,
          { name: "", price: "", productLink: "" },
        ],
      },
    });
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...formData.products.productMetaData];
    updatedProducts.splice(index, 1);
    setFormData({
      ...formData,
      products: { ...formData.products, productMetaData: updatedProducts },
    });
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...formData.products.productMetaData];
    updatedProducts[index][field] = value;
    setFormData({
      ...formData,
      products: { ...formData.products, productMetaData: updatedProducts },
    });
  };
  const handleCoverImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, coverImage: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleVideoPreview = (videoSrc) => {
    setModalVideo(videoSrc);
  };

  const handleCloseModal = () => {
    setModalVideo(null);
  };

  const handleAddLesson = () => {
    setFormData((prevState) => ({
      ...prevState,
      lessons: {
        ...prevState.lessons,
        lessonData: [
          ...prevState.lessons.lessonData,
          { lessonName: "", videos: [""] },
        ],
      },
    }));
  };

  const handleAddVideo = (lessonIndex) => {
    setFormData((prevState) => {
      const updatedLessons = [...prevState.lessons.lessonData];
      updatedLessons[lessonIndex].videos.push("");
      return {
        ...prevState,
        lessons: { ...prevState.lessons, lessonData: updatedLessons },
      };
    });
  };

  const handleVideoUpload = (lessonIndex, videoIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevState) => {
        const updatedLessons = [...prevState.lessons.lessonData];
        updatedLessons[lessonIndex].videos[videoIndex] = file;
        return {
          ...prevState,
          lessons: { ...prevState.lessons, lessonData: updatedLessons },
        };
      });

      setVideoPreviews((prevPreviews) => ({
        ...prevPreviews,
        [`${lessonIndex}-${videoIndex}`]: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveLesson = (lessonIndex) => {
    setFormData((prevState) => {
      const updatedLessons = [...prevState.lessons.lessonData];
      updatedLessons.splice(lessonIndex, 1);
      return {
        ...prevState,
        lessons: { ...prevState.lessons, lessonData: updatedLessons },
      };
    });

    setVideoPreviews((prevPreviews) => {
      const updatedPreviews = { ...prevPreviews };
      Object.keys(updatedPreviews).forEach((key) => {
        if (key.startsWith(`${lessonIndex}-`)) delete updatedPreviews[key];
      });
      return updatedPreviews;
    });
  };

  const handleRemoveVideo = (lessonIndex, videoIndex) => {
    setFormData((prevState) => {
      const updatedLessons = [...prevState.lessons.lessonData];
      updatedLessons[lessonIndex].videos.splice(videoIndex, 1);
      return {
        ...prevState,
        lessons: { ...prevState.lessons, lessonData: updatedLessons },
      };
    });

    setVideoPreviews((prevPreviews) => {
      const updatedPreviews = { ...prevPreviews };
      delete updatedPreviews[`${lessonIndex}-${videoIndex}`];
      return updatedPreviews;
    });
  };

  const handleLanguageChange = (index, value) => {
    const updatedLanguages = [...formData.language.value];
    updatedLanguages[index] = value;
    setFormData({
      ...formData,
      language: {
        ...formData.language,
        value: updatedLanguages,
      },
    });
  };

  const handleAddLanguage = () => {
    setFormData((prevData) => ({
      ...prevData,
      language: {
        ...prevData.language,
        value: [...prevData.language.value, ""],
      },
    }));
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...formData.language.value];
    updatedLanguages.splice(index, 1);
    setFormData({
      ...formData,
      language: {
        ...formData.language,
        value: updatedLanguages,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.price ||
      !formData.aboutThisCourse.description
    ) {
      setError("Please fill in the title, price, and course description.");
      return;
    }
    const response = await fakeApiCall(formData);
    if (response.success) {
      toast.success(response.message);
    }
  };

  return (
    <>
      <div className="min-h-screen max-w-full">
        {/* Left Side */}

        {/* Video Modal */}
        {modalVideo && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white p-5 rounded-lg  w-11/12 max-w-3xl relative">
              <button
                className="absolute top-1 right-3 text-white bg-red-500 rounded-full cursor-pointer"
                onClick={handleCloseModal}
              >
                <XCircle size={30} />
              </button>
              <video
                src={modalVideo}
                controls
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        )}

        {/* Main */}
        <div className="flex flex-col pt-8 px-4 sm:px-6 lg:px-8 w-full ">
          <div className="flex flex-col gap-3 w-full md:items-center justify-center">
            <h1 className="font-bold text-3xl font-poppins tracking-tight flex items-center gap-3">
              <ArrowLeftCircleIcon
                className="size-8 cursor-pointer "
                onClick={() => navigate("/dashboard/courses")}
              />
              Add New Course
            </h1>
            <p className="font-poppins text-md font-normal tracking-tight text-gray-700 px-10 pr-20">
              Create a new course to share knowledge, engage students, and
              expand learning opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="px-10 mt-10 flex md:flex-row flex-col gap-4">
              {/* Course Title */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                  Course Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className=" w-[400px] h-11 border px-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                  placeholder="Enter course title"
                  required
                />
              </div>
              {/* Course Price */}
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                  Price
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-[400px] h-11 border px-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                  placeholder="Enter course price"
                  required
                />
              </div>
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Cover Image Toggle */}
            <div className="px-10 mt-3">
              <div className="flex justify-between">
                <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                  Enable Cover Image
                </label>
                <input
                  type="checkbox"
                  checked={formData.coverImage.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      coverImage: {
                        ...formData.coverImage,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.coverImage.isActive && (
                <div>
                  <input
                    type="file"
                    onChange={handleCoverImageUpload}
                    className="w-full h-11 pt-2 border px-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Cover Preview"
                      className="mt-4 w-32 h-32 rounded-lg"
                    />
                  )}
                </div>
              )}
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Course Description */}
            <div className="px-10 mt-6">
              <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                Description
              </label>
              <textarea
                value={formData.aboutThisCourse.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    aboutThisCourse: {
                      ...formData.aboutThisCourse,
                      description: e.target.value,
                    },
                  })
                }
                className="w-full h-24 border px-2 py-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                placeholder="Describe your course"
                required
              ></textarea>
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Language Toggle */}
            <div className="px-10 mt-3">
              <div className="flex justify-between">
                <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                  Enable Language Selection
                </label>
                <input
                  type="checkbox"
                  checked={formData.language.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      language: {
                        ...formData.language,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.language.isActive && (
                <div className="flex flex-col gap-4 mt-4">
                  {formData.language.value.map((language, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <select
                        value={language}
                        onChange={(e) =>
                          handleLanguageChange(index, e.target.value)
                        }
                        className="w-full h-11 border px-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                      >
                        <option value="">Select Language</option>
                        {languages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveLanguage(index)}
                          className="text-red-500 hover:text-red-600"
                          aria-label={`Remove language ${index + 1}`}
                        >
                          <MinusCircle size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                  <div>
                    <button
                      type="button"
                      onClick={handleAddLanguage}
                      className="mt-1 mb-4 inline-flex items-center font-poppins cursor-pointer tracking-tight text-sm px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                    >
                      <PlusCircle size={16} className="mr-2" />
                      Add Language
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Lessons Toggle */}
            <div className="px-10 mt-3">
              <div className="flex justify-between">
                <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                  Enable Syllabus
                </label>
                <input
                  type="checkbox"
                  checked={formData.lessons.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lessons: {
                        ...formData.lessons,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.lessons.isActive && (
                <div>
                  {formData.lessons.lessonData.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-3 mt-3"
                    >
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Title of Video"
                          value={lesson.lessonName}
                          onChange={(e) => {
                            const updatedLessons = [
                              ...formData.lessons.lessonData,
                            ];
                            updatedLessons[lessonIndex].lessonName =
                              e.target.value;
                            setFormData({
                              ...formData,
                              lessons: {
                                ...formData.lessons,
                                lessonData: updatedLessons,
                              },
                            });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveLesson(lessonIndex)}
                          className="ml-2 text-red-500 hover:text-red-600"
                        >
                          <MinusCircle size={18} />
                        </button>
                      </div>
                      {lesson.videos.map((video, videoIndex) => (
                        <div
                          key={videoIndex}
                          className="flex items-center w-full"
                        >
                          <input
                            type="file"
                            accept="video/*"
                            onChange={(e) =>
                              handleVideoUpload(lessonIndex, videoIndex, e)
                            }
                            className="w-full flex items-center px-4 py-2 border border-gray-300 rounded-lg"
                          />
                          {videoPreviews[`${lessonIndex}-${videoIndex}`] && (
                            <button
                              type="button"
                              onClick={() =>
                                handleVideoPreview(
                                  videoPreviews[`${lessonIndex}-${videoIndex}`]
                                )
                              }
                              className="ml-2 font-poppins tracking-tight"
                            >
                              View
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveVideo(lessonIndex, videoIndex)
                            }
                            className="ml-2 text-red-500 hover:text-red-600"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddVideo(lessonIndex)}
                        className="mt-2 px-4 flex items-center py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                      >
                        <PlusCircle size={16} className="mr-2" />
                        Add Video
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddLesson}
                    className="flex items-center mt-4 text-sm font-poppins tracking-tight cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                  >
                    <PlusCircle size={16} className="mr-2" />
                    Add Lesson
                  </button>
                </div>
              )}
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            <div className="px-10 mt-6">
              <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">
                Validity
              </label>
              <select
                value={formData.validity}
                onChange={(e) =>
                  setFormData({ ...formData, validity: e.target.value })
                }
                className="w-full h-11 border px-2 font-poppins tracking-tight text-black text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
              >
                <option value="">Select validity</option>
                {validity.map((validityOption) => (
                  <option key={validityOption} value={validityOption}>
                    {validityOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Features */}
            <div className="px-10 mt-6">
              <label className="block text-md font-poppins tracking-tight font-medium text-gray-700 mb-2">
                Features
              </label>
              <div className="space-y-3">
                {formData.aboutThisCourse.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      placeholder={`Feature ${index + 1}`}
                      className="w-full h-11 border px-2 font-poppins tracking-tight  text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(index)}
                        className="text-red-500 hover:text-red-600"
                        aria-label={`Remove feature ${index + 1}`}
                      >
                        <MinusCircle size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddFeature}
                className="mt-4 inline-flex items-center font-poppins cursor-pointer tracking-tight text-sm px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
              >
                <PlusCircle size={16} className="mr-2" />
                Add Feature
              </button>
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Testimonials*/}
            <div className="px-10 mt-6">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium font-poppins text-gray-700">
                  Enable Testimonials
                </label>
                <input
                  type="checkbox"
                  checked={formData.testimonials.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      testimonials: {
                        ...formData.testimonials,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.testimonials.isActive && (
                <div className="mt-4 space-y-4">
                  {formData.testimonials.testimonialsMetaData.map(
                    (testimonial, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-3"
                      >
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="Name"
                            value={testimonial.name}
                            onChange={(e) =>
                              handleTestimonialChange(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveTestimonial(index)}
                            className="ml-2 text-red-500 hover:text-red-600"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                        <textarea
                          placeholder="Description"
                          value={testimonial.description}
                          onChange={(e) =>
                            handleTestimonialChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        ></textarea>
                        <input
                          type="file"
                          onChange={(e) =>
                            handleTestimonialImageUpload(index, e)
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        {testimonialImagePreviews[index] && (
                          <img
                            src={testimonialImagePreviews[index]}
                            alt={`Testimonial ${index}`}
                            className="w-16 h-16 rounded-full mt-2"
                          />
                        )}
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                  >
                    <PlusCircle size={16} className="mr-2" /> Add Testimonial
                  </button>
                </div>
              )}
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Course Benefits */}
            {/* <div className="mt-3 px-10">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium text-gray-700 font-poppins tracking-tight ">
                  Enable Course Benefits
                </label>
                <input
                  type="checkbox"
                  checked={formData.courseBenefits.benefitsActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseBenefits: {
                        ...formData.courseBenefits,
                        benefitsActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 text-indigo-500 rounded focus:ring-indigo-300 cursor-pointer"
                />
              </div>
              {formData.courseBenefits.benefitsActive && (
                <div className="mt-4 space-y-4">
                  {formData.courseBenefits.benefitsMetaData.map(
                    (benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="text"
                          placeholder="Emoji"
                          value={benefit.emoji}
                          onChange={(e) =>
                            handleBenefitChange(index, "emoji", e.target.value)
                          }
                          className="w-1/6  h-11 border px-2 font-poppins tracking-tight  text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                        />
                        <input
                          type="text"
                          placeholder="Benefit Title"
                          value={benefit.title}
                          onChange={(e) =>
                            handleBenefitChange(index, "title", e.target.value)
                          }
                          className="w-5/6  h-11 border px-2 font-poppins tracking-tight  text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveBenefit(index)}
                          className="text-red-500 hover:text-red-600 cursor-pointer"
                        >
                          <MinusCircle size={18} />
                        </button>
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    onClick={handleAddBenefit}
                    className="inline-flex items-center text-sm font-poppins tracking-tight cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                  >
                    <PlusCircle size={16} className="mr-2" />
                    Add Benefit
                  </button>
                </div>
              )}
            </div> */}

            <div className="mt-3 px-10">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium text-gray-700 font-poppins tracking-tight ">
                  Enable Course Benefits
                </label>
                <input
                  type="checkbox"
                  checked={formData.courseBenefits.benefitsActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseBenefits: {
                        ...formData.courseBenefits,
                        benefitsActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 text-indigo-500 rounded focus:ring-indigo-300 cursor-pointer"
                />
              </div>
              {formData.courseBenefits.benefitsActive && (
                <div className="mt-4 space-y-4">
                  {formData.courseBenefits.benefitsMetaData.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {/* Emoji Picker Button */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setEmojiPickerOpen(isEmojiPickerOpen === index ? null : index)
                          }
                          className="w-10 h-10 border px-2 font-poppins tracking-tight text-center text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                        >
                          {benefit.emoji || ""}
                        </button>
                        {isEmojiPickerOpen === index && (
                          <div className="absolute z-10">
                            <EmojiPicker
                              onEmojiClick={(emoji) => {
                                handleBenefitChange(index, "emoji", emoji.emoji);
                                setEmojiPickerOpen(null);
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Benefit Title Input */}
                      <input
                        type="text"
                        placeholder="Benefit Title"
                        value={benefit.title}
                        onChange={(e) =>
                          handleBenefitChange(index, "title", e.target.value)
                        }
                        className="w-5/6 h-11 border px-2 font-poppins tracking-tight text-sm border-gray-400 rounded-lg focus:ring-gray-200 bg-gray-200"
                      />

                      {/* Remove Benefit Button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveBenefit(index)}
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                      >
                        <MinusCircle size={18} />
                      </button>
                    </div>
                  ))}

                  {/* Add Benefit Button */}
                  <button
                    type="button"
                    onClick={handleAddBenefit}
                    className="inline-flex items-center text-sm font-poppins tracking-tight cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                  >
                    <PlusCircle size={16} className="mr-2" />
                    Add Benefit
                  </button>
                </div>
              )}
            </div>
            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Gallery Section */}
            <div className="mt-3 px-10">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium text-gray-700 font-poppins tracking-tight">
                  Enable Gallery
                </label>
                <input
                  type="checkbox"
                  checked={formData.gallery.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gallery: {
                        ...formData.gallery,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.gallery.isActive && (
                <div className="mt-3">
                  <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
                    {formData.gallery.imageMetaData.map((imageData, index) => (
                      <div
                        key={index}
                        className="relative w-32 h-32 border rounded-lg bg-gray-100 flex items-center justify-center"
                      >
                        {imagePreviews[index] ? (
                          <img
                            src={imagePreviews[index]}
                            alt={`Gallery ${index}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-gray-500">Placeholder</span>
                        )}
                        <label className="absolute top-2 right-2 cursor-pointer">
                          {imagePreviews[index] ? (
                            <XCircle
                              size={20}
                              onClick={() => handleRemoveImage(index)}
                              className="text-red-500"
                            />
                          ) : (
                            <Pencil size={20} className="text-gray-600" />
                          )}
                          <input
                            type="file"
                            onChange={(e) => handleImageUpload(index, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Products Section */}
            <div className="mt-3 px-10">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium text-gray-700 font-poppins tracking-tight">
                  Enable Products
                </label>
                <input
                  type="checkbox"
                  checked={formData.products.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      products: {
                        ...formData.products,
                        isActive: e.target.checked,
                      },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.products.isActive && (
                <div className="mt-3">
                  <div className="space-y-4">
                    {formData.products.productMetaData.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Product Name"
                            value={product.name}
                            onChange={(e) =>
                              handleProductChange(index, "name", e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveProduct(index)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="Product Price"
                          value={product.price}
                          onChange={(e) =>
                            handleProductChange(index, "price", e.target.value)
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                          type="text"
                          placeholder="Product Link"
                          value={product.productLink}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "productLink",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="mt-4 inline-flex items-center font-poppins cursor-pointer tracking-tight text-sm px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                    >
                      <PlusCircle size={16} className="mr-2" />
                      Add Product
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* FAQ Section */}
            <div className="w-full mt-6 px-10">
              <div className="flex items-center justify-between">
                <label className="text-md font-medium text-gray-700 font-poppins tracking-tight">
                  Enable FAQ
                </label>
                <input
                  type="checkbox"
                  checked={formData.faQ.isActive}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      faQ: { ...formData.faQ, isActive: e.target.checked },
                    })
                  }
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>
              {formData.faQ.isActive && (
                <div className="mt-3">
                  {/* <label className="block text-md font-medium text-gray-700 mb-2 font-poppins tracking-tight">Frequently Asked Questions</label> */}
                  {formData.faQ.faQMetaData.map((faq, index) => (
                    <div
                      key={index}
                      className="  mb-4 p-4 bg-gray-100 rounded-lg shadow-sm space-y-2"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex w-full gap-3 ">
                          <input
                            type="text"
                            placeholder="Enter question"
                            value={faq.question}
                            onChange={(e) =>
                              handleFAQChange(index, "question", e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveFAQ(index)}
                            className="text-red-500 hover:text-red-600 text-left"
                          >
                            <MinusCircle size={18} />
                          </button>
                        </div>
                        <textarea
                          placeholder="Enter answer"
                          value={faq.answer}
                          onChange={(e) =>
                            handleFAQChange(index, "answer", e.target.value)
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        ></textarea>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddFAQ}
                    className="inline-flex items-center mt-2 text-sm font-poppins tracking-tight cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow-sm hover:bg-gray-200"
                  >
                    <PlusCircle size={16} className="mr-2" />
                    Add More Question & Answer
                  </button>
                </div>
              )}
            </div>
            <div className="my-8 px-10">
              <hr className="text-black" />
            </div>

            {/* Button */}
            <div>
              <div className="my-8  text-center px-10">
                <span>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-orange-600 text-white  text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Course
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        {/* Based */}
      </div>
    </>
  );
};

export default NewCoursePage;
