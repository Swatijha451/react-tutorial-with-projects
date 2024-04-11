import styles from "./Item.module.css";

const Item=({foodItems, handleBuyButton})=>{
    

    return (
        <>
            <li  className="list-group-item"><span className="span">{foodItems}</span><button className={`${styles.button} btn btn-success`} onClick={handleBuyButton}>Buy</button></li>
        </>
    )
}
export default Item;