import React from 'react'
import ContactImg from '../assets/contactimg.jpg'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftside' style={{backgroundImage: `url(${ContactImg})`}}></div>
      <div className='rightside'>
        <h1>Contact us!</h1>
        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name: </label>
            <input name="name" placeholder='Enter full name' type='text' />
            <label htmlFor="email">Email: </label>
            <input name="name" placeholder='Enter email' type='email' />
            <label htmlFor="message">Message: </label>
            <textarea rows='6' placeholder='Enter message' name='message' />
            <button type='submit'>Send message</button>

        </form>
      </div>
    </div>
  )
}
