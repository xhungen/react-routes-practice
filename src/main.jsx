import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import NoFound404 from "./routes/NoFound404";
import Post from "./routes/Post";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog/>} />
          <Route path="blog/:id" element={<Post/>} />
          <Route path="*" element={<NoFound404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
