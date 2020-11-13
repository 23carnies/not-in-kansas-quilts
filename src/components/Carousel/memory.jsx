import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from './carousel.module.css'

class MemoryCarousel extends Component {
    state = {
        memoryQuilts: [
            {
                img: "https://i.imgur.com/BYdC9He.jpg",
                legend: "Road Race Memories",
                alt: "Road Race T-shirt quilt on bed",
                idx: 0
            },
            {
                img: "https://i.imgur.com/wFqCQUG.jpg",
                legend: "",
                alt: "quilt inscription",
                idx: 1
            },
            {
                img: "https://i.imgur.com/iosManE.jpg",
                legend: "Wedding Guestbook",
                alt: "Wedding quilt on bed",
                idx: 2
            },
            {
                img: "https://i.imgur.com/j5Njxri.jpg",
                legend: "",
                alt: "wedding quilt detail ",
                idx: 3
            },
            {
                img: "https://i.imgur.com/OOVjHy5.jpg",
                legend: "Pastor's Retirement",
                alt: "Church T-shirt quilt on bed",
                idx: 4
            },
            {
                img: "https://i.imgur.com/iDj5jfu.jpg",
                legend: "It's All About Baseball",
                alt: "Baseball T-shirt quilt on bed",
                idx: 5
            },
            {
                img: "https://i.imgur.com/BzgcB8u.jpg",
                legend: "Church Memories",
                alt: "Church T-shirt quilt on bed",
                idx: 6
            },
            {
                img: "https://i.imgur.com/C8J7AXI.jpg",
                legend: "College Graduation",
                alt: "Graduation T-shirt quilt on bed",
                idx: 7
            },
            {
                img: "https://i.imgur.com/KeN2m4C.jpg",
                legend: "Brother's Favorite Things",
                alt: "T-shirt quilt on bed",
                idx: 8
            },
            {
                img: "https://i.imgur.com/6zRrcfS.jpg",
                legend: "Greek Memories",
                alt: "college T-shirt quilt on bed",
                idx: 9
            },
            {
                img: "https://i.imgur.com/h1vhxkD.jpg",
                legend: "",
                alt: "college T-shirt quilt detail",
                idx: 10
            },
            {
                img: "https://i.imgur.com/h1meqoO.jpg",
                legend: "Mother's Clothes for Three Sisters",
                alt: "two quilts made from woman's clothing",
                idx: 11
            },
            {
                img: "https://i.imgur.com/ekILVUs.jpg",
                legend: "Mother's Clothes for Three Sisters",
                alt: "Quilt made from woman's clothing",
                idx: 12
            },
            {
                img: "https://i.imgur.com/nHhx4lP.jpg",
                legend: "Memories of Mom and Dad",
                alt: "Photo quilt",
                idx: 13
            },
            {
                img: "https://i.imgur.com/h9qrNK3.jpg",
                legend: "",
                alt: "Photo quilt",
                idx: 14
            },
            {
                img: "https://i.imgur.com/2rWtFEM.jpg",
                legend: "Athlete's Memory Quilt",
                alt: "T-shirt quilt on bed",
                idx: 15
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