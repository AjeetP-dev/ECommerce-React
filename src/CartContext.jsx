import React from "react"

export const cartFromContext = React.createContext()

export default function CartContext({ children }) {
    const decreaseQuant = (item) =>{
        console.log(item)
        let cart = JSON.parse(localStorage.getItem("cart"))===null?{}:JSON.parse(localStorage.getItem("cart"))
        if(cart!=null && Object.keys(item)[0] in cart===true){
            console.log("decreasing")
            cart[Object.keys(item)[0]]["quantity"]=`${Number(cart[Object.keys(item)[0]]["quantity"])-1}`
            console.log(cart)
        localStorage.setItem("cart", JSON.stringify({...cart}))}

    }


    const addToCart = (item) =>{
        let cart = JSON.parse(localStorage.getItem("cart"))===null?{}:JSON.parse(localStorage.getItem("cart"))
        if(cart!=null && Object.keys(item)[0] in cart===true){
            console.log("adding")
            cart[Object.keys(item)[0]]["quantity"]=`${Number(cart[Object.keys(item)[0]]["quantity"])+1}`
            console.log(cart)
        localStorage.setItem("cart", JSON.stringify({...cart}))}

        else
        localStorage.setItem("cart", JSON.stringify({ ...cart, ...item }))
    }

    const removeFromCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart"))===null?{}:JSON.parse(localStorage.getItem("cart"))
        let updatedCart = {}
        
        if (Object.keys(cart).length === 1) {
            localStorage.removeItem("cart")
            return
        }
        
        Object.keys(cart).filter((iterator) => {
            if (!(iterator===Object.keys(item)[0])) {
                console.log("remItem")
                console.log(iterator, Object.keys(item)[0])
                updatedCart={...updatedCart,[iterator]:cart[iterator]}
            }
        })
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    return (
        <>
            <cartFromContext.Provider value={{ addToCart, removeFromCart,decreaseQuant }}>
                {children}
            </cartFromContext.Provider>
        </>
    )
}