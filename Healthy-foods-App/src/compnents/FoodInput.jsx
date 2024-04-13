import styles from "./FoodInput.module.css";

const FoodInput=({handleOnKeyDown})=>{
return <input 
type="text"  
className={styles.inputBox} 
placeholder="Enter your food item here" 
onKeyDown={handleOnKeyDown}
/>
}
export default FoodInput;