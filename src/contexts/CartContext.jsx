import React from "react"
import { toastPlacements } from "rsuite/esm/toaster/ToastContainer"
import { sharedStateContext } from "./SharedStatesContext"
export const cartFromContext = React.createContext()


export default function CartContext({ children }) {
    const { setTotal, setNumberOfItemsInCart } = React.useContext(sharedStateContext)

    const decreaseQuant = (item) => {
        let itemID = Object.keys(item)[0]
        let itemProperties = Object.values(item)[0]
        let { price, quantity } = itemProperties
        let cart = JSON.parse(localStorage.getItem("cart"))

        // updating cart in local Storage
        cart[itemID]["quantity"] = `${Number(quantity) - 1}`
        if (cart[itemID]["quantity"] === "0") {
            removeFromCart({ [itemID]: itemProperties })
            return
        }
        localStorage.setItem("cart", JSON.stringify({ ...cart }))

        // updating total in local Storage and global state variable total
        setTotal((prev) => {
            let newTotal = Number(prev) - Number(price)
            localStorage.setItem("total", `${newTotal}`)
            return (newTotal)
        })

        //updating no of items in cart in local Storage and global state variable noOfItemsInCart
        setNumberOfItemsInCart((prev) => {
            let newNoOfItemsInCart = Number(prev) - 1
            localStorage.setItem("noOfItems", `${newNoOfItemsInCart}`)
            return newNoOfItemsInCart
        })

    }


    const addToCart = (item) => {
        let itemID = Object.keys(item)[0]
        let itemProperties = Object.values(item)[0]
        let { price, quantity } = itemProperties

        let cart = JSON.parse(localStorage.getItem("cart")) === null ? {} : JSON.parse(localStorage.getItem("cart"))

        // updating cart in local Storage
        if (itemID in cart === true) {
            cart[itemID]["quantity"] = `${Number(quantity) + 1}`
            localStorage.setItem("cart", JSON.stringify({ ...cart }))
        }
        else {
            localStorage.setItem("cart", JSON.stringify({ ...cart, ...item }))
        }

        // updating total in local Storage and global state variable total
        setTotal((prev) => {
            let newTotal = Number(prev) + Number(price)
            localStorage.setItem("total", `${newTotal}`)
            return (newTotal)
        })

        //updating no of items in cart in local Storage and global state variable noOfItemsInCart
        setNumberOfItemsInCart((prev) => {
            let newNoOfItemsInCart = Number(prev) + 1
            localStorage.setItem("noOfItems", `${newNoOfItemsInCart}`)
            return newNoOfItemsInCart
        })
    }

    const removeFromCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        let updatedCart = {}
        let itemProperties = Object.values(item)[0]
        let { price, quantity } = itemProperties

        //If cart contains no items setting the initial values
        if (Object.keys(cart).length === 1) {
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("noOfItems")
            setTotal(0)
            setNumberOfItemsInCart("")
            return
        }

        // updating cart in local Storage
        Object.keys(cart).filter((iterator) => {
            if (!(iterator === Object.keys(item)[0])) {
                // console.log("remItem")
                console.log(iterator, Object.keys(item)[0])
                updatedCart = { ...updatedCart, [iterator]: cart[iterator] }
            }
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart))

        // updating total in local Storage and global state variable total
        setTotal((prev) => {
            let newTotal = Number(prev) - (Number(price) * Number(quantity))
            localStorage.setItem("total", `${newTotal}`)
            return (newTotal)
        })

        //updating no of items in cart in local Storage and global state variable noOfItemsInCart
        setNumberOfItemsInCart((prev) => {
            let newNoOfItemsInCart = Number(prev) - Number(quantity)
            localStorage.setItem("noOfItems", `${newNoOfItemsInCart}`)
            return (newNoOfItemsInCart)
        })
    }

    return (
        <>
            <cartFromContext.Provider value={{ addToCart, removeFromCart, decreaseQuant}}>
                {children}
            </cartFromContext.Provider>
        </>
    )
}