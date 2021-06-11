import React from 'react';
import emailjs from 'emailjs-com';
import './contactUs.css'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Plantasia', 'template_3y4e3jo', e.target, 'user_V094VAf60LccRlfHozDeK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
  <section className="contenedor-formulario">
      <h2 className="titleContacto">¡Estamos para ayudarte!</h2>
      <p className="texto" style={{marginBottom:"1.9em"}}>Escribinos tu consulta, en breve te responderemos.</p>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label className="texto2">Nombre y apellido</label>
      <input type="text" name="user_name" />
      <label className="texto2">Email</label>
      <input type="email" name="user_email" />
      <label className="texto2">Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" className="btn-enviar-form" style={{marginTop:"1.2em"}}/>
    </form>
  </section>
  );
}