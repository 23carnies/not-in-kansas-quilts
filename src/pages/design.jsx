import React from 'react'
import Header from '../components/header'
// import Layout from '../components/layout'
import DesignedCarousel from '../components/Carousel/designed'
import NavBar from '../components/navbar'
import styles from "./index.module.css"



export default function Design() {
    return (
        <>  
        <NavBar />
            {/* <Layout> */}
            <main className={styles.main}>
            <Header headerText="Designed Quilts"/>
            <p>All my designed quilts are made with high-quality, cotton quilting materials. Whether there is a quilt design out there that you love or you want a one of a kind quilt, I can work with you to make it perfect. Quilts make a special gift for wedding or new baby, or a throw quilt to add to the décor of a room. Many of these quilts were made for my family, and your family will enjoy the same quality and care that they are made with.</p>            
            <DesignedCarousel />
            {/* </Layout> */}
            </main>
        </>
    )
}