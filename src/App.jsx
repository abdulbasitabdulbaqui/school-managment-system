import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbaar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Add from "./components/Add";
import Studentlist from "./components/Studentlist";
import { useState } from "react";

function App() {
  const [updatedData, setUpdatedData] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  return (
    <>
      <Navbaar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/addstudent"
          element={
            <Add
              setUpdatedData={setUpdatedData}
              updatedData={updatedData}
              editStudent={editStudent}
              setEditStudent={setEditStudent}
            />
          }
        />
        <Route
          path="/studentlist"
          element={
            <Studentlist
              setEditStudent={setEditStudent}
              setUpdatedData={setUpdatedData}
              updatedData={updatedData}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
