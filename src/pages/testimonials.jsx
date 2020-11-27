import React from 'react'
import styles from './index.module.css'
import Header from '../components/header'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Design() {
    return (
        <>  
        <NavBar />
            <main className={styles.main}>
            <Header headerText="Accolades from Happy Customers"/>
            
            <div>
                <h2>Memory Quilt Gift</h2>
                <p>&quot;I have attached several pictures of Danielle's fabulous T-Shirt quilt.
                Dorothy, we just love it!  I have included pictures with the quilt and pictures that I hope will highlight your superb work.
                Also, I have a friend from church [who] is interested in seeing what a fabulous artisan like you can do with a pile of worn t-shirts!&quot;<br></br>
                <strong>-Ellen</strong></p>
            </div>
            <div className={styles.photobox}>
                <img src="https://i.imgur.com/2rWtFEM.jpg" className={styles.testimage} alt="T-shirt quilt on bed"/>
                <img src="https://i.imgur.com/oK9k6pt.jpg" className={styles.testimage} alt="Woman standing next to quilt on bed"/>
                <img src="https://i.imgur.com/3LsIRzP.jpg" className={styles.testimage} alt="Close up of quilt"/>
            </div>
            <div>
                <h2>Race T-Shirt Quilt</h2>
                <p>&quot;My dad was so impressed with this gift. The quality and weight of the quilt is great. It feels soft yet sturdy. 
                The quilt is so beautiful! You did such a great job with the colors. This is his favorite thing now.&quot;<br></br>
            <strong>-Karen</strong></p>
            </div>
            <div className={styles.photobox}>
                <img src="https://i.imgur.com/17KeUs5.jpg" className={styles.testimage} alt="Tshirt quilt on bed"></img>
                <img src="https://i.imgur.com/wFqCQUG.jpg" className={styles.testimage} alt="Close up of quilt inscription"></img>
                <img src="https://i.imgur.com/lOZ2eWm.jpg" className={styles.testimage} alt="Man holding quilt"></img>
            </div>
            </main>
        <Footer />
        </>
    )
}