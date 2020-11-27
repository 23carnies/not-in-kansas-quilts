import React, { Component, form } from 'react';
import Header from '../components/header'
import * as emailjs from 'emailjs-com'
import styles from './index.module.css'
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class Contact extends Component {
    state = { 
        name: '', 
        email: '',
        subject: '',
        message: '',
     }

    handleSubmit(e) {
        e.preventDefault()

        const { name, email, subject, message } = this.state

        let templateParams = {
            from_name: email,
            to_name: '<YOUR_EMAIL_ID',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            'gmail',
            'template_XXXXXXXX',
            templateParams,
            'user_XXXXXXXXXXXXXXXXXXX'
        )

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() { 
        return ( 
        <>
        <NavBar />
            <main className={styles.main}>
            <Header headerText="Questions? Get in touch!"/>
            <p>I'm excited to talk to you about a memory quilt gift, the new design quilt to match your bedroom, or a quilt gift for a baby or child. </p>
            <form className={styles.contactform} onSubmit={this.handleSubmit}>
                <input type="hidden" name="contact_number" />
                <label className={styles.label}>Email</label>
                <input type="email" 
                className={styles.input}
                name="email"
                value={this.state.email} 
                onChange={this.handleChange}
                placeholder="jane@me.com"
                />
                <label className={styles.label}>Name</label>
                <input type="text"
                className={styles.input}
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Jane Doe"
                />
                <label className={styles.label}>Subject</label>
                <input type="text"
                className={styles.input}
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                placeholder="Subject"
                />
                <label className={styles.label}>Message</label>
                <textarea type="text"
                className={styles.input}
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Message"
                />
                <input className={styles.button} type="submit" value="Send" />
            </form>
            </main>
        <Footer />
        </>
         );
    }
}
 
export default Contact;

