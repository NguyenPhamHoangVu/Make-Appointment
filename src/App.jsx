import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Doctors from "./page/Doctors";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import MyProfile from "./page/MyProfile";
import MyAppoinment from "./page/MyAppoinment";
import Appointment from "./page/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoinment" element={<MyAppoinment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
