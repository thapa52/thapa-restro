import React from 'react'
import aboutImg from './images/about/1.jpg';
import AboutIntro from './subcomponents/AboutIntro';
import Review from './subcomponents/Review';

const About = () => {
  return (
    <div className='about'>
        <img src={aboutImg} alt="about-img" />
        <AboutIntro />
        <Review />
    </div>
  )
}

export default About