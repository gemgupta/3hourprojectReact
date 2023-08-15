import React, { useState } from "react";
// import ProductForm from "./components/ProductForm/ProductForm";
import CarInputList from "./components/CartInputs/CarInputList";
import Cartinput from "./components/CartInputs/Cartinput";
import CartInputSkin from "./components/CartInputs/CartInputSkin";
import CarInputFood from "./components/CartInputs/CarInputFood";

function App() {
  const [data, setData] = useState([]);


  const getdatahandler = (data) => {
    // localStorage.setItem(data.id, JSON.stringify(data))
    setData((prevdata) => {
      return [...prevdata, data];
    });
  };

  // const handleRemove = (data, index) => {
  //   setData((prevProducts) => {
  //     const updatedCategory = data.filter((id) => data.id !== index);
  //     return [...prevProducts,  updatedCategory ] ;
  //   });
  // };

  return (
    <main>
      <Cartinput getdata={getdatahandler} />
      <CarInputList senddata1={data} />
      <CartInputSkin senddata2={data} />
      <CarInputFood senddata3={data} />
    </main>
  );
}

export default App;
