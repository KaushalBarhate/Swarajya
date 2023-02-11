import React,{useState} from 'react'
import "../components/content.css"
import Slideshow from './home/image';
function Content() {
  const [hover, setHover] = useState(true);
  return (
    <div 
    style = {{display:"flex",flexDirection:"horizontal",
    marginTop:hover?'0':'-2.5%'
  }}
    onMouseEnter={() => setHover(false)}
    onMouseLeave={() => setHover(true)}>
    <div
    
     class="img" style={{
        position: "relative",
        width: "506px",
        height: "506px",
        
        marginLeft: hover?"33%":"10%",
        marginTop:"2.5%",
        marginBotton:"5%",
    // left: "493px",
    // top: "156px",

   
    boxShadow: "4px 4px 25px 3px #F4EB0C, -4px -4px 25px 5px rgba(244, 235, 12, 0.53)",
    borderRadius: "354px"
    }}></div>
    
    <div style={{
      display:hover?'none':'flex',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:'20%',
      marginTop:'100px'
    }}>
      <Slideshow />
    </div>
    </div>
  )
}

export default Content