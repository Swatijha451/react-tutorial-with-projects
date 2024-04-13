import ErrorMessage from "./compnents/ErrorMessage";
import FoodItem from "./compnents/FoodItem";
import Heading from "./compnents/Heading";
import Container from "./compnents/Container";
import FoodInput from "./compnents/FoodInput"
import { useState } from "react";

function App() {

// let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];
// let foodItems=[];

// if (foodItems.length===0) {
//   return <h3>I am still hungry.</h3>
// }

// let textToshow="Food Item Entered by the user";
let [foodItems,setFoodItems]=useState(["apple"]);

const onKeyDown = (event) => {
  console.log(event);
  setFoodItems(event.target.value);
  // // console.log(event)
  // // setFoodItems(event.target.value);
  // if(event.key === "Enter"){
  //   let newFoodItem=event.target.value;
  //   // console.log(newFoodItem);
  //   event.target.value="";
  //   let newItems=[...foodItems,newFoodItem];
  //   setFoodItems(newItems);
  // }
};

  return (
    <Container>
    {/* the list is independent of the number of items we have so we use map */}
    <Heading></Heading>
      <FoodInput handleOnkeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <p>{textToshow}</p> */}
      <FoodItem items={foodItems}></FoodItem>  
    </Container>
  )
}

export default App;
