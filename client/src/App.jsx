import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace.pages";
import UserPlace from "./places/pages/UserPlace.pages";
import Navbar from "./shared/components/Navbar.component";
import User from "./user/pages/User.pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<User />} />
        <Route path="/u1/places" element={<UserPlace />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Route>
      {/* Here Navigate hook is used to Redirect any invalid url route to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
