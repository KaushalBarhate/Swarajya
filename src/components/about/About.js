import React from 'react'
import './About.css'
function About() {
  return (
    <div className='About' style={{overflow:'hidden', backgroundColor:'whitesmoke' }}>
        <div className='circleBackground'>
            <div style={{
            width: '150%',
            marginTop:"-13.5%",
            height: '128%',
            marginLeft:'-29%',
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "purple"

            }}>
            <div className='title-screen'>
                <span >About Us</span>
            </div>
            <div className='paragraph'>
                <p >
                Swarajya Marathi Literary Association is a cultural club located in VIT Chennai. Our aim is to promote and preserve the rich cultural heritage of Marathi literature. We believe that literature has the power to bring people together and inspire change, and we aim to use it as a tool for promoting Marathi language and culture.
                </p><p>
Our club is open to all students who are interested in Marathi literature. Whether you are a native speaker or just someone who is curious about this vibrant culture, we welcome you to join us and become part of our community.
                </p>
            </div>
            </div>
        </div>
        <div className='ImgBack'>
            <img className="imgCont" src={require('../../assets/history.jpg')} />
        </div>
    </div>
  )
}

export default About