import React,{ useState } from "react";
import { Navbar } from "flowbite-react";
export default function NavbarComponent() {
  const [hover, setHover] = useState(true);
  return (
    <Navbar fluid={true} rounded={true} style={{backgroundColor: 'transparent'}}>
      <Navbar.Brand to="/">
        <img
          src={require("../logo.png")}
          className="mr-2 h-14 sm:h-20"
          alt="Swarajya Logo"
          style={{borderRadius:"60px"}}
        />
        </Navbar.Brand>
        <div
        onMouseEnter={() => setHover(false)}
      onMouseLeave={() => setHover(true)}>
        {hover ? (
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" style={{paddingLeft:"65%",
          marginLeft:"13%",
          width: "491px",
          height: "62px",
          fontWeight:"700",
          fontSize:"40px"
          }}>
                    Swarajya
          </span>
        ) : (
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" style={{paddingLeft:"88%",
          marginLeft:"13%",
height: "62px",
left: "504px",
top: "35px",
fontWeight:"700",
fontSize:"40px",
FontFace: "AMS Manthan"
}}>

स्वराज्य
        </span>
        )}
      </div>

        
      
      <Navbar.Toggle />
      <Navbar.Collapse className="min-w-1200" >
        <Navbar.Link href="/home" active={false}>
          Home
        </Navbar.Link>
        <Navbar.Link to="/aboutus">About</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/contact">Event</Navbar.Link>
        
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
