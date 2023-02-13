import React,{useState} from 'react'
import "../components/content.css"
import Slideshow from './home/image';
import Slideshow1 from './home/image1';
function Content() {
  const [hover, setHover] = useState(true);
  return (
    <div>
      <div className="c1">
      <div
    
    class="img" style={{
       position: "relative",
       width: "206px",
       height: "206px",
       backgroundSize: "206px 206px",
       marginLeft: "26%",
       marginTop:"5%",
       marginBotton:"5%",


  
   boxShadow: "4px 4px 25px 3px #F4EB0C, -4px -4px 25px 5px rgba(244, 235, 12, 0.53)",
   borderRadius: "354px"
   }}></div>
   <div style={{
    paddingLeft:"25%",
    paddingTop:"5%"
   }}>
    <div style={{
      paddingTop: "3%"
    }}>
    <Slideshow1 />
    </div>
   </div>
      </div>
    <div className="c2">
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
    </div>
    </div>
  )
}

export default Content