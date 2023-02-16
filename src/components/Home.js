import React from "react";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import Slideshow from "./Carousel";
import { useState, useEffect } from "react";
import { useRef } from 'react';
function Home() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [hover, setHover] = useState(true);
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return (
    <div>
      <div>
        <h1
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
          className="-mt-20 max-[1300px]:mt-0 text-3xl  font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
        >
          {hover ? "Swarajya" : "स्वराज्य"}
        </h1>
        <img
          style={{
            boxShadow:
              "4px 4px 25px 3px #F4EB0C, -4px -4px 25px 5px rgba(244, 235, 12, 0.53)",
            borderRadius: "354px",
            width: screenSize.dynamicWidth > 600 ? "506px" : "60%", 
            height: screenSize.dynamicWidth > 600 ? "506px" : "60%", 
          }}
          src={require("../home.jpg")}
          alt="Logo"
          className="w-20 h-20 mx-auto my-12"
        />
        <div>
          <div>
            <div
              style={{ marginTop: "2%", paddingBottom: "3%" }}
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
            >
              {hover ? (
                <span style={{ fontWeight: "700", fontSize: "26px" }}>
                  Swarajya Marathi Literary Association is a Cultural Club at
                  Vellore Institute of Technology Chennai.
                </span>
              ) : (
                <span style={{ fontWeight: "700", fontSize: "26px" }}>
                  स्वराज्य मराठी साहित्य संघ हा वेल्लूर इन्स्टिट्यूट ऑफ
                  टेक्नॉलॉजी चेन्नई येथील सांस्कृतिक क्लब आहे.
                </span>
              )}
            </div>
          </div>
        </div>

        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
