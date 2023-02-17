import React from 'react'

function About() {
  return (
    <div className="flex flex-col md:flex-row" >
        <div style={{flex:"1.5"}}>
        <div className="bg-opacity-0 md:w-full h-675 md:bg-opacity-100 bg-violet-700 rounded-full rounded-l-none " style={{height:"675px"}}>
            <div className="title-screen text-white p-4 md:p-6 lg:p-8">
            <h1 className=" text-black text-4xl p-8 md:text-white md:text-5xl lg:text-6xl font-bold flex justify-flex-start">About Us</h1>
          </div>
          <div className="paragraph p-4 md:p-6 lg:p-0 text-black md:text-white text-lg md:text-xl lg:text-2xl text-left pr-8">
            <p className='p-4'>
              Swarajya Marathi Literary Association is a cultural club located in VIT Chennai. Our aim is to promote and
              preserve the rich cultural heritage of Marathi literature. We believe that literature has the power to bring
              people together and inspire change, and we aim to use it as a tool for promoting Marathi language and
              culture.
            </p><p></p>
            <p className='p-4'>
              Our club is open to all students who are interested in Marathi literature. Whether you are a native speaker
              or just someone who is curious about this vibrant culture, we welcome you to join us and become part of our
              community.
            </p>
          </div>
          <div>
            </div>
            </div>
        </div>
        <div className="ImgBack flex justify-center" style={{flex:"1"}}>
            <img 
            className="mx-auto my-auto"
            style={{width:"350px"}}
            src={require('../components/history.jpg')}
            alt="Cultural Maharashtra"
            />
        </div>
    </div>
  )
}

export default About