import { ButtonGroup, Container, Content, Drawer, Header, Button } from "rsuite"
import React from "react"
import { cartFromContext } from "./CartContext"
import CartItemsCard from "./CartItemsCard"

export default function Cart({ isCartVisible, setIsCartVisible }) {
    let cart = JSON.parse(localStorage.getItem("cart"))

    return (<>
        <Drawer open={isCartVisible} onClose={() => setIsCartVisible(false)} placement="right" size="xs" backdrop={true} >
            <Drawer.Header><Drawer.Title>Cart</Drawer.Title></Drawer.Header>
            <Drawer.Body>
                {cart !== null && Object.keys(cart).map((iterator) =>
                    <CartItemsCard item={cart[iterator]}
                        id={iterator} />
                )}
            </Drawer.Body>
        </Drawer>
    </>)
}