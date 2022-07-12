import React from 'react'

const ClientImg = (props) => {
  return (
    <div className='client-img'>
        <img src={props.img} alt={props.title} height={65}/>
    </div>
  )
}

export default ClientImg