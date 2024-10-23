import { Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInPage from "./Pages/Authentication/SigninPage/SignInPage";
import SignUpPage from "./Pages/Authentication/SignupPage/SignUpPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import HomePage from "./Pages/Dashboard/DashboardPages/HomePage/HomePage.jsx";
import MyStorePage from "./Pages/Dashboard/DashboardPages/MyStorePage/MyStorePage.jsx";
import AudiencePage from "./Pages/Dashboard/DashboardPages/AudiencePage/AudiencePage.jsx";
import PaymentsPage from "./Pages/Dashboard/DashboardPages/PaymentsPage/PaymentsPage.jsx";
import PaymentPage from "./Pages/Dashboard/DashboardPages/PaymentPage/PaymentPage.jsx";
import BookingPages from "./Pages/Dashboard/DashboardPages/BookingPages/BookingPages.jsx";
import EventsPage from "./Pages/Dashboard/DashboardPages/EventsPage/EventsPage.jsx";
import CoursesPage from "./Pages/Dashboard/DashboardPages/CoursesPage/CoursesPage.jsx";
import TelegramPage from "./Pages/Dashboard/DashboardPages/TelegramPage/TelegramPage.jsx";
import LockedContentPage from "./Pages/Dashboard/DashboardPages/LockedContentPage/LockedContentPage.jsx";
import DiscordPage from "./Pages/Dashboard/DashboardPages/DiscordPage/DiscordPage.jsx";
import ProfilePage from "./Pages/Dashboard/DashboardPages/ProfilePage/ProfilePage.jsx";
import SuperLinkPage from "./Pages/Dashboard/DashboardPages/SuperLinkPage/SuperLinkPage.jsx";
import CreateEventPage from "./Pages/Dashboard/DashboardPages/EventsPage/CreateEventPage.jsx";
import CreateCoursePage from "./Pages/Dashboard/DashboardPages/CoursesPage/CreateCoursePage.jsx";
import CreateLockedContentPage from "./Pages/Dashboard/DashboardPages/LockedContentPage/CreateLockedContentPage.jsx";
import CreatePaymentPage from "./Pages/Dashboard/DashboardPages/PaymentPage/CreatePaymentPage.jsx";

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
          <Route path="superlinks" element={<SuperLinkPage />} />
        </Route>
        <Route path="app" element={<Outlet />}>
          <Route path="create-event" element={<CreateEventPage />} />
          <Route path="create-course" element={<CreateCoursePage />} />
          <Route path="create-locked-content" element={<CreateLockedContentPage />} />
          <Route path="create-payment" element={<CreatePaymentPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
