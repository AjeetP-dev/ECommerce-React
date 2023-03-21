import { ButtonGroup, Container, Content, Drawer, Header, Button } from "rsuite"
import React from "react"
import { cartFromContext } from "./CartContext"
import CartItemsCard from "./CartItemsCard"
import "./styles/cart.scss"

export default function Cart({ isCartVisible, setIsCartVisible }) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    const grandTotal=React.useRef(0)
    console.log(grandTotal)
    return (<>
        <Drawer open={isCartVisible} onClose={() => setIsCartVisible(false)} placement="right" size="sm" backdrop={true} >
            <Drawer.Header><Drawer.Title>Cart</Drawer.Title></Drawer.Header>
            <Drawer.Body>
            <section className="cart-items-section">
                {cart !== null && Object.keys(cart).map((iterator) =>
                    <CartItemsCard item={cart[iterator]}
                        id={iterator}
                        grandTotal={grandTotal} />
                )}
            </section>
            </Drawer.Body>
        </Drawer>
    </>)
}