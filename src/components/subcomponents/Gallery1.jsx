import React from 'react'
import gallery1img1 from '../images/gallery/gallery1/1.jpg';
import gallery1img2 from '../images/gallery/gallery1/2.jpg';
import gallery1img3 from '../images/gallery/gallery1/3.jpg';
import gallery1img4 from '../images/gallery/gallery1/4.jpg';
import gallery1img5 from '../images/gallery/gallery1/5.jpg';


const Gallery1 = () => {
  return (
    <section className='gallery1'>
        <div className='container'>
            <div className='section-title'>Gallery Feed</div>
            <h2>Check Our Gallery</h2>
            <div className='gallery1-slider'>
                <div className='gallery1-items'>
                    <img src={gallery1img1} alt='gallery1img1'/>
                    <p className='gallery1-title'>Chicken</p>
                </div>
                <div className='gallery1-items'>
                    <img src={gallery1img2} alt='gallery1img2'/>
                    <p className='gallery1-title'>Pasta</p>
                </div>
                <div className='gallery1-items'>
                    <img src={gallery1img3} alt='gallery1img3'/>
                    <p className='gallery1-title'>Egg</p>
                </div>
                <div className='gallery1-items'>
                    <img src={gallery1img4} alt='gallery1img4'/>
                    <p className='gallery1-title'>Ice Cream</p>
                </div>
                <div className='gallery1-items'>
                    <img src={gallery1img5} alt='gallery1img5'/>
                    <p className='gallery1-title'>Chicken</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery1