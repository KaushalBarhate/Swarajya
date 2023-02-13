import React, { useState } from "react";
import { Navbar } from "flowbite-react";
export default function NavbarComponent(props) {
  const [hover, setHover] = useState(true);
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{ backgroundColor: "transparent" }}
      className="z-10"
    >
      <Navbar.Brand to="/">
        <a href="/">
          <img
            src={require("../logo.png")}
            className="mr-2 h-14 sm:h-20"
            alt="Swarajya Logo"
            style={{ borderRadius: "60px" }}
          />
        </a>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="min-w-1200">
        <Navbar.Link href="/home" active={false}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/aboutus">About</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/blogs" active={false}>
          Blogs
        </Navbar.Link>
        <Navbar.Link href="/events">Upcoming Events</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
