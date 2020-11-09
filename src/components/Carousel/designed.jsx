import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from './carousel.module.css'

class DesignedCarousel extends Component {
    state = { 
        designedQuilts: [
            {
                img: "https://i.imgur.com/fTNNVRd.jpg",
                legend: "Wizard of Oz Color",
                alt: "Wizard of Oz Quilt on Bed"
            },
            {
                img: "https://i.imgur.com/WwoVYOB.jpg",
                legend: "Wizard of Oz Sepia",
                alt: "Wizard of Oz Sepia Quilt"
            },
            {
                img: "https://i.imgur.com/rozmNrS.jpg",
                legend: "Wizard of Oz Sepia Detail",
                alt: "Wizard of Oz Sepia Quilt close up"
            },
            {
                img: "https://i.imgur.com/10iMxfw.jpg",
                legend: "Wave Quilt",
                alt: "wave quilt on banister"
            },
            {
                img: "https://i.imgur.com/I3lZCNN.jpg",
                legend: "",
                alt: "wave quilt close up"
            },
            {
                img: "https://i.imgur.com/jzvDLDJ.jpg",
                legend: "Raiders Team Quilt",
                alt: ""
            },
            {
                img: "https://i.imgur.com/xmuajgv.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/3cKXxHo.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/UayQNLw.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/qxiVoFX.jpg",
                legend: "Eye Spy Kids' Quilt",
                alt: "Eye Spy Kids' Quilt"
            },
            {
                img: "https://i.imgur.com/msCMHyD.jpg",
                legend: "",
                alt: "Eye Spy Kids' Quilt close up"
            },
            {
                img: "https://i.imgur.com/kvbnSvV.jpg",
                legend: "",
                alt: "Eye Spy Kids' Quilt close up"
            },
            {
                img: "https://i.imgur.com/O8q48LW.jpg",
                legend: "Sesame Street",
                alt: "Sesame Street Quilt on Banister"
            },
            {
                img: "https://i.imgur.com/G0WkKE8.jpg",
                legend: "",
                alt: "Sesame Street Quilt close up"
            },
            {
                img: "https://i.imgur.com/D6eS3im.jpg",
                legend: "Ombre Wave Quilt",
                alt: "blue and green ombre quilt on bed"
            },
            {
                img: "https://i.imgur.com/0pEcDKP.jpg",
                legend: "",
                alt: "blue and green ombre quilt close up"
            },
            {
                img: "https://i.imgur.com/c1FjeOI.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/6sItrtG.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/sRIxj8D.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/fawWFrU.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "https://i.imgur.com/60IkbXR.jpg",
                legend: "Stained Glass Quilt",
                alt: "Stained Glass Quilt on Bed"
            },
            {
                img: "https://i.imgur.com/9gR6Mye.jpg",
                legend: "",
                alt: "Close up of stained glass quilt"
            },
            {
                img: "https://i.imgur.com/fawWFrU.jpg",
                legend: "Christmas Fringe Quilt",
                alt: "Christmas quilt"
            },
            {
                img: "https://i.imgur.com/sRIxj8D.jpg",
                legend: "",
                alt: "Christmas Quilt Detail"
            },
            {
                img: "https://i.imgur.com/NgzWWSx.jpg",
                legend: "Kid's Maze Quilt",
                alt: "Kid's Maze Quilt"
            },
            {
                img: "https://i.imgur.com/AJrnE5E.jpg",
                legend: "",
                alt: "Kid's Maze Quilt Detail"
            },
            {
                img: "https://i.imgur.com/76Duw1U.jpg",
                legend: "Butterfly Hanging Piece",
                alt: "Butterfly quilt hanging piece"
            },
            {
                img: "[img]https://i.imgur.com/YaL4Ya5.jpg[/img]",
                legend: "Candle Hanging Piece",
                alt: "Stained glass looking candle hanging quilt"
            },
        ]
     }
    render() { 
        return ( 
            <Carousel dynamicHeight={true} autoPlay={true}>
                {this.state.designedQuilts.map((quilt, idx) => 
                    <div>
                        key={idx}
                        <img src={quilt.img} alt={quilt.alt}/>
                        <p className="legend">{quilt.legend}</p>
                    </div>    
                )}
            </Carousel>
         );
    }
}
 
export default DesignedCarousel;