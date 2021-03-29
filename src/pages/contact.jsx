import React, { Component, form } from 'react';
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
            name="email"
            // value={this.state.email} 
            // onChange={this.handleChange}
            placeholder="jane@me.com"
            />
            <label className={styles.label}>Name</label>
            <input type="text"
            className={styles.input}
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
            placeholder="Jane Doe"
            />
            <label className={styles.label}>Subject</label>
            <input type="text"
            className={styles.input}
            name="subject"
            // value={this.state.subject}
            // onChange={this.handleChange}
            placeholder="Subject"
            />
            <label className={styles.label}>Message</label>
            <textarea type="text"
            className={styles.input}
            name="message"
            // value={this.state.message}
            // onChange={this.handleChange}
            placeholder="Message"
            />
            <input className={styles.button} type="submit" value="Send" />
        </form>
        </main>
    <Footer />
    </>

  );
}

