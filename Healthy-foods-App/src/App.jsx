import ErrorMessage from "./compnents/ErrorMessage";
import FoodItem from "./compnents/FoodItem";
import Heading from "./compnents/Heading";
import Container from "./compnents/Container";
import FoodInput from "./compnents/FoodInput"

function App() {

let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];
// let foodItems=[];

// if (foodItems.length===0) {
//   return <h3>I am still hungry.</h3>
// }

let textToshow="Food Item Entered by the user";

const handleOnChange=(event)=>{
  console.log(event.target.value);
  textToshow= event.target.value;
};

  return (
    <Container>
    {/* the list is independent of the number of items we have so we use map */}
    <Heading></Heading>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleOnchange={handleOnChange}></FoodInput>
      <p>{textToshow}</p>
      <FoodItem items={foodItems}></FoodItem>  
    </Container>
  )
}

export default App;
