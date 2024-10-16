import { useState } from "react";
import UpdateUsernameModal from "../../../../../components/Modal/UpdateUsernameModal";
import { CiImageOn } from "react-icons/ci";

const BrandingTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState("manish");
  const [fullURL, setFullURL] = useState("oneapp.bio/manish");
  const [brandName, setBrandName] = useState("");
  const [isBrandNameChanged, setIsBrandNameChanged] = useState(false);
  const [logoImage, setLogoImage] = useState(null);
  const [faviconImage, setFaviconImage] = useState(null);

  const username = fullURL.split("/")[1]; 

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

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
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
            Your site/link-in-bio can also be accessed with oneapp.com/{username}.
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
          Logo and colour configured here will be used on all your product landing pages and for your customers’ account where they can access purchased products.
        </p>

        {/* Logo Upload Section */}
        <div className="flex flex-col gap-2 mt-3">
          <span className="text-sm">Logo Default (Recommended width: 512 pixels minimum)</span>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              {logoImage ? (
                <img src={logoImage} alt="Logo Preview" className="w-full h-full object-cover" />
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
                <img src={faviconImage} alt="Favicon Preview" className="w-full h-full object-cover" />
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

      {/* Update Username Modal */}
      <UpdateUsernameModal
        open={isModalOpen}
        handleClose={handleModalClose}
        label="Update Username"
        value={modalValue}
        onSave={handleUsernameSave}
      />
    </div>
  );
};

export default BrandingTab;
