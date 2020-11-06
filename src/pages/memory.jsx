import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import MemoryCarousel from '../components/Carousel/memory'


export default function Design() {
    return (
        <>  
            <Layout>
            <Header headerText="Memory Quilts"/>
                <p>My t-shirt quilts and memory quilts are made to be used, to be loved and to preserve those memories for years to come. You can find blankets made of t-shirts for much less money but to use an old cliché, “you get what you pay for”. There is nothing wrong with that but it will not preserve the integrity of the shirts or clothing used. 
                <br></br>
                Memory quilts are made from that old stack of concert T-shirts from high school, your daughter’s track T-shirts, or your mother’s favorite dresses. Cotton clothing and T-shirts are required to make a memory quilt. 
                    High-quality, cotton quilting materials are used for the backing and borders ajoining your clothing.</p>
                <MemoryCarousel />
            </Layout>
        </>
    )
}