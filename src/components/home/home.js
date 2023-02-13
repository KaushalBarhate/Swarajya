
import NavbarComponent from '../Navbar';
import React,{ useState } from "react";
import FooterComponent from '../Footer';
import Content from '../content';
import './home.css';
function Home() {
    const [hover, setHover] = useState(true);
    return (
      <div>
      <div className="App flex flex-col min-h-screen" style={{background:"linear-gradient(0deg, rgba(159,6,6,1) 0%, rgba(190,7,7,1) 4%, rgba(224,75,7,1) 24%, rgba(224,95,7,1) 58%, rgba(235,128,6,1) 78%, rgba(230,213,16,1) 100%)"}}>
        <NavbarComponent />
  
        <Content/>
        <div>
          <div>
            <div style={{marginTop:"2%", paddingBottom:"3%"}} onMouseEnter={() => setHover(false)}
        onMouseLeave={() => setHover(true)}>
              {hover ?(
              <span className="sp1" >Swarajya Marathi Literary Association is a Cultural Club at Vellore Institute of Technology Chennai.</span>):
              (<span className="sp1" >स्वराज्य मराठी साहित्य संघ हा वेल्लूर इन्स्टिट्यूट ऑफ टेक्नॉलॉजी चेन्नई येथील सांस्कृतिक क्लब आहे.</span>)}
            </div>
          </div>
        </div>
        </div>
        
      
      </div>
    );
  }

export default Home