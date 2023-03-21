import { Container, Header, Content, Button, Sidebar } from "rsuite"
import { cartFromContext } from "./CartContext"
import React from "react"
import "./styles/cart.scss"
import { AiFillDelete } from "react-icons/ai";

export default function CartItemsCard({ item, id }) {
    const { addToCart, removeFromCart, decreaseQuant, getTotal } = React.useContext(cartFromContext)
    const quantRef = React.useRef()
    const totalRef = React.useRef()
    const priceRef = React.useRef()

    priceRef.current = item["price"]
    console.log(getTotal())

    const incQuant = (item) => {
        addToCart(item)
        quantRef.current.innerHTML = Number(quantRef.current.innerHTML) + 1
        totalRef.current.innerHTML = Number(quantRef.current.innerHTML) * Number(priceRef.current)
    }

    const decQuant = (item) => {
        console.log(priceRef.current)
        decreaseQuant(item)
        quantRef.current.innerHTML = Number(quantRef.current.innerHTML) - 1
        if (quantRef.current.innerHTML === "0") {
            document.getElementById(`cart-${id}`).remove()
            return
        }
        totalRef.current.innerHTML = Number(quantRef.current.innerHTML) * Number(priceRef.current)
    }

    const remFromCart = () => {
        removeFromCart({ [id]: item })
        document.getElementById(`cart-${id}`).remove()
    }
    return (<>
    <div>
        <div id={`cart-${id}`} className="cart-items">
            <h4>{item["name"]}</h4>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <button className="btn-sm" style={{ marginRight: "13px", padding: "3px" }} onClick={() => remFromCart()}><AiFillDelete></AiFillDelete></button>
                <span style={{ width: "85%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <img className="prodImages" src={`${item["thumbnail"]}`} />
                    <span className="cart-card-price">@{item["price"]}</span>
                    <button className="btn-sm" onClick={() => decQuant({ [id]: item })}>-</button>
                    <span ref={quantRef} className="cart-card-quantity">{item["quantity"]}</span>
                    <button className="btn-sm" onClick={() => incQuant({ [id]: item })}>+</button>
                    <dt style={{ fontSize: "20px" }}>Total:</dt><dl style={{ fontSize: "20px" }} ref={totalRef} className="cart-card-total">{Number(item["quantity"]) * Number(item["price"])}</dl>
                </span>
            </div>
        </div>
        </div>
    </>)
}