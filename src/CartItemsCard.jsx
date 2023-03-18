import { Container,Header,Content,Button } from "rsuite"
import { cartFromContext } from "./CartContext"
import React from "react"

export default function CartItemsCard({item,id}){
    const {addToCart,removeFromCart,decreaseQuant}=React.useContext(cartFromContext)
    const quantRef=React.useRef()
    const totalRef=React.useRef()
    const priceRef=React.useRef()

    const incQuant=(item)=>{
        addToCart(item)
        quantRef.current.innerHTML=Number(quantRef.current.innerHTML)+1
        totalRef.current.innerHTML=Number(quantRef.current.innerHTML)*Number(priceRef.current.innerHTML)
    }

    const decQuant=(item)=>{
decreaseQuant(item)
quantRef.current.innerHTML=Number(quantRef.current.innerHTML)-1
totalRef.current.innerHTML=Number(quantRef.current.innerHTML)*Number(priceRef.current.innerHTML)
    }
    return(<>
            <Container>
                <Header>
                    <p>{item["name"]}</p>
                    <img className="prodImages" src={`${item["thumbnail"]}`} />
            </Header>
            <Content style={{width:"100%"}}>
            @<span ref={priceRef}>{item["price"]}</span>
            <dt>Quantity:</dt>
            <Button onClick={()=>decQuant({[id]:item})}>-</Button>
            <span ref={quantRef}>{item["quantity"]}</span>
            <Button onClick={()=>incQuant({[id]:item})}>+</Button>
            <Button onClick={()=>removeFromCart({[id]:item})}>Remove</Button>
            <dt>Total:</dt><dl ref={totalRef}>{Number(item["quantity"])*Number(item["price"])}</dl>
            </Content>
            </Container>
    </>)
}