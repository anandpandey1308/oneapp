import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInPage from "./Pages/Authentication/SigninPage/SignInPage";
import SignUpPage from "./Pages/Authentication/SignupPage/SignUpPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import HomePage from "./Pages/Dashboard/DashboardPages/HomePage/HomePage.jsx";
import MyStorePage from "./Pages/Dashboard/DashboardPages/MyStorePage/MyStorePage.jsx";
import AudiencePage from "./Pages/Dashboard/DashboardPages/YourCustomerPage/YourCustomerPage.jsx";
import AppointementPage from "./Pages/Dashboard/DashboardPages/AppointementPage/AppointementPage.jsx";
import WebinarPage from "./Pages/Dashboard/DashboardPages/WebinarPage/WebinarPage.jsx";
import CoursesPage from "./Pages/Dashboard/DashboardPages/CoursesPage/CoursesPage.jsx";
import TelegramPage from "./Pages/Dashboard/DashboardPages/TelegramPage/TelegramPage.jsx";
import LockedContentPage from "./Pages/Dashboard/DashboardPages/LockedContentPage/LockedContentPage.jsx";
import DiscordPage from "./Pages/Dashboard/DashboardPages/DiscordPage/DiscordPage.jsx";
import ProfilePage from "./Pages/Dashboard/DashboardPages/ProfilePage/ProfilePage.jsx";
import SuperLinkPage from "./Pages/Dashboard/DashboardPages/SuperLinkPage/SuperLinkPage.jsx";
import CreateWebinarPage from "./Pages/Dashboard/DashboardPages/WebinarPage/CreateWebinarPage.jsx";
import CreateLockedContentPage from "./Pages/Dashboard/DashboardPages/LockedContentPage/CreateLockedContentPage.jsx";
import ChatPage from "./Pages/Dashboard/DashboardPages/ChatPage/ChatPage.jsx";
import Welcome from "./Pages/Welcome/Welcome.jsx";
import PluginPage from "./Pages/Dashboard/DashboardPages/PluginPage/PluginPage.jsx";
import CreateCoursePage from "./Pages/Dashboard/DashboardPages/CoursesPage/CreateCoursePage.jsx";
import PayingUpPage from "./Pages/Dashboard/DashboardPages/PayingUpPage/PayingUpPage.jsx";
import WalletPage from "./Pages/Dashboard/DashboardPages/WalletPage/WalletPage.jsx";
import NewCourse from "./Pages/Dashboard/DashboardPages/CoursesPage/NewCourse.jsx";
import WhatsAppPage from "./Pages/Dashboard/DashboardPages/WhatsAppPage/WhatsAppPage.jsx";
import CreatePayUp from "./Pages/Dashboard/DashboardPages/PayingUpPage/CreatePayUp.jsx";
import PayingUpPages from "./Pages/Dashboard/DashboardPages/PayingUpPage/PayingUpPages.jsx";
import WithdrawalPage from './Pages/Dashboard/DashboardPages/WalletPage/SubWalletPages/WithdrawalPage';
import AllTransactionsPage from './Pages/Dashboard/DashboardPages/WalletPage/SubWalletPages/AllTransactionsPage';
import KYCpage from './Pages/Dashboard/DashboardPages/WalletPage/SubWalletPages/KYCpage';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="mystore" element={<MyStorePage />} />
          <Route path="your-customers" element={<AudiencePage />} />
          <Route path="wallets" element={<WalletPage />} />
          <Route path="payingup" element={<PayingUpPage />} />
          <Route path="appointment" element={<AppointementPage />} />
          <Route path="webinar" element={<WebinarPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="telegram" element={<TelegramPage />} />
          <Route path="locked-content" element={<LockedContentPage />} />
          <Route path="discord" element={<DiscordPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="superlinks" element={<SuperLinkPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="whatsapp" element={<WhatsAppPage />} />
          <Route path="plugin" element={<PluginPage />} />
          <Route path="withdrawal" element={<WithdrawalPage />} />
          <Route path="all-transactions" element={<AllTransactionsPage />} />
          <Route path="kyc-setting" element={<KYCpage />} />
        </Route>
        <Route path="app" element={<Outlet />}>
          <Route path="create-webinar" element={<CreateWebinarPage />} />
          <Route path="new-course" element={<NewCourse />} />
          <Route path="create-course" element={<CreateCoursePage />} />
          <Route path="create-locked-content" element={<CreateLockedContentPage />} />
          <Route path="paying-up" element={<PayingUpPages />} />
          <Route path="create-pay-up" element={<CreatePayUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
