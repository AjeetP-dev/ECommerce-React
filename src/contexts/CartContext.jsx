import React from "react"
import { toastPlacements } from "rsuite/esm/toaster/ToastContainer"
import { sharedStateContext } from "./SharedStatesContext"
export const cartFromContext = React.createContext()


export default function CartContext({ children }) {
    const { setTotal, setNumberOfItemsInCart } = React.useContext(sharedStateContext)

    const decreaseQuant = (item) => {
        let id = Object.keys(item)[0]
        let cart = JSON.parse(localStorage.getItem("cart")) === null ? {} : JSON.parse(localStorage.getItem("cart"))
        let price = Object.values(item)[0]["price"]
        if (cart != null && id in cart === true) {
            cart[id]["quantity"] = `${Number(cart[id]["quantity"]) - 1}`
            localStorage.setItem("total", `${Number(localStorage.getItem("total")) - price}`)
            if (cart[id]["quantity"] === "0") {
                removeFromCart({ id: item })
                return
            }
            localStorage.setItem("cart", JSON.stringify({ ...cart }))
        }

        setTotal(prev => prev - Number(price))
        setNumberOfItemsInCart((prev) => {
            localStorage.setItem("noOfItems",`${Number(prev) - 1}`)
            return Number(prev) - 1}
            )

    }


    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart")) === null ? {} : JSON.parse(localStorage.getItem("cart"))
        let id = Object.keys(item)[0]
        let price = Object.values(item)[0]["price"]
        if (cart != null && id in cart === true) {
            cart[id]["quantity"] = `${Number(cart[id]["quantity"]) + 1}`
            localStorage.setItem("cart", JSON.stringify({ ...cart }))
        }

        else {
            localStorage.setItem("cart", JSON.stringify({ ...cart, ...item }))
        }
        localStorage.setItem("total", `${Number(localStorage.getItem("total")) + price}`)
        setTotal(prev => Number(prev) + Number(price))
        setNumberOfItemsInCart((prev) => {
            localStorage.setItem("noOfItems",`${Number(prev) + 1}`)
            return Number(prev) + 1}
            )
    }

    const removeFromCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart")) === null ? {} : JSON.parse(localStorage.getItem("cart"))
        let updatedCart = {}
        let price = Object.values(item)[0]["price"]
        let quantity = Object.values(item)[0]["quantity"]
        setTotal(prev => prev - (Number(price) * Number(quantity)))
        localStorage.setItem("total", `${Number(localStorage.getItem("total")) - price * Number(Object.values(item)[0]["quantity"])}`)
        if (Object.keys(cart).length === 1) {
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("noOfItems")
            setTotal(0)
            setNumberOfItemsInCart("")
            return
        }

        Object.keys(cart).filter((iterator) => {
            if (!(iterator === Object.keys(item)[0])) {
                // console.log("remItem")
                console.log(iterator, Object.keys(item)[0])
                updatedCart = { ...updatedCart, [iterator]: cart[iterator] }
            }
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        setNumberOfItemsInCart((prev) => {
            localStorage.setItem("noOfItems",`${prev - Number(quantity)}`)
            return (prev - Number(quantity))}
            )
    }


    function total() {
        let total = localStorage.getItem("total")
        if (total === null || total === undefined) {
            console.log("setting total to 0")
            localStorage.setItem("total", "0")
            return "0";
        }
        else
            return total
    }

    return (
        <>
            <cartFromContext.Provider value={{ addToCart, removeFromCart, decreaseQuant, total }}>
                {children}
            </cartFromContext.Provider>
        </>
    )
}