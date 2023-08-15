import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import "./CarInputlist.css";
function CarInputFood(props) {
  const [Food, setFood] = useState([]);

  useEffect(() => {
    // Load data from local storage if available
    const storedProducts = JSON.parse(localStorage.getItem("Food"));
    if (storedProducts) {
       
      setFood(...Food, storedProducts)
        console.log(storedProducts);
       
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever products change
    const FoodCategory = props.senddata3.filter(
      (data) => data.category === "Food"
    );
    if(FoodCategory){
    setFood(FoodCategory)
    localStorage.setItem("Food", JSON.stringify(FoodCategory));
}
  }, [props.senddata3]);
  const removeHandler = (index) => {
      const updatedList= Food.filter((_,i)=>  i!==index)
    setFood( updatedList )
    localStorage.removeItem('Food', index)

  };
  return (
    <ul className="list2">
      <h3>Food: </h3>

      {Food.map((item, id) => (
        <li key={id}>
          {item.name} is listed at INR {item.price} comes under {item.category}
          Category
          <Button onClick={()=>removeHandler(id)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

export default CarInputFood;
