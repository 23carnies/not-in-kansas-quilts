import React from 'react'
import styles from './index.module.css'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Design() {
    return (
        <>  
            <Layout>
            <div className={styles.main}>

            <Header headerText="Accolades from Happy Customers"/>
            
            <div>
                <h2>Memory Quilt Gift</h2>
                <p>&quot;I have attached several pictures of Danielle's fabulous T-Shirt quilt.
                Dorothy, we just love it!  I have included pictures with the quilt and pictures that I hope will highlight your superb work.
                Also, I have a friend from church [who] is interested in seeing what a fabulous artisan like you can do with a pile of worn t-shirts!&quot;
                <strong>-Ellen</strong></p>
            </div>
            <div className={styles.photobox}>
                <img src="/images/shirtHenryCo2.jpg" className={styles.testimage} alt="T-shirt quilt on bed"/>
                <img src="/images/shirtHenryCo3.jpg" className={styles.testimage} alt="Woman standing next to quilt on bed"/>
                <img src="/images/shirtHenryCo4.jpg" className={styles.testimage} alt="Close up of quilt"/>
            </div>
            <div>
                <h2>Race T-Shirt Quilt</h2>
                <p>&quot;My dad was so impressed with this gift. The quilt is so beautiful! You did such a great job with the colors. This is his favorite thing now.&quot;
            <strong>-Karen</strong></p>
            </div>
            <div className={styles.photobox}>
                <img src="./images/raceQuiltInscription.jpg" className={styles.testimage} alt="Tshirt quilt on bed"></img>
                <img src="./images/raceTshirtQuilt.jpg" className={styles.testimage} alt="Close up of quilt inscription"></img>
                <img src="./images/raceQuiltOnBed.jpg" className={styles.testimage} alt="Man holding quilt"></img>
            </div>
            </div>
            </Layout>
        </>
    )
}