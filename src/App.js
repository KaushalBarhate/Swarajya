import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Content from "./components/content";
import Home from "./components/home/home";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Gallery2 from "./components/Gallery";
function App() {
  const [hover, setHover] = useState(true);
  return (
    <div>
      {/* <NavbarComponent className="rounded-none  inset-x-0 bottom-0 mt-auto bg-gradient-to-r from-red-600 via-red-700 to-yellow-400" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route exact path="gallery" element={<Gallery2 />} />

          <Route exact path="blogs/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
    // <div className="App flex flex-col min-h-screen inset-x-0 bottom-0 mt-auto bg-gradient-to-r from-red-600 via-red-700 to-yellow-400">
    //   <NavbarComponent className="rounded-none  " />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="home" element={<Home />} />
    //       <Route exact path="blogs" element={<Blogs />} />

    //       <Route exact path="blogs/:id" element={<Blog />} />
    //     </Routes>
    //   </BrowserRouter>
    //   <FooterComponent />
    // </div>
  );
}

export default App;
