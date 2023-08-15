import React, { useEffect , useState} from 'react'

import './CarInputlist.css'
import Button from '../UI/Button/Button'
function CartInputSkin(props) {
    // console.log(props.senddata2)
    const [skin, setskin] = useState([])
    const SkinCategory = props.senddata2.filter((data) => data.category === "Skincare");
    useEffect(() => {
        // Load data from local storage if available
        const storedProducts = JSON.parse(localStorage.getItem('skin'));
        if (storedProducts) {
            setskin(storedProducts);
        //   console.log(storedProducts);
        }
      }, []);
    
      useEffect(() => {
        // Save data to local storage whenever products change
        localStorage.setItem('skin', JSON.stringify(SkinCategory));
    
        
      }, [ SkinCategory]);

  return (
    <ul className='list3'>
   
    
    <h3>SkinCare:</h3>

    {SkinCategory.map((item) => (
        <li key={item.id}>
          {item.name} is listed at INR {item.price} comes under {item.category} Category <Button type='submit'   >X</Button>
        </li>
      ))}
    
   </ul>
  )
}

export default CartInputSkin