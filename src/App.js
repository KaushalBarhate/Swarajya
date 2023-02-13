import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
// import Content from "./components/content";
// import Home from "./components/home/home";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Gallery2 from "./components/Gallery";
import UpcomingEvents from "./components/Events";

function App() {
  const [hover, setHover] = useState(true);
  return (
    <div
      className="App flex flex-col min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(159,6,6,1) 0%, rgba(190,7,7,1) 4%, rgba(224,75,7,1) 24%, rgba(224,95,7,1) 58%, rgba(235,128,6,1) 78%, rgba(230,213,16,1) 100%)",
      }}
    >
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route exact path="gallery" element={<Gallery2 />} />
          <Route exact path="events" element={<UpcomingEvents />} />

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
