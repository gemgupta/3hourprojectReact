import React from 'react'
import './CarInputlist.css'
function CarInputList(props) {
  return (
   <ul className='list1'>
   
    
    <h3>Electronics:</h3>
    {props.senddata1.map((item) => (
        <li key={item.id}>
          {item.name} is listed at INR {item.price} comes under {item.category} Category
        </li>
      ))}
    
   </ul>
  )
}

export default CarInputList