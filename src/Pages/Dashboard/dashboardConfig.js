/* eslint-disable no-unused-vars */
import { FaHome, FaChartBar, FaUsers, FaCog, FaShoppingCart,FaWhatsapp,FaRocketchat,FaWallet, FaCalendarAlt, FaBookOpen, FaLock, FaTelegramPlane, FaDiscord, FaLink } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import logo from '../../assets/oneapp.png';
import { RiPresentationFill } from "react-icons/ri";

export const dashboardConfig = {
  logo: {
    src: logo,
    alt: "Logo",
    title: "MyApp",
  },
  generalItems: [
    { label: "Home", icon: FaHome, path: "/" },
    { label: "One Link", icon: FaLink, path: "/mystore" },
    { label: "Your Customers", icon: FaUsers, path: "/your-customers" },
    { label: "Wallets", icon: FaWallet, path: "/wallets" },
    // commented out for now, as we don't have a superlinks dashboard yet
    // { label: "SuperLinks", icon: FaLink, path: "/superlinks" }
  ],
  
  appItems: [
    { label: "Paying Up", icon: FaChartBar, path: "/payingup" },
    { label: "Appointment", icon: FaCalendarAlt, path: "/appointement" },
    { label: "Webinar", icon: RiPresentationFill, path: "/webinar" },
    { label: "Courses", icon: FaBookOpen, path: "/courses" },
    { label: "Telegram", icon: FaTelegramPlane, path: "/telegram" },
    // commented out for now, as we don't have a superlinks dashboard yet
    // { label: "Locked Content", icon: FaLock, path: "/locked-content" },
    { label: "Discord", icon: FaDiscord, path: "/discord" },
    // commented out for now, as we don't have a chat dashboard yet
    // { label: "Chat", icon: FaRocketchat, path: "/chat" },
    { label: "WhatsApp", icon: FaWhatsapp, path: "/whatsapp" },
    { label: "Plugin", icon: BsPlugin, path: "/plugin" },
  ],
  settingItems: [
    { label: "Account Setting", icon: FaCog, path: "/profile" },
    // commented out for now, as we don't have a superlinks dashboard yet
    // { label: "Feature Requests", icon: FaChartBar, path: "https://www.google.com" },
    { label: "Help Center", icon: FaUsers, path: "https://www.google.com" },
    { label: "Sign Out", icon: FaCog, path: "/signin"  },
  ]
};
