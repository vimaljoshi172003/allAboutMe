import React, { useRef } from 'react'
import './contact.css'
import { LocalPhone, LocationOn, MailOutline } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';


const Contact = () => {
  return (
    <>
    <div className="main">
        <div className="c">
            <div className="c-bg">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                        </h1>
                        <div className="c-info">
                            <div className="c-info-item">
                            <InstagramIcon className='c-icon' />
                            allabout_joshi   
                            </div>
                            <div className="c-info-item">
                            <MailOutline className='c-icon' />
                            vimaljoshi939@gmail.com
                            </div>
                            <div className="c-info-item">
                            <LocationOn  className='c-icon' />
                            Haldwani Uttarakhand
                            </div>
                        </div>


                </div>
                <div className="c-right">
                <p className="c-desc">
                <b>What's your story ?</b> Get in touch. Always available for freelancing if the right project comes along me</p>
                <form className='form'  action="https://formspree.io/f/xqkvbwdw" method="POST">
                    <input className='input1' type="text" placeholder='name' name="user_name" />
                    <input className='input3' type="text" placeholder='Email' name="email" />
                    <input className='input4' type="text" placeholder='Enter your number' name="email" />
                    <textarea className='textarea' rows="5" placeholder='massage' name="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
                </div>
                </div>
             </div>
        </div>
        </div>
    </>
  )
}

export default  Contact