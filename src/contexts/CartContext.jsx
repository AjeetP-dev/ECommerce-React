import React from "react"
import { sharedStateContext } from "./SharedStatesContext"
import { toaster, Notification, Placeholder } from 'rsuite'

export const cartFromContext = React.createContext()


export default function CartContext({ children }) {
    const { setTotal, setNumberOfItemsInCart } = React.useContext(sharedStateContext)
    let key;

    function notify(header) {
        let { type, productName } = header
        if (type === "added") {
            toaster.push(
                (<Notification type="success" header={`${productName} is added`}>
                </Notification>), { duration: 730 })
        }
        else if (type === "limitExceeded") {
            toaster.push(
                (<Notification type="info" header="Limit Exceeded">
                    You can only order 3 of a Single Product
                </Notification>), { duration: 1200 })
        }
        else
            toaster.push(
                (<Notification type="info" header={`${productName} is removed`}>
                </Notification>), { duration: 600 })

        return
    }

    const decreaseQuant = (item) => {
        let itemID = Object.keys(item)[0]
        let itemProperties = Object.values(item)[0]
        let { price, quantity, name } = itemProperties
        let cart = JSON.parse(localStorage.getItem("cart"))

        // updating cart in local Storage
        cart[itemID]["quantity"] = `${Number(quantity) - 1}`
        if (cart[itemID]["quantity"] === "0") {
            removeFromCart({ [itemID]: itemProperties })
            return
        }
        localStorage.setItem("cart", JSON.stringify({ ...cart }))

        notify({ productName: name, type: "remove" })
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
        let { price, name } = itemProperties
        let cart = JSON.parse(localStorage.getItem("cart")) === null ? {} : JSON.parse(localStorage.getItem("cart"))

        // updating cart in local Storage and notifying
        if (itemID in cart === true) {
            let updatedQuantity = Number(cart[itemID]["quantity"]) + 1

            if (updatedQuantity > 3) {
                notify({ productName: name, type: "limitExceeded" })
                return false
            }
            else {
                notify({ productName: name, type: "added" })
                cart[itemID]["quantity"] = Number(cart[itemID]["quantity"]) + 1
                localStorage.setItem("cart", JSON.stringify({ ...cart }))
            }
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
        let { price, quantity, name } = itemProperties

        notify({ productName: name, type: "remove" })

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
            <cartFromContext.Provider value={{ addToCart, removeFromCart, decreaseQuant }}>
                {children}
            </cartFromContext.Provider>
        </>
    )
}