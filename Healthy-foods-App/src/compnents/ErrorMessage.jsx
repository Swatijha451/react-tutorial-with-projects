const ErrorMessage=({items})=>{
    // let foodItems=['Roti','Dal','green vegetables','fruits','Ghee'];
    return(
        <>
        {items.length===0 &&<h3>I am still hungry</h3>}
        </>   
    )
}
export default ErrorMessage;