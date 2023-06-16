import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./routes/navbar";
import NewPlace from "./routes/new-place";
import User from "./routes/user";
import UserPlace from "./routes/user-place";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<User />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Route>
      {/* Here Navigate hook is used to Redirect any invalid url route to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App;
