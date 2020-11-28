import React from 'react'
import Header from '../components/header'
import MemoryCarousel from '../components/Carousel/memory'
import styles from './index.module.css'
import NavBar from '../components/navbar'
import Footer from '../components/footer'


export default function Design() {
    return (
        <>  
            <NavBar />
            <main className={styles.main}>
            <Header headerText="Memory Quilts"/>
                <p>My t-shirt quilts and memory quilts are made to be used, to be loved, and to preserve the memories and the clothing for years to come. Memory quilts are made from that old stack of concert T-shirts from high school, your daughter’s track T-shirts, or your mother’s favorite dresses. Cotton clothing and T-shirts are required to make a memory quilt. High-quality, cotton quilting materials are used for the backing and borders ajoining your clothing.</p>
                <MemoryCarousel />
            </main>
            <Footer />
        </>
    )
}