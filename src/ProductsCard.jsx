import { Container, Header, Content, Footer, ButtonGroup, Button, IconButton } from "rsuite";
import React from "react";
import { cartFromContext } from "./CartContext";

export default function ProductsCard({ id, name, price, currency, delivery, thumbnail, instock, categoryId ,setNumOfItemsInCart}) {
    const quantRef = React.useRef();
    let itemsInCart=JSON.parse(localStorage.getItem("cart"))
    const [quantity, setQuantity] = React.useState("Add")

    let {addToCart,removeFromCart}=React.useContext(cartFromContext)

    let item={[id]:
        {name:name,
        price:price,
        currency:currency,
        thumbnail:thumbnail,
        quantity:1
        }}

const checkAdd=()=>addToCart(item)

const checkRem=()=>removeFromCart(item)


    // function quantityLocalStorage(quantity){
    //     if (itemsInCart===null) itemsInCart=[]
    //     if (quantity===0){
    //         delete itemsInCart[`${id}`]
    //     }
    //     console.log(itemsInCart)
    //     let itemToCartDetails={...itemsInCart,[id]:
    //         {name:name,
    //         price:price,
    //         currency:currency,
    //         thumbnail:thumbnail,
    //         quantity:quantity
    //         }}
    //   localStorage.setItem(`cart`,JSON.stringify(itemToCartDetails))
    // }
    // const counterQuant = (event) => {
    //     let temp=quantity;
    //     console.log(temp,event.target.name)
    //     if (temp==="Add" && event.target.name==="addQuant"){
    //         temp="1"
    //         console.log("case1")
    //         setNumOfItemsInCart(prevVal=>prevVal+1)
    //         quantityLocalStorage(temp)
    //     }
    //     else if(temp==="1" && event.target.name==="subQuant"){
    //     setNumOfItemsInCart(prevVal=>prevVal-1)
    //     quantityLocalStorage(0)
    //     temp="Add"
    // }
    //     else if (event.target.name === "addQuant"){
    //         temp=`${Number(quantity) + 1}`
    //         setNumOfItemsInCart(prevVal=>prevVal+1)
    //         console.log("case2")
    //         quantityLocalStorage(temp)}
    //     else if(event.target.name === "subQuant" && temp!=="Add"){
    //         temp=`${Number(quantity) - 1}`
    //         setNumOfItemsInCart(prevVal=>prevVal-1)
    //         quantityLocalStorage(temp)
    //     }
    //     else {
    //         try{
    //             delete itemsInCart[`${id}`]
    //         }
    //         catch{}
    //     temp="Add"
    // }
        
    //     setQuantity(temp)
    //     // quantityLocalStorage(temp)


    // }

    return (
        <>
            <div id={`prod-${id}`} key={`prod-${id}`} className={`${categoryId}`}>
                <img className="prodImages" src={thumbnail} />
                <Container className="prodDetails">
                    <Header><p className="prodNames">{name}</p></Header>
                    <Content><p className="other-details"><i>{(!delivery && "Not")}&nbsp;Available for delivery</i></p>
                        <br />
                        <p className="totalPrice">{price}&nbsp;{currency}</p>
                        {/* <ButtonGroup style={{ width: "110px" }} justified size="xs">
                            {quantity!=="Add"&&<Button name="subQuant" onClick={counterQuant}>-</Button>}
                            <p ref={quantRef} style={{ marginLeft: "10px", marginRight: "10px" }} className="other-details">{quantity}</p>
                            <Button name="addQuant" onClick={counterQuant}>+</Button>
                        </ButtonGroup> */}
                        <Button onClick={()=>addToCart(item)}>Add to Cart</Button>
                        <Button onClick={checkRem}>Remove</Button>
                        {/* <Button onClick={checkAdd}>Add</Button> */}
                    </Content>
                </Container>
            </div>
        </>)
}