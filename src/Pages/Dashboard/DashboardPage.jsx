import "./dashboardPage.css";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dashboardConfig } from "./dashboardConfig";
const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="logo-container">
          <img
            src={dashboardConfig.logo.src}
            alt={dashboardConfig.logo.alt}
            className="logo"
          />
          <span className="ml-3 text-xl font-bold">
            {dashboardConfig.logo.title}
          </span>
        </div>
        <nav className="menu">
          <ul className="space-y-4">
            {dashboardConfig.sidebar.map((item, index) => (
              <li key={index}>
                <div className="menu-item">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button className="logout-btn" onClick={() => navigate("/signin")}>
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="main-content">
        <div className="content-header">Dashboard</div>
        <div className="grid-layout">
          {dashboardConfig.mainContent.map((section, index) => (
            <div key={index} className="card">
              <h2 className="card-title">{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
