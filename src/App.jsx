import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Appoinments from "./pages/Appoinments";
import Consultants from "./pages/Consultants";
import Emergency from "./pages/Emergency";
import Insurance from "./pages/Insurance";
import ContactUs from "./pages/ContactUs";
import Create_account from "./pages/Create_account";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import DoctorsDetails from "./components/DoctorsDetails/DoctorsDetails";
import Booking from "./pages/Register";
import CreateAccount from "./components/CreateAccount/CreateAccount";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appoinment/:docId" element={<Appoinments />} />
        <Route path="/" element={<AllDoctors />} /> {/* List of all doctors */}
      <Route path="/doctor/:id" element={<DoctorsDetails />} /> {/* Doctor details */}
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/createaccount" element={<CreateAccount />} />
   
      <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/insurance" element={<Insurance/>} />
        <Route path="create_account" element={<Create_account/>}/>
       </Routes>
    </div>
  );
};
export default App;



