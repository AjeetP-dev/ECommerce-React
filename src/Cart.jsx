import { ButtonGroup, Container, Content, Drawer,Header,Button } from "rsuite"
import React from "react"
import {cartFromContext}  from "./CartContext"

export default function Cart({isCartVisible,setIsCartVisible}){
    const {addToCart,removeFromCart}=React.useContext(cartFromContext)
    let cart=JSON.parse(localStorage.getItem("cart"))
    const [quantity,setQuantity]=React.useState(null)
    const quantityRef=React.useRef()
    const totalRef=React.useRef()
    const priceRef=React.useRef()

const incQuant=(item)=>{
    addToCart(item)
}

    return(<>
    <Drawer open={isCartVisible} onClose={()=>setIsCartVisible(false)} placement="right" size="xs" backdrop={true} >
        <Drawer.Header><Drawer.Title>Cart</Drawer.Title></Drawer.Header>
        <Drawer.Body>
            {cart!==null&&Object.keys(cart).map((iterator)=>
            <>
            <Container>
                <Header>
                    <p>{cart[iterator]["name"]}</p>
                    <img className="prodImages" src={`${cart[iterator]["thumbnail"]}`} />
            </Header>
            <Content style={{width:"100%"}}>
            @<span>{cart[iterator]["price"]}</span>
            <dt>Quantity:</dt>
            <Button>-</Button>
            <span>{cart[iterator]["quantity"]}</span>
            <Button onClick={()=>incQuant({[iterator]:cart[iterator]})}>+</Button>
            <Button onClick={()=>removeFromCart({[iterator]:cart[iterator]})}>Remove</Button>
            <dt>Total:</dt><dl>{Number(cart[iterator]["quantity"])*Number(cart[iterator]["price"])}</dl>
            </Content>
            </Container>
        </>
                )}
        </Drawer.Body>
    </Drawer>
    </>)
}