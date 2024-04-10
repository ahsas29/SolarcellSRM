import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Structure from "../pages/Doctors/Structure";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Efficiency from "../pages/Efficiency.jsx";

import {Routes, Route} from "react-router-dom";

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/structure" element={<Structure />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/efficiency" element={<Efficiency />} />
  </Routes>
};

export default Routers;