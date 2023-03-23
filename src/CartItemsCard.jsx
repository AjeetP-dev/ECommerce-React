import { cartFromContext } from "./contexts/CartContext"
import React from "react"
import "./styles/cart.scss"
import { AiFillDelete } from "react-icons/ai";
import { sharedStateContext } from "./contexts/SharedStatesContext";

export default function CartItemsCard({ item, id }) {
    const { addToCart, removeFromCart, decreaseQuant, total } = React.useContext(cartFromContext);
    const { setTotal, setNumberOfItemsInCart } = React.useContext(sharedStateContext)
    const quantRef = React.useRef()
    const totalRef = React.useRef()
    const priceRef = React.useRef()

    priceRef.current = item["price"]



    const incQuant = async (item) => {
        addToCart(item)
        // getTotal()
        // setGrandTotal((prev)=>prev+Number(priceRef.current))
        quantRef.current.innerHTML = Number(quantRef.current.innerHTML) + 1
        totalRef.current.innerHTML = Number(quantRef.current.innerHTML) * Number(priceRef.current)
    }

    const decQuant = (item) => {
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
        <div className="cart-item-container">
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