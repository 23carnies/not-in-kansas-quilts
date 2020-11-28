import React from "react"
import Header from "../components/header"
import styles from "./index.module.css"
import { Link } from 'gatsby'
import NavBar from "../components/navbar"
import Footer from "../components/footer"


export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.dorothy}></div>
      <main className={styles.main}>
        <Header headerText="Quality memory quilts and designed quilts"/>
        <h2>Made with care by Dorothy in Atlanta, Ga.</h2>
        <p>All of my quilts are made with top quality, 100% cotton materials, machine pieced by me with all the care and skill I can bring
                to each project. The most important thing to me is for you to be happy with your finished product. All quilts, except for small projects,
                are Long Arm Quilted by my close friend Glenna Ann Bowmaster of Fine Feathers Quilting. She works her magic, then I do the finish work.
                (All binding sewn down by hand.)</p>
        <div className={styles.flex}>
          <div className={styles.contact}>
            <h2>Ready for your new quilt? Have questions?</h2>
            <h3>Let's get started! Contact me <Link to="/contact">here</Link>.</h3>
          </div>
          <div className={styles.photobox}>
            <img src="https://i.imgur.com/oPj1lK1.jpg" alt="Patchwork quilt design on bed" className={styles.frontImg}/>
            <img src="https://i.imgur.com/CfrkfSg.jpg" alt="Kid quilt folded on couch" className={styles.frontImg}/>
            <img src="https://i.imgur.com/Iffb1KD.jpg" alt="Raiders quilt on bed" className={styles.frontImg}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
