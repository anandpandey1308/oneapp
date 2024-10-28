/* eslint-disable no-unused-vars */
import { FaHome, FaChartBar, FaUsers, FaCog, FaShoppingCart,FaRocketchat, FaCalendarAlt, FaBookOpen, FaLock, FaTelegramPlane, FaDiscord, FaLink } from "react-icons/fa";
import logo from '../../assets/oneapp.png';

export const dashboardConfig = {
  logo: {
    src: logo,
    alt: "Logo",
    title: "MyApp",
  },
  generalItems: [
    { label: "Home", icon: FaHome, path: "/" },
    { label: "One Link", icon: FaShoppingCart, path: "/mystore" },
    { label: "Audience", icon: FaUsers, path: "/audience" },
    { label: "Payments", icon: FaChartBar, path: "/payments" },
    // commented out for now, as we don't have a superlinks dashboard yet
    // { label: "SuperLinks", icon: FaLink, path: "/superlinks" }
  ],
  appItems: [
    { label: "Paying Up", icon: FaChartBar, path: "/payment" },
    { label: "Appointment", icon: FaCalendarAlt, path: "/booking" },
    { label: "Events", icon: FaUsers, path: "/events" },
    { label: "Courses", icon: FaBookOpen, path: "/courses" },
    { label: "Telegram", icon: FaTelegramPlane, path: "/telegram" },
    // commented out for now, as we don't have a superlinks dashboard yet
    // { label: "Locked Content", icon: FaLock, path: "/locked-content" },
    { label: "Discord", icon: FaDiscord, path: "/discord" },
    // commented out for now, as we don't have a chat dashboard yet
    // { label: "Chat", icon: FaRocketchat, path: "/chat" },
  ],
  settingItems: [
    { label: "Account Setting", icon: FaCog, path: "/profile" },
    { label: "Feature Requests", icon: FaChartBar, path: "https://www.google.com" },
    { label: "Help Center", icon: FaUsers, path: "https://www.google.com" },
    { label: "Sign Out", icon: FaCog, path: "/signin"  },
  ]
};
