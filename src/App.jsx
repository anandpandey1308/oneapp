import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInPage from "./Pages/Authentication/SigninPage/SignInPage";
import SignUpPage from "./Pages/Authentication/SignupPage/SignUpPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import HomePage from "./Pages/Dashboard/DashboardPages/HomePage";
import MyStorePage from "./Pages/Dashboard/DashboardPages/MyStorePage";
import AudiencePage from "./Pages/Dashboard/DashboardPages/AudiencePage";
import PaymentsPage from "./Pages/Dashboard/DashboardPages/PaymentsPage";
import PaymentPage from "./Pages/Dashboard/DashboardPages/PaymentPage";
import BookingPages from "./Pages/Dashboard/DashboardPages/BookingPages";
import EventsPage from "./Pages/Dashboard/DashboardPages/EventsPage";
import CoursesPage from "./Pages/Dashboard/DashboardPages/CoursesPage";
import TelegramPage from "./Pages/Dashboard/DashboardPages/TelegramPage";
import LockedContentPage from "./Pages/Dashboard/DashboardPages/LockedContentPage";
import DiscordPage from "./Pages/Dashboard/DashboardPages/DiscordPage";
import ProfilePage from "./Pages/Dashboard/DashboardPages/ProfilePage";

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
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="mystore" element={<MyStorePage />} />
          <Route path="audience" element={<AudiencePage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="booking" element={<BookingPages />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="telegram" element={<TelegramPage />} />
          <Route path="locked-content" element={<LockedContentPage />} />
          <Route path="discord" element={<DiscordPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
