import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace.pages";
import Navbar from "./shared/components/Navbar.component";
import User from "./user/pages/User.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<h3>my homepage content</h3>} />
        <Route path="user" element={<User />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Route>
      {/* Here Navigate hook is used to Redirect any invalid url route to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
