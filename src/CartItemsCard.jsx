import { cartFromContext } from "./contexts/CartContext"
import React from "react"
import "./styles/cart.scss"
import { AiFillDelete } from "react-icons/ai";

export default function CartItemsCard({ itemProperties, itemID }) {
    const { addToCart, removeFromCart, decreaseQuant } = React.useContext(cartFromContext);
    let { price, quantity, name, thumbnail } = itemProperties
    return (<>
        <div className="cart-item-container">
            <div id={`cart-${itemID}`} className="cart-items">
                <h4>{name}</h4>
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <button className="btn-sm dlt-btn" style={{ marginRight: "13px", padding: "3px", backgroundColor: "#ba000d", color: "white" }} onClick={() => removeFromCart({ [itemID]: itemProperties })}>
                        <AiFillDelete></AiFillDelete>
                    </button>
                    <span style={{ width: "85%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img className="prodImages" src={`${thumbnail}`} />
                        <span className="cart-card-price">@{price}</span>
                        <div className="quantity-btn-container">
                            <button className="btn-sm" style={{ backgroundColor: "#a31545", color: "white" }} onClick={() => decreaseQuant({ [itemID]: itemProperties })}>-</button>
                            <span className="cart-card-quantity">{quantity}</span>
                            <button className="btn-sm" style={{ backgroundColor: "#46583f", color: "white" }} onClick={() => addToCart({ [itemID]: itemProperties })}>+</button>
                        </div>
                        <dt style={{ fontSize: "20px" }}>Total:</dt><dl style={{ fontSize: "20px" }} className="cart-card-total">{Number(quantity) * Number(price)}</dl>
                    </span>
                </div>
            </div>
        </div>
    </>)
}