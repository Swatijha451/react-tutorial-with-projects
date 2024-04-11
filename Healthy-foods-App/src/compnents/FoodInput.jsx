import styles from "./FoodInput.module.css";

const FoodInput=({handleOnChange})=>{
return <input type="text"  className={styles.inputBox} placeholder="Enter your food item here" onChange={handleOnChange}/>
}
export default FoodInput;