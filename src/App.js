import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CompleteHome1 from "./components/home/CompleteHome1";
import CompleteHome2 from "./components/home/CompleteHome2";
import CompleteHome3 from "./components/home/CompleteHome3";

import CompleteAbout from "./components/about/CompleteAbout";
import CompleteDownload from "./components/download/CompleteDownload";
import CompleteContact from "./components/contact/CompleteContact";
import Lims from "./components/services/Lims";
import WaterManagement from "./components/services/WaterManagement";
import AgriMalls from "./components/services/AgriMalls";
import AgriServices from "./components/services/AgriServices";
import Projects from "./components/Projects/CompleteProject";
import CompleteInvestors from "./components/Investors/CompleteInvestors";

import CompleteServices from "./components/services/CompleteServices";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CompleteHome1 />} /> */}
        <Route path="/" element={<CompleteHome1 />} />
        <Route path="/home1" element={<CompleteHome1 />} />
        <Route path="/home2" element={<CompleteHome2 />} />
        <Route path="/home3" element={<CompleteHome3 />} />
        <Route path="/about" element={<CompleteAbout />} />
        <Route path="/services" element={<CompleteServices />} />
        <Route path="/investors" element={<CompleteInvestors />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/Lims" element={<Lims />} />
        <Route path="/water-management" element={<WaterManagement />} />
        <Route path="/agri-malls" element={<AgriMalls />} />
        <Route path="/agri-services" element={<AgriServices />} />

        <Route path="/contact" element={<CompleteContact />} />
        <Route path="/download-pdf" element={<CompleteDownload />} />
      </Routes>
    </Router>
  );
}

export default App;
