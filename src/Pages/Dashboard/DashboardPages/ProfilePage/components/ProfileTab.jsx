import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SigninModal from "../../../../../components/Modal/SigninModal";
import SupportModal from "../../../../../components/Modal/SupportModal";

const ProfileTab = () => {
  const [firstName, setFirstName] = useState("Manish");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("manish@example.com");
  const [phone, setPhone] = useState("9876543210");

  const [isLastNameChanged, setIsLastNameChanged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState("");
  const [modalValue, setModalValue] = useState("");
  const [currentField, setCurrentField] = useState("");

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsLastNameChanged(true);
  };

  const handleSave = () => {
    console.log("Saved:", { firstName, lastName });
    setIsLastNameChanged(false);
  };

  const handleEditClick = (field) => {
    setModalLabel(
      field === "email" ? "Registered Email" : "Registered Phone Number"
    );
    setModalValue(field === "email" ? email : phone);
    setCurrentField(field);
    setIsModalOpen(true);
  };

  const handleModalSave = (newValue) => {
    if (currentField === "email") {
      setEmail(newValue);
    } else {
      setPhone(newValue);
    }
  };

  const handleSupportModalSave = (newEmail, newPhone) => {
    setEmail(newEmail);
    setPhone(newPhone);
    setIsSupportModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="shadow-md rounded-lg p-6 w-full">
        <h2 className="text-sm font-semibold mb-4">Basic Information</h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex gap-6">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {isLastNameChanged && (
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-orange-600 text-white rounded-full text-xs p-2 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full">
        <h2 className="text-sm font-semibold mb-4">Signin Information</h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col gap-6">
          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registered Email
            </label>
            <input
              type="text"
              value={email}
              readOnly
              className="w-full p-2 rounded-md  cursor-not-allowed focus:outline-none"
            />
            <div className="absolute right-2 top-5 bottom-0 flex items-center gap-2">
              <EditIcon
                className="cursor-pointer text-gray-500"
                onClick={() => handleEditClick("email")}
              />
              <span
                className="text-sm mr-1 text-gray-500 cursor-pointer"
                onClick={() => handleEditClick("email")}
              >
                Edit
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registered Phone Number
            </label>
            <input
              type="text"
              value={phone}
              readOnly
              className="w-full p-2 rounded-md cursor-not-allowed focus:outline-none"
            />
            <div className="absolute right-2 top-5 bottom-0 flex items-center gap-2">
              <EditIcon
                className="cursor-pointer text-gray-500"
                onClick={() => handleEditClick("phone")}
              />
              <span
                className="text-sm mr-1 text-gray-500 cursor-pointer"
                onClick={() => handleEditClick("phone")}
              >
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channel Section */}
      <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full">
        <h2 className="text-sm font-semibold mb-4">Support Channel</h2>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col gap-6">
          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Support Email
            </label>
            <input
              type="text"
              value={email}
              readOnly
              className="w-full p-2 rounded-md cursor-not-allowed focus:outline-none"
            />
            <button
              className="absolute bg-gray-100 right-2 top-7 text-black-100 text-xs rounded-xl p-2 transition duration-200"
              onClick={() => setIsSupportModalOpen(true)}
            >
              Set up
            </button>
          </div>
          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Support Phone Number
            </label>
            <input
              type="text"
              value={phone}
              readOnly
              className="w-full p-2 rounded-md cursor-not-allowed focus:outline-none"
            />
            <button
              className="absolute bg-gray-100 right-2 top-7 text-black-100 text-xs rounded-xl p-2 transition duration-200"
              onClick={() => setIsSupportModalOpen(true)}
            >
              Set up
            </button>
          </div>
        </div>
      </div>

      <SigninModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        label={modalLabel}
        value={modalValue}
        onSave={handleModalSave}
      />
      <SupportModal
        open={isSupportModalOpen}
        handleClose={() => setIsSupportModalOpen(false)}
        label={modalLabel}
        value={modalValue}
        onSave={handleSupportModalSave}
      />
    </div>
  );
};

export default ProfileTab;
