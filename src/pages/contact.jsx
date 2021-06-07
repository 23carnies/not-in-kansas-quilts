import React from 'react';
import Header from '../components/header'
import styles from './index.module.css'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rq61ih6', 'template_ypi3a1g', e.target, 'user_RpE4R9r6kaSRMl4E0Jssd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <>
    <NavBar />
        <main className={styles.main}>
        <Header headerText="Questions? Get in touch!"/>
        <p>I'm excited to talk to you about a memory quilt gift, the new design quilt to match your bedroom, or a quilt gift for a baby or child. </p>
        <form className={styles.contactform} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label className={styles.label}>Email</label>
            <input type="email" 
            className={styles.input}
            name="reply_to"
            placeholder="jane@me.com"
            required
            />
            <label className={styles.label}>Name</label>
            <input type="text"
            className={styles.input}
            name="from_name"
            placeholder="Jane Doe"
            required
            />
            <label className={styles.label}>Subject</label>
            <input type="text"
            className={styles.input}
            name="subject"
            placeholder="Subject"
            />
            <label className={styles.label}>Message</label>
            <textarea type="text"
            className={styles.input}
            name="message"
            placeholder="Message"
            required
            />
            <input className={styles.button} type="submit" value="Send" />
        </form>
        </main>
    <Footer />
    </>

  );
}

