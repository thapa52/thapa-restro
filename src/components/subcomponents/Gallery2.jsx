import React from 'react'
import galleryImg1 from '../images/gallery/gallery2/1.jpg';
import galleryImg2 from '../images/gallery/gallery2/2.jpg';
import galleryImg3 from '../images/gallery/gallery2/3.jpg';
import galleryImg4 from '../images/gallery/gallery2/4.jpg';
import galleryImg5 from '../images/gallery/gallery2/5.jpg';
import galleryImg6 from '../images/gallery/gallery2/6.jpg';
import galleryImg7 from '../images/gallery/gallery2/7.jpg';
import galleryImg8 from '../images/gallery/gallery2/8.jpg';


const Gallery2 = () => {
  return (
    <section className='gallery'>
        <div className='container'>
            <div className='section-title'>Gallery Feed</div>
            <h2>Check Our Gallery</h2>
            <div className='gallery-slider'>
                <div className='gallery-items'>
                    <img src={galleryImg1} alt='galleryImg1'/>
                    <p className='gallery-title'>Chicken</p>
                </div>
                <div className='gallery-items'>
                    <img src={galleryImg2} alt='galleryImg2'/>
                    <p className='gallery-title'>Pasta</p>
                </div>
                <div className='gallery-items'>
                    <img src={galleryImg3} alt='galleryImg3'/>
                    <p className='gallery-title'>Egg</p>
                </div>
                <div className='gallery-items'>
                    <img src={galleryImg4} alt='galleryImg4'/>
                    <p className='gallery-title'>Ice Cream</p>
                </div>
                <div className='gallery-items'>
                    <img src={galleryImg5} alt='galleryImg5'/>
                    <p className='gallery-title'>Chicken</p>
                </div>
                <div className='gallery-items'>
                    <img src={galleryImg6} alt='galleryImg6'/>
                    <p className='gallery-title'>Chicken</p>
                </div>                
                <div className='gallery-items'>
                    <img src={galleryImg7} alt='galleryImg7'/>
                    <p className='gallery-title'>Chicken</p>
                </div>                
                <div className='gallery-items'>
                    <img src={galleryImg8} alt='galleryImg8'/>
                    <p className='gallery-title'>Chicken</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery2