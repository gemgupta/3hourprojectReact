import React, {useState} from 'react'
import './Cartinput.css'
import Button from '../UI/Button/Button'
function Cartinput(props) {
const [enteredid, setId] = useState('')
const [enteredPrice, setPrice] = useState('')
const [enteredName, setName] = useState('')
const [enteredCategory, setCategory] = useState('')
// const submit, setsubmit] = useState(second)

const idHandler= (event)=>{
    setId(event.target.value)
}
const priceHandler= (event)=>{
    setPrice(event.target.value)
}
const nameHandler= (event)=>{
    setName(event.target.value)
}
const categoryHandler= (event)=>{
    setCategory(event.target.value)
}
const SubmitHandler= (event)=>{
event.preventDefault();
const data={
    id: enteredid,
    price: enteredPrice,
    name: enteredName,
    category: enteredCategory
}
props.getdata(data)
// console.log(data)
setId('');
setName('');
setPrice('');
setCategory('Select Option')
}
  return (
 <form  className='form-control' onSubmit={SubmitHandler}>
    <label htmlFor="prodcutId">Product Id:</label>
    <input type="number" id='productId' value={enteredid} onChange={idHandler} />
    <label htmlFor="price">Price:</label>
    <input type="number" id='price' value= {enteredPrice}onChange={priceHandler}/>
    <label htmlFor="name">Product Name:</label>
    <input type="text" id='name'value={enteredName} onChange={nameHandler} />
    <label htmlFor="category">Category:</label>

<select name="category" id="category" value={enteredCategory}onChange={categoryHandler}>
  <option value="option">Select Option</option>
  <option value="Electronics">Electronics</option>
  <option value="Food">Food</option>
  <option value="Skincare">Skincare</option>
  
</select>
<Button type="Submit">Add Product</Button>
 </form>
  )
}

export default Cartinput