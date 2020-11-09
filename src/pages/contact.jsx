import React, { Component, form } from 'react';
import Layout from '../components/layout'
import Header from '../components/header'
import * as emailjs from 'emailjs-com'
import styles from './index.module.css'

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
            <Layout>
            <Header headerText="Questions? Get in touch!"/>
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
            </Layout>
        </>
         );
    }
}
 
export default Contact;

