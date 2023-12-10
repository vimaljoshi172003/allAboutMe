import React from 'react'
import './about.css'
import myPhoto from "../../img/myPhoto.jpeg"

const About = () => {
    const photo="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg"
  return (
   <>
    <div className="a">
        <div className="a-left">
        <div className="a-card bg"></div>
           <div className="a-card">
            <img 
            src={myPhoto}
            alt="" 
            className='a-img'
            />
           </div>
        </div>
        <div className="a-right">
        <h1 className='a-title'>About me</h1>
        <p className="a-sub">
        Hi there! I'm Vimal Joshi, a passionate Front-End Developer with a strong penchant for creating captivating and user-friendly web experiences. I believe that the web is not just a platform; it's a canvas for innovation, and I'm here to paint it with pixels and code.
        </p>
        <div className="a-desc">
        I'm proficient in a wide range of front-end technologies, including HTML, CSS, JavaScript, and popular frameworks like React
        </div>
        </div>
    </div>

   </>
  )
}

export default About