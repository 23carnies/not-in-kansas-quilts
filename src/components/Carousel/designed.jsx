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
                alt: "Wizard of Oz Quilt on Bed",
                idx: 0
            },
            {
                img: "https://i.imgur.com/WwoVYOB.jpg",
                legend: "Wizard of Oz Sepia",
                alt: "Wizard of Oz Sepia Quilt",
                idx: 1
            },
            {
                img: "https://i.imgur.com/rozmNrS.jpg",
                legend: "Wizard of Oz Sepia Detail",
                alt: "Wizard of Oz Sepia Quilt close up",
                idx: 2
            },
            {
                img: "https://i.imgur.com/10iMxfw.jpg",
                legend: "Wave Quilt",
                alt: "wave quilt on banister",
                idx: 3
            },
            {
                img: "https://i.imgur.com/I3lZCNN.jpg",
                legend: "",
                alt: "wave quilt close up",
                idx: 4
            },
            {
                img: "https://i.imgur.com/jzvDLDJ.jpg",
                legend: "Raiders Team Quilt",
                alt: "",
                idx: 5
            },
            {
                img: "https://i.imgur.com/xmuajgv.jpg",
                legend: "",
                alt: "",
                idx: 6
            },
            {
                img: "https://i.imgur.com/3cKXxHo.jpg",
                legend: "",
                alt: "",
                idx: 7
            },
            {
                img: "https://i.imgur.com/UayQNLw.jpg",
                legend: "",
                alt: "",
                idx: 8
            },
            {
                img: "https://i.imgur.com/qxiVoFX.jpg",
                legend: "Eye Spy Kids' Quilt",
                alt: "Eye Spy Kids' Quilt",
                idx: 9
            },
            {
                img: "https://i.imgur.com/msCMHyD.jpg",
                legend: "",
                alt: "Eye Spy Kids' Quilt close up",
                idx: 10
            },
            {
                img: "https://i.imgur.com/kvbnSvV.jpg",
                legend: "",
                alt: "Eye Spy Kids' Quilt close up",
                idx: 11
            },
            {
                img: "https://i.imgur.com/O8q48LW.jpg",
                legend: "Sesame Street",
                alt: "Sesame Street Quilt on Banister",
                idx: 12
            },
            {
                img: "https://i.imgur.com/G0WkKE8.jpg",
                legend: "",
                alt: "Sesame Street Quilt close up",
                idx: 13
            },
            {
                img: "https://i.imgur.com/D6eS3im.jpg",
                legend: "Ombre Wave Quilt",
                alt: "blue and green ombre quilt on bed",
                idx: 14
            },
            {
                img: "https://i.imgur.com/0pEcDKP.jpg",
                legend: "",
                alt: "blue and green ombre quilt close up",
                idx: 15
            },
            {
                img: "https://i.imgur.com/c1FjeOI.jpg",
                legend: "",
                alt: "",
                idx: 16
            },
            {
                img: "https://i.imgur.com/6sItrtG.jpg",
                legend: "",
                alt: "",
                idx: 17
            },
            {
                img: "https://i.imgur.com/60IkbXR.jpg",
                legend: "Stained Glass Quilt",
                alt: "Stained Glass Quilt on Bed",
                idx: 20
            },
            {
                img: "https://i.imgur.com/9gR6Mye.jpg",
                legend: "",
                alt: "Close up of stained glass quilt",
                idx: 21
            },
            {
                img: "https://i.imgur.com/fawWFrU.jpg",
                legend: "Christmas Fringe Quilt",
                alt: "Christmas quilt",
                idx: 22
            },
            {
                img: "https://i.imgur.com/sRIxj8D.jpg",
                legend: "",
                alt: "Christmas Quilt Detail",
                idx: 23
            },
            {
                img: "https://i.imgur.com/NgzWWSx.jpg",
                legend: "Kid's Maze Quilt",
                alt: "Kid's Maze Quilt",
                idx: 24
            },
            {
                img: "https://i.imgur.com/AJrnE5E.jpg",
                legend: "",
                alt: "Kid's Maze Quilt Detail",
                idx: 25
            },
            {
                img: "[img]https://i.imgur.com/YaL4Ya5.jpg[/img]",
                legend: "Candle Hanging Piece",
                alt: "Stained glass looking candle hanging quilt",
                idx: 27
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