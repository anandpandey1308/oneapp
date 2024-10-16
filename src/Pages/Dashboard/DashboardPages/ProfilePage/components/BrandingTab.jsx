/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import UpdateUsernameModal from "../../../../../components/Modal/UpdateUsernameModal";
import AboutMeModal from "../../../../../components/Modal/AboutMeModal"
import { CiImageOn } from "react-icons/ci";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const BrandingTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState("manish");
  const [fullURL, setFullURL] = useState("oneapp.bio/manish");
  const [brandName, setBrandName] = useState("");
  const [isBrandNameChanged, setIsBrandNameChanged] = useState(false);
  const [logoImage, setLogoImage] = useState(null);
  const [faviconImage, setFaviconImage] = useState(null);
  const [prifileImage, setPrifileImage] = useState(null);
  const navigate = useNavigate()

  // About Me section states
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);
  const [isAboutMeChanged, setIsAboutMeChanged] = useState(false);

  const username = fullURL.split("/")[1];

  useEffect(() => {
    // Check if any of the About Me fields have changed
    if (name !== "" || title !== "" || bio !== "") {
      setIsAboutMeChanged(true);
    } else {
      setIsAboutMeChanged(false);
    }
  }, [name, title, bio]);

  const handleModalOpen = (value) => {
    setModalValue(value);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUsernameSave = (newUsername) => {
    setFullURL(`oneapp.bio/${newUsername}`);
    console.log("New username saved:", newUsername);
  };

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
    setIsBrandNameChanged(true);
  };

  const handleSave = () => {
    console.log("Brand name saved:", brandName);
    setIsBrandNameChanged(false);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setLogoImage(imageURL);
    }
  };

  const handleFaviconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFaviconImage(imageURL);
    }
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPrifileImage(imageURL);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditIconClick = () => {
    setIsAboutMeModalOpen(true);
  };

  const handleAboutMeModalClose = () => {
    setIsAboutMeModalOpen(false);
  };

  const handleSetupClick = () => {
    navigate("/dashboard/booking");
  };

  const handleAboutMeSave = () => {
    console.log("About Me info saved:", { name, title, bio });
    setIsAboutMeChanged(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Site Information Section */}
      <div className="shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4 bg-white">
        <h2 className="text-base md:text-lg font-semibold">Site Information</h2>
        <hr className="border-gray-100" />
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={fullURL}
            readOnly
            className="w-full p-2 rounded-full bg-gray-100 cursor-not-allowed focus:outline-none border border-gray-300"
          />
          <span className="text-xs md:text-sm">
            Your site/link-in-bio can also be accessed with oneapp.com/
            {username}.
          </span>

          <div className="flex justify-start mt-2">
            <button
              onClick={() => handleModalOpen(username)}
              className="bg-sky-100 text-black rounded-full border border-black text-sm p-2 md:px-4 transition duration-200 hover:bg-sky-200"
            >
              Update Username
            </button>
          </div>
        </div>
      </div>

      {/* Logo and Colour Section */}
      <div className="shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4 bg-white">
        <h2 className="text-base md:text-lg font-semibold">Logo and Colour</h2>
        <hr className="border-gray-100" />
        <p className="text-xs md:text-sm">
          Logo and colour configured here will be used on all your product
          landing pages and for your customers’ account where they can access
          purchased products.
        </p>

        {/* Logo Upload Section */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">
            Logo Default (Recommended width: 512 pixels minimum)
          </span>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              {logoImage ? (
                <img
                  src={logoImage}
                  alt="Logo Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CiImageOn className="text-gray-600 text-2xl" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="logo-upload"
              className="hidden"
              onChange={handleLogoUpload}
            />
            <label
              htmlFor="logo-upload"
              className="bg-orange-600 text-white rounded-full text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700 cursor-pointer"
            >
              Upload
            </label>
          </div>
        </div>

        {/* Favicon Upload Section */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Favicon (Recommended size - 32x32)</span>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              {faviconImage ? (
                <img
                  src={faviconImage}
                  alt="Favicon Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CiImageOn className="text-gray-600 text-2xl" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="favicon-upload"
              className="hidden"
              onChange={handleFaviconUpload}
            />
            <label
              htmlFor="favicon-upload"
              className="bg-orange-600 text-white rounded-full text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700 cursor-pointer"
            >
              Upload
            </label>
          </div>
        </div>

        {/* Brand Name Input Section */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Brand Name</span>
          <input
            type="text"
            value={brandName}
            onChange={handleBrandNameChange}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your brand name"
          />
        </div>

        {/* Save Button */}
        {isBrandNameChanged && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="bg-orange-600 text-white rounded-full text-xs md:text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* About Me Section */}
      <div className="shadow-md rounded-lg p-4 md:p-6 flex flex-col gap-4 bg-white">
        <h2 className="text-base md:text-lg font-semibold">About me info</h2>
        <hr className="border-gray-100" />
        <p className="text-xs md:text-sm">
          This is the default 'About me' info we show as a card on all your
          products. Talk about yourself and link your social accounts.
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Your image</span>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              {prifileImage ? (
                <img
                  src={prifileImage}
                  alt="Logo Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CiImageOn className="text-gray-600 text-2xl" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
            <label
              htmlFor="image-upload"
              className="bg-orange-600 text-white rounded-full text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700 cursor-pointer"
            >
              Upload
            </label>
          </div>
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Name</span>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Title Input */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Title</span>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your title"
          />
        </div>

        {/* Bio Input */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Bio</span>
          <input
            type="text"
            value={bio}
            onChange={handleBioChange}
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your bio"
          />
        </div>

        {/* Save Changes Button for About Me */}
        {isAboutMeChanged && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAboutMeSave}
              className="bg-orange-600 text-white rounded-full text-xs md:text-sm p-2 md:px-4 transition duration-200 hover:bg-orange-700"
            >
              Save Changes
            </button>
          </div>

        )}

        {/* Social Media Links and Edit Button */}
        <hr className="border-gray-100 mt-4" />
        <div className="flex justify-between items-center">
          <p>Social Media Links (01)</p>
          <div className="flex flex-row justify-content items-center">
            <button
              onClick={handleEditIconClick}
              className="cursor-pointer text-gray-500"
            >
              <EditIcon />
            </button>
          </div>
        </div>

        {/* Book a session with me */}
        <hr className="border-gray-100 mt-4" />
        <div className="flex justify-between items-center">
          <p>Book a session with me</p>
          <button
            onClick={handleSetupClick}
            className="bg-gray-100 text-black text-xs rounded-xl p-2 transition duration-200"
          >
            Set up
          </button>
        </div>
      </div>

      {/* Update Username Modal */}
      <UpdateUsernameModal
        open={isModalOpen}
        handleClose={handleModalClose}
        label="Update Username"
        value={modalValue}
        onSave={handleUsernameSave}
      />

      {/* About Me Modal */}
      <AboutMeModal
        open={isAboutMeModalOpen}
        handleClose={handleAboutMeModalClose}
        label="Edit About Me"
        // Add any other props for the About Me modal
      />
    </div>
  );
};

export default BrandingTab;
