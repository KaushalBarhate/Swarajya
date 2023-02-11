import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import React,{ useState } from "react";
import FooterComponent from "./components/Footer";
import Content from "./components/content";
import Home from "./components/home/home";
function App() {
  const [hover, setHover] = useState(true);
  return (
    <div>
      <Home />   
      <FooterComponent />
    </div>
    
  );
}

export default App;
