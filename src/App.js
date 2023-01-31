import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NavbarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
