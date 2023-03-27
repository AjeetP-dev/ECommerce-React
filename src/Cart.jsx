import { Drawer } from "rsuite"
import React from "react"
import CartItemsCard from "./CartItemsCard"
import "./styles/cart.scss"
import { sharedStateContext } from "./contexts/SharedStatesContext"
import emptyCartyBG from "./assets/emptyCartBG.png"

export default function Cart({ isCartVisible, setIsCartVisible }) {
    const { total } = React.useContext(sharedStateContext)
    let cart = JSON.parse(localStorage.getItem("cart"))

    return (
        <Drawer open={isCartVisible} onClose={() => setIsCartVisible(false)} id="cart-drawer" placement="right" size="sm" backdrop={true} >
            <Drawer.Header style={{ backgroundColor: "#354131" }}>
                <Drawer.Title><h3 style={{ fontFamily: "Montserrat Alternates', sans-serif", color: "#d9dfdf" }}>Cart</h3></Drawer.Title>
            </Drawer.Header>

            {/* If cart is not empty then show the results */}
            {total !== "0" &&
                <Drawer.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <section className="cart-items-section">
                        {cart !== null && Object.keys(cart).map((iterator) =>
                            <CartItemsCard
                                itemProperties={cart[iterator]}
                                itemID={iterator}
                            />
                        )}
                    </section>
                    <button id="grandTotal">Proceed to Pay {total}</button>
                </Drawer.Body>
            }

            {/* If cart Empty then show the background Image of empty cart */}
            {total === "0" &&
                <Drawer.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box" }}>
                    <img src={emptyCartyBG} style={{ width: "400px", marginBottom: "10%", opacity: "0.6" }} />
                    <h3>Cart Empty </h3>
                </Drawer.Body>
            }
        </Drawer>
    )
}