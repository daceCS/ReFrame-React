import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Feed";
import User from "./pages/User";
import ExamplePost from "./pages/ExamplePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/:user" element={<User />} />
        <Route path="*" element={<h1>No Page Found</h1>} />
        <Route path="/example" element={<ExamplePost />} />
      </Routes>
    </>
  );
}

export default App;
