import { useState } from "react";
import { Settings } from "lucide-react"; // Ensure lucide-react is installed for icons
import { useNavigate, Outlet } from "react-router-dom";
import { dashboardConfig } from "./dashboardConfig";

const DashboardPage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSettingItemClick = (item) => {
    if (item.path.startsWith("http")) {
      window.open(item.path, "_blank");
    } else if (item.path === "/signin") {
      navigate("/signin");
    } else {
      navigate(`/dashboard${item.path}`);
    }
    setIsMobileMenuOpen(false);
    setIsSettingsOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <aside
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64 bg-[#0c1014] text-white flex flex-col h-screen fixed z-50 md:static md:translate-x-0`}
      >
        <div className="p-2 flex items-center justify-center">
          <img
            src={dashboardConfig.logo.src} 
            alt={dashboardConfig.logo.alt}
            className="h-12" 
          />
          <button onClick={toggleMobileMenu} className="md:hidden">
            ✖️
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-4">
            <div className="mb-6">
              {dashboardConfig.generalItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm py-3 px-4 cursor-pointer hover:bg-gray-700 hover:rounded-xl transition-all"
                  onClick={() => {
                    navigate(`/dashboard${item.path}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <hr className="border-gray-600 mb-4" />
            <span className="text-sm font-bold mb-2 block">Your App</span>

            <div>
              {dashboardConfig.appItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm py-3 px-4 cursor-pointer hover:bg-gray-700 hover:rounded-xl transition-all"
                  onClick={() => {
                    navigate(`/dashboard${item.path}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <hr className="border-gray-600 mb-2" />
          <div
            className="flex items-center text-sm py-3 px-4 cursor-pointer hover:bg-gray-700 hover:rounded-xl transition-all"
            onClick={toggleSettings}
          >
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </div>
          {isSettingsOpen && (
            <div className="flex flex-col mt-2 bg-gray-700 rounded-md text-sm p-2">
              {dashboardConfig.settingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 cursor-pointer hover:bg-gray-600 hover:rounded-xl transition-all"
                  onClick={() => handleSettingItemClick(item)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto h-screen scrollbar-hide">
        <div className="flex items-center justify-between bg-[#0c1014] text-white p-4 fixed top-0 left-0 right-0 z-40 md:hidden shadow-lg">
          <img
            src={dashboardConfig.logo.src}
            alt={dashboardConfig.logo.alt}
            className="h-10" 
          />
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            ☰
          </button>
        </div>

        <div className="pt-16 md:pt-0"> 
          <Outlet />
        </div>
      </main>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false); 
          }}
        ></div>
      )}
    </div>
  );
};

export default DashboardPage;