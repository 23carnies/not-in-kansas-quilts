import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import DesignedCarousel from '../components/Carousel/designed'


export default function Design() {
    return (
        <>  
            <Layout>
            <Header headerText="Designed Quilts"/>
            <h3>These quality quilts are made from quilting patterns and using high-quality, quilting materials.</h3>
            <p>Whether there is a quilt design out there that you love or you want a one of a kind quilt, I can work with you to make it perfect. Quilts make a special gift for wedding or new baby, or a throw quilt to add to the décor of a room. Many of these quilts were made for my family, and your family will enjoy the same quality and care that they are made with.</p>            <DesignedCarousel />
            </Layout>
        </>
    )
}