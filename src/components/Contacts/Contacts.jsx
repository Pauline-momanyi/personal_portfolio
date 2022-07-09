import React, {useRef, useState} from 'react'
import './Contacts.css'
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context/Context'
import {useContext} from 'react'


function Contacts() {
    const form = useRef();
    const [done, setDone] = useState(false)

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ilo39r', 'template_kkbmsrr', form.current, 'pZncpHqhv3szr8J3z')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={darkMode? {color: 'white'}:{}}>Get in touch</span>
                <span>Contact me</span>
                <div 
                className="blur s-blur1"
                // style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Messsage'></textarea>
                <input type="submit" value='send' className='button' />
                <span>{done && 'Thanks for contacting me. Will get back to you. '}</span>
                <div 
                className="blur c-blur1"
                style={{background: 'var(--purple)'}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contacts