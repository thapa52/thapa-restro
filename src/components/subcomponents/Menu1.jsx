import React from 'react'
import { images1 } from './Image'
import MenuItem from './MenuItem'


const Menu1 = () => {

    

    return (
    <section className='menu1'>
    <div className='container'>
        <h2 className='section-title'>Our Menu</h2>
        <div className='row'>
            <div className='col col-lg-6'>
                <h3 className='menu-title'>Explore The Menu</h3>
            </div>
            <div className='col col-lg-6'>
                <div className='menu-nav'>
                    <li className='menu-list'>
                        <a className='menu-item' >
                            All Food
                        </a>
                    </li>
                    <li className='menu-list'>
                        <a className='menu-item'>
                            Chicken
                        </a>
                    </li><li className='menu-list'>
                        <a className='menu-item'>
                            Veg
                        </a>
                    </li><li className='menu-list'>
                        <a className='menu-item'>
                            Pizza
                        </a>
                    </li>
                </div>
            </div>
        </div>

       {images1.map((imageItem, index) =><MenuItem 
              key={index}
              id={index}
              img={imageItem.img}
              img2={imageItem.img2}
              title={imageItem.title}
              text={imageItem.text}
              price={imageItem.price}
            />)}

    </div>
    </section>
  )
}

export default Menu1