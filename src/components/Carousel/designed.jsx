import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from './carousel.module.css'

class DesignedCarousel extends Component {
    state = { 
        designedQuilts: [
            {
                img: "/images/designed/WooColorOnBedStraight.jpg",
                legend: "Wizard of Oz Color",
                alt: "Wizard of Oz Quilt on Bed"
            },
            {
                img: "/images/designed/WooSepiaRainbow.jpg",
                legend: "Wizard of Oz Sepia",
                alt: ""
            },
            {
                img: "/images/designed/WooSepiaDetailFilm.jpg",
                legend: "Wizard of Oz Sepia Detail",
                alt: ""
            },
            {
                img: "/images/designed/WaveQuiltOnBanister.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/WaveQuiltDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/RaidersQuiltOnBanister.jpg",
                legend: "Raiders Team Quilt",
                alt: ""
            },
            {
                img: "/images/designed/RaidersQuiltDetailBacking.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/SpinnerQuiltOnBedBacking.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/SpinnerQuiltDetailBlock2.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/eyeSpyFull.JPG",
                legend: "Eye Spy Kids' Quilt",
                alt: ""
            },
            {
                img: "/images/designed/eyeSpyPartial.JPG",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/eyeSpyDetail.JPG",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/KidsQuiltSesameOnBanister.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/KidStreetQuiltDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/OmbreQuiltOnBed.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/OmbreQuiltDetailBacking.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/FallSnowflakeOnBedBacking.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/FallSnowflakeDetailPerspective.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/PatchworkOnBannister.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/PatchworkDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/stainedGlassOnBed.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/stainedGlassDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/ReindeerQuiltFringeFullOnBed.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/ReindeerQuiltFringeDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/KidMazeQuiltOnBanister.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/KidMazeQuiltBackingDetail.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/ButterflyPatchworkHangPiece.jpg",
                legend: "",
                alt: ""
            },
            {
                img: "/images/designed/CandleHangPiece.jpg",
                legend: "",
                alt: ""
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