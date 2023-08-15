import React , { useEffect, useState } from 'react'
import './CarInputlist.css'
import Button from '../UI/Button/Button'
function CarInputList(props) {
    // console.log(props.senddata1)
    const [electronics, setElectronics] = useState([])
    const ElectronicsCategory = props.senddata1.filter(
        (data) => data.category === "Electronics"
      );
    useEffect(() => {
        // Load data from local storage if available
        const storedProducts = JSON.parse(localStorage.getItem('Electronics'));
        if (storedProducts) {
            setElectronics(storedProducts);
        //   console.log(storedProducts);
        }
      }, []);
    
      useEffect(() => {
        // Save data to local storage whenever products change
        localStorage.setItem('Electronics', JSON.stringify(ElectronicsCategory));
    
        
      }, [ElectronicsCategory]);
  return (
   <ul className='list1'>
   
    
    <h3>Electronics:</h3>
  
    {ElectronicsCategory.map((item) => (
        <li key={item.id}>
          {item.name} is listed at INR {item.price} comes under {item.category} Category  <Button type='submit'  >X</Button>
        </li>
      ))}
    
   </ul>
  )
}

export default CarInputList