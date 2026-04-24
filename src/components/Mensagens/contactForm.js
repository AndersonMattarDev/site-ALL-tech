import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Message.module.css';

const ContactForm = () => {
  const form = useRef();

  const [message, setMessage] = useState(null);
  const [type, setType] = useState(""); // success | error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hyw1vxq',
        'template_ffzwchq',
        form.current,
        'P67QonVJk7Y6lEdUB'
      )
      .then((result) => {
        setMessage('Mensagem enviada com sucesso!');
        setType('success');

        resetForm();

        setTimeout(() => {
          setMessage(null);
          setType('');
        }, 5000);

        console.log("SUCCESS:", result.text);
      })
      .catch((error) => {
        setMessage('Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde!');
        setType('error');

        setTimeout(() => {
          setMessage(null);
          setType('');
        }, 5000);

        console.error("ERROR:", error.text);
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div>
      {message && (
        <p className={`${styles.message} ${styles[type]}`}>
          {message}
        </p>
      )}

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Nome:</label>
        <input type="text" name="name" className={styles.name} required />

        <label>Email:</label>
        <input type="email" name="email" className={styles.email} required />

        <label>Mensagem:</label>
        <textarea name="message" className={styles.txt} required />

        <input type="submit" value="Enviar" className={styles.btn} />
      </form>
    </div>
  );
};

export default ContactForm;