import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar.component";
import User from "./user/pages/User.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<h3>my homepage content</h3>} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  )
}

export default App;
