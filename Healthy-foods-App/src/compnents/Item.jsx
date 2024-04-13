import styles from "./Item.module.css";

const Item=({foodItems,bought, handleBuyButton})=>{
    

    return (
        <>
            <li  className={`list-group-item ${bought && "active"} `}>
                <span className="span">{foodItems}</span>
            <button className={`${styles.button} btn btn-success`} 
            onClick={handleBuyButton}>
                Buy</button>
            </li>
        </>
    )
}
export default Item;