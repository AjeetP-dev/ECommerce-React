import { ButtonGroup, Container, Content, Drawer, Header, Button, Animation } from "rsuite"
import React from "react"
import CartItemsCard from "./CartItemsCard"
import "./styles/cart.scss"
import { sharedStateContext } from "./contexts/SharedStatesContext"
import emptyCartyBG from "./assets/emptyCartBG.png"

export default function Cart({ isCartVisible, setIsCartVisible, setNumberOfItemsInCart, setTotal }) {
    const { total } = React.useContext(sharedStateContext)
    let cart = JSON.parse(localStorage.getItem("cart"))
    // let grandTotalRef = React.useRef()
    // const [grandTotal, setGrandTotal] = React.useState(true)
    // React.useEffect(() => {
    //     try {
    //         grandTotalRef.current.innerHTML = getTotal()
    //     }
    //     catch { 
    //     }
    // }, [grandTotal])

    return (<>
        <Drawer open={isCartVisible} onClose={() => setIsCartVisible(false)} placement="right" size="sm" backdrop={true} >
            <Drawer.Header style={{backgroundColor:"#354131"}}>
                <Drawer.Title><h3 style={{fontFamily: "Montserrat Alternates', sans-serif",color:"#d9dfdf"}}>Cart</h3></Drawer.Title>
            </Drawer.Header>
            {total !== "0" &&
                <Drawer.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <section className="cart-items-section">
                        {cart !== null && Object.keys(cart).map((iterator) =>
                            <CartItemsCard
                                item={cart[iterator]}
                                id={iterator}
                            // setGrandTotal={setGrandTotal}
                            // getTotal={getTotal}
                            />
                        )
                        }
                    </section>
                    {/* <button ref={grandTotalRef}>{grandTotal}</button> */}
                    <button id="grandTotal">Proceed to Pay {total}</button>
                </Drawer.Body>
            }
            {total === "0" &&
                <Drawer.Body style={{display:"flex", flexDirection:"column",alignItems:"center",boxSizing:"border-box"}}>
                    <img src={emptyCartyBG} style={{width:"400px", marginBottom:"10%",opacity:"0.6"}}/>
                    <h3>Cart Empty </h3>
                </Drawer.Body>
            }
        </Drawer>
    </>)
}