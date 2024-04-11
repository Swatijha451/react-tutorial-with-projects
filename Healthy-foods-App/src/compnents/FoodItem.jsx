import Item from "./Item";

const FoodItem=({items})=>{

    //  let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];    
    return(
        <>
        <ul className="list-group">
            {items.map((item)=>(
                <Item
                key={item} 
                foodItems={item}
                handleBuyButton={()=>console.log(`${item} bought`)}
                ></Item>
            ))}
        </ul>
      </>

    )
}
export default FoodItem;