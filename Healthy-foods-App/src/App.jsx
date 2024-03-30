import ErrorMessage from "./compnents/ErrorMessage";
import FoodItem from "./compnents/FoodItem";

function App() {

let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];
// let foodItems=[];

// if (foodItems.length===0) {
//   return <h3>I am still hungry.</h3>
// }



  return (
    <>
    {/* the list is independent of the number of items we have so we use map */}
    <h1>Healthy food list</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItem items={foodItems}></FoodItem>
      
    </>
  )
}

export default App;
