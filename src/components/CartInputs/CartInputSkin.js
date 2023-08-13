import React from 'react'
import './CarInputlist.css'

function CartInputSkin(props) {
  return (
    <ul className='list3'>
   
    
    <h3>SkinCare:</h3>
    {props.senddata2.map((item) => (
        <li key={item.id}>
          {item.name} is listed at INR {item.price} comes under {item.category} Category
        </li>
      ))}
    
   </ul>
  )
}

export default CartInputSkin