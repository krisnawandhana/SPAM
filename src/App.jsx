import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Logs from "./pages/Logs";
// import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./global.css";

function App() {
  return (
    <Router>
      <div className="bg-[#51495B] font-primary">
        <Navbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/logs" element={<Logs />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
