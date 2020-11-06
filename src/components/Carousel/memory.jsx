import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from './carousel.module.css'

class MemoryCarousel extends Component {
    state = {
        memoryQuilts: [
            {
                img: "/images/memory/roadRaceMemoryQuiltWBacking.jpg",
                legend: "Road Race Memories",
                alt: "Road Race T-shirt quilt on bed"
            },
            {
                img: "/images/memory/raceQuiltInscription.jpg",
                legend: "",
                alt: "quilt inscription"
            },
            {
                img: "/images/memory/WeddingQuiltOnBed.jpg",
                legend: "Wedding Guestbook",
                alt: "Wedding quilt on bed"
            },
            {
                img: "/images/memory/WeddingQuiltOnBedBacking.jpg",
                legend: "",
                alt: "wedding quilt detail "
            },
            {
                img: "/images/memory/Pastors_Retirement.jpg",
                legend: "Pastor's Retirement",
                alt: "Church T-shirt quilt on bed"
            },
            {
                img: "/images/memory/Baseball.jpg",
                legend: "It's All About Baseball",
                alt: "Baseball T-shirt quilt on bed"
            },
            {
                img: "/images/memory/churchMemory.jpg",
                legend: "Church Memories",
                alt: "Church T-shirt quilt on bed"
            },
            {
                img: "/images/memory/Graduation_gift.jpg",
                legend: "College Graduation",
                alt: "Graduation T-shirt quilt on bed"
            },
            {
                img: "/images/memory/ABrothers-favorite-things.jpg",
                legend: "Brother's Favorite Things",
                alt: "T-shirt quilt on bed"
            },
            {
                img: "/images/memory/2greekMemoryFull.jpg",
                legend: "Greek Memories",
                alt: "college T-shirt quilt on bed"
            },
            {
                img: "/images/memory/2greekMemoryClose.jpg",
                legend: "",
                alt: "college T-shirt quilt detail"
            },
            {
                img: "/images/memory/mothersClothesDouble.jpg",
                legend: "Mother's Clothes for Three Sisters",
                alt: "two quilts made from woman's clothing"
            },
            {
                img: "/images/memory/mothersClothesFor3Sisters.jpg",
                legend: "Mother's Clothes for Three Sisters",
                alt: "Quilt made from woman's clothing"
            },
            {
                img: "/images/memory/memoriesOfMomAndDad.jpg",
                legend: "Memories of Mom and Dad",
                alt: "Photo quilt"
            },
            {
                img: "/images/memory/memoriesOfMomAndDadDetail.jpg",
                legend: "",
                alt: "Photo quilt"
            },
            {
                img: "/images/memory/shirtHenryCo2.jpg",
                legend: "Athlete's Memory Quilt",
                alt: "T-shirt quilt on bed"
            },
            {
                img: "/images/memory/shirtHenryCo4.jpg",
                legend: "",
                alt: "T-shirt quilt on bed detail"
            },
            
        ]
    }
    render () {
        return (
            <Carousel dynamicHeight={true} autoPlay={true}>
              {this.state.memoryQuilts.map((quilt, idx) => 
                    <div>
                        key={idx}
                        <img src={quilt.img} alt={quilt.alt}/>
                        <p className="legend">{quilt.legend}</p>
                    </div>    
                )}
            </Carousel>
            
        )
    }
}

export default MemoryCarousel;