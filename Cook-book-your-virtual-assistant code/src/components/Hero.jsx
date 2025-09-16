import React from 'react'
import '../styles/Hero.css'
import heroImg1 from '../images/muttan.png1.jpg'
import heroImg2 from '../images/fish.png2.jpg'
import heroImg3 from '../images/beef.png3.webp'
import heroImg4 from '../images/pig.png4.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>One Plate , Endless Memories..</h1>
              <p>Crafted With tradition, Served with passion.</p>
              <a href="#recipies"><button>Recipies</button></a>
        </div>
        <div className="hero-images">
            <span className='span1'>
              <img src={heroImg2} alt="" />
              <img src={heroImg4} alt="" />
            </span>
            <span className='span2'>
              <img src={heroImg3} alt="" />
              <img src={heroImg1} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Hero