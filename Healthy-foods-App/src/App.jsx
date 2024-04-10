import ErrorMessage from "./compnents/ErrorMessage";
import FoodItem from "./compnents/FoodItem";
import Container from "./compnents/Container";
import Heading from "./compnents/Heading";

function App() {

let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];
// let foodItems=[];

// if (foodItems.length===0) {
//   return <h3>I am still hungry.</h3>
// }



  return (
    <Container>
    {/* the list is independent of the number of items we have so we use map */}
    <Heading></Heading>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
      
    </Container>
  )
}

export default App;
