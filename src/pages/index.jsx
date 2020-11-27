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
        <h3>Ready for your quilt? Have questions?</h3>
        <h4>Contact me <Link to="/contact">here</Link></h4>
      </main>
      <Footer />
    </>
  )
}
