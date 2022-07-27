import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';
import Divider from '../Divider/Divider';

import { toast } from 'react-toastify';


import Footer from "../Footer/Footer.jsx";


const Contact = () => {
    
    const notify = () => toast.success("Votre message est envoyé, merci", {
        theme: "colored"
    });
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wqw3m87', 'template_fdhp62k', form.current, 'SHFZp30H8I6yiNbHE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  
   

    return (
        <div className='contact'>
            <h2>CONTACTEZ-MOI</h2>
            <Divider />
            <form className='formContact' ref={form} onSubmit={sendEmail}>
                <div className="nameAndEmail">
                    <div className=' field1'>
                        <label>Name</label> <br />
                        <input className='inputNameAndEmail' type="text" name="to_name" />
                    </div>
                    <div className="field2">
                        <label>Email</label> <br />
                        <input className='inputNameAndEmail' type="email" name="from_email" />
                    </div>
                </div>
                <div className="field3">
                    <label>Message</label> <br />
                    <textarea name="message" />
                </div>
                <div className="field4">
                    <input onClick={notify} className='btn btn-xl inputSubmit' type="submit" value="Envoyer" />
                </div>
            </form>
            <Footer />
        </div>

    );
};


export default Contact; 
