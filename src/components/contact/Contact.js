import React, {useRef} from 'react'
import {ContactContainer, Heading, ContactForm, ContactTitle, ContactInput, ContactInputMessage, Description, ContactButton} from './ContactStyle'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zp3sd4i', 'template_kz3v9bx', form.current, 'Y1ZsjxxzjuKqB_h5L')
      .then((result) => {
          console.log(result.text);
          setOpen(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <ContactContainer id='contact'>
      <Heading>Contact</Heading>
      <Description>Feel free to reach out to me</Description>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <ContactTitle>Email Me</ContactTitle>
        <ContactInput placeholder="Your Email" name="from_email"/>
        <ContactInput placeholder="Your Name" name="from_name"/>
        <ContactInput placeholder="Subject" name="subject"/>
        <ContactInputMessage placeholder="Message" rows= "4" name="message"/>
        <ContactButton type="submit" value="Send">Send</ContactButton>
      </ContactForm>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={()=>setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />

    </ContactContainer>
  )
}

export default Contact
