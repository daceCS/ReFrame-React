import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Feed";
import ExamplePost from "./pages/ExamplePost";
import Upload from "./pages/ExampleUpload";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>No Page Found</h1>} />
        <Route path="/example" element={<ExamplePost />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
