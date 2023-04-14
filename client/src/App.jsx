import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./user/pages/User.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element=<h1>Navbar</h1> />
      <Route path="user" element={<User />} />
    </Routes>
  )
}

export default App;
