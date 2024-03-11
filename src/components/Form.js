import "./FormStyles.css";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form Data:", form.current);
      
        emailjs.sendForm('service_pi6ymgr', 'template_qlkbhsk', form.current, 'gRC-ctL89AvAglKm1qFmO')
          .then((result) => {
            console.log("EmailJS Response:", result.text);
            e.target.reset();
            alert('Email sent successfully!');
          }, (error) => {
            console.log("EmailJS Error:", error.text);
          });
      };
      
    return (

        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" name='your_name'></input>
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" name='your_email'></input>
                <label>Subject</label>
                <input type="text" placeholder="Enter your subject matter"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here ... " name='message'/>
                <button type='submit' value='send' className="btn">Submit</button>
            </form> 

        </div>
    )
};

export default Form;