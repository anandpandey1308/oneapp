import  { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // For checkmark icon
import { IoIosArrowDown } from "react-icons/io"; // For dropdown arrow
import { MdOutlineAccountBalance } from "react-icons/md"; // Bank icon
import { HiOutlineOfficeBuilding } from "react-icons/hi"; // Placeholder icons

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("8923612313@axl");

  const options = [
    {
      label: "8923612313@axl",
      icon: <HiOutlineOfficeBuilding className="text-green-600" />,
    },
    {
      label: "7856321556@ptys",
      icon: <HiOutlineOfficeBuilding className="text-green-600" />,
    },
    {
      label: "1100587850045",
      icon: <MdOutlineAccountBalance className="text-orange-600" />,
    },
  ];

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative md:w-64 w-full">
      {/* Selected Item */}
      <button
        className="flex items-center justify-between w-full px-4 py-3 border rounded-md bg-white shadow-md text-sm font-medium cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2 font-poppins tracking-tight">
          {options.find((option) => option.label === selected)?.icon}
          {selected}
        </span>
        <IoIosArrowDown className="text-gray-500" />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-2 font-poppins  hover:bg-gray-100 cursor-pointer ${
                selected === option.label ? "bg-gray-50" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <span className="flex items-center gap-2 text-sm font-poppins tracking-tight ">
                {option.icon}
                {option.label}
              </span>
              {selected === option.label && (
                <FaCheckCircle className="text-green-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
