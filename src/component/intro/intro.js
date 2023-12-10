import React from 'react'
import "./intro.css"
import img1 from "../../img/img1.png"
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className='i-intro' >Hello,My name is</h2>
            <h1 className='i-name' >Vimal Joshi</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">It Student</div>
                    </div>
                </div>
                <div className="i-desc">
                HEY I'm skilled and motivated Web Developer , Im creating dynamic and responsive websites . Proficient in front-end technologies 
                </div>                
                </div>


        </div>
        <div className="i-right">
        <div className="i-bg">

        </div>
          <img className='i-img' src={img1} alt="" />
        </div>
    </div>
  )
}

export default Intro