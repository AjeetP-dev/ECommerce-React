import { Container, Header, Content, Button } from "rsuite"
import { cartFromContext } from "./CartContext"
import React from "react"
import "./styles/cart.scss"

export default function CartItemsCard({ item, id }) {
    const { addToCart, removeFromCart, decreaseQuant } = React.useContext(cartFromContext)
    const quantRef = React.useRef()
    const totalRef = React.useRef()
    const priceRef = React.useRef()

    const incQuant = (item) => {
        addToCart(item)
        quantRef.current.innerHTML = Number(quantRef.current.innerHTML) + 1
        totalRef.current.innerHTML = Number(quantRef.current.innerHTML) * Number(priceRef.current.innerHTML)
    }

    const decQuant = (item) => {
        decreaseQuant(item)
        quantRef.current.innerHTML = Number(quantRef.current.innerHTML) - 1
        totalRef.current.innerHTML = Number(quantRef.current.innerHTML) * Number(priceRef.current.innerHTML)
    }
    return (<>
        <Container>
            <Header>
                <p>{item["name"]}</p>
                <img className="prodImages" src={`${item["thumbnail"]}`} />
            </Header>
            <Content style={{ width: "100%" }}>
                @<span style={{fontSize:"20px"}} ref={priceRef} className="cart-card-price">{item["price"]}</span>
                <br/>
                <dt style={{fontSize:"20px"}}>Quantity:</dt>
                <Button size="md" onClick={() => decQuant({ [id]: item })}>-</Button>
                <span ref={quantRef} className="cart-card-quantity">{item["quantity"]}</span>
                <Button size="md" onClick={() => incQuant({ [id]: item })}>+</Button>
                <Button block size="md" style={{margin:"6% 0" }}className="cart-card-quantity" onClick={() => removeFromCart({ [id]: item })}>Remove</Button>
                <dt style={{fontSize:"20px"}}>Total:</dt><dl style={{fontSize:"20px"}} ref={totalRef} className="cart-card-total">{Number(item["quantity"]) * Number(item["price"])}</dl>
            </Content>
        </Container>
    </>)
}