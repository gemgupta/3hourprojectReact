import React, { useState } from "react";
import CarInputList from "./components/CartInputs/CarInputList";
import Cartinput from "./components/CartInputs/Cartinput";
import CartInputSkin from "./components/CartInputs/CartInputSkin";
import CarInputFood from "./components/CartInputs/CarInputFood";

function App() {
  const [data, setData] = useState([]);
  const getdatahandler = (data) => {
    setData((prevdata) => {
      return [...prevdata, data];
    });
  };
  const FoodCategory = data.filter((data) => data.category === "Food");
  const SkinCategory = data.filter((data) => data.category === "SkinCare");
  const ElectronicsCategory = data.filter((data) => data.category === "Electronics");
  // console.log(FoodCategory,SkinCategory, ElectronicsCategory);
  // console.log(data);
  return (
    <main>
      <Cartinput getdata={getdatahandler} />
      <CarInputList senddata1={ElectronicsCategory} />
      <CartInputSkin senddata2={SkinCategory} />
      <CarInputFood senddata3={FoodCategory} />
    </main>
  );
}

export default App;
