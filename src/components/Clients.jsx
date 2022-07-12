import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { clientImage } from './subcomponents/ClientImage'
import ClientImg from './subcomponents/ClientImg'


const Clients = () => {
  return (
    <section className='clients'>
        <h2 className='section-title'>Corporate Clients</h2>
        <div className='container'>
        <OwlCarousel items={4} margin={8} autoPlay={true} >
          {clientImage.map((client,index) => <ClientImg 
            key={index}
            id={index}
            img={client.img}
            title={client.title}
          />)}
          </OwlCarousel>
        </div>
    </section>
  )
}

export default Clients