import "./App.css";
import React from "react";
import { GenerateForm } from "./components/form/GenerateForm";
import { CreateNavBar } from "./components/nav-bar/CreateNavBar";
import { About } from "./pages/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <CreateNavBar />
      <Routes>
        {/* <Route exact path="/" element={<Homepage />}/>  */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
