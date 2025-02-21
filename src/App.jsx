import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Engineering from "./pages/Engineering";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import DepartmentDetails from "./pages/DepartmentDetails";
import university from "./pages/university";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-500 text-gray-100 flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/university" element={<University />} />

            <Route path="/engineering/:department" element={<Engineering />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/department/:departmentName"
              element={<DepartmentDetails />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
