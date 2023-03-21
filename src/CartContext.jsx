import React from "react"
import { toastPlacements } from "rsuite/esm/toaster/ToastContainer"

export const cartFromContext = React.createContext()



export default function CartContext({ children }) {
    const [total,setTotal]=React.useState(0)

    const decreaseQuant = (item) =>{
        let id=Object.keys(item)[0]
        console.log(item)
        let cart = JSON.parse(localStorage.getItem("cart"))===null?{}:JSON.parse(localStorage.getItem("cart"))
        if(cart!=null && id in cart===true){
            cart[id]["quantity"]=`${Number(cart[id]["quantity"])-1}`
            console.log("decreas")
            console.log(cart[id]["quantity"])
            if(cart[id]["quantity"]==="0"){
            removeFromCart({id:item})
            return
        }
        localStorage.setItem("cart", JSON.stringify({...cart}))}
    }


    const addToCart = (item) =>{
        let cart = JSON.parse(localStorage.getItem("cart"))===null?{}:JSON.parse(localStorage.getItem("cart"))
        let id=Object.keys(item)[0]
        if(cart!=null && id in cart===true){
            console.log("adding")
            console.log(cart[id]["price"])
            cart[id]["quantity"]=`${Number(cart[id]["quantity"])+1}`
        localStorage.setItem("cart", JSON.stringify({...cart}))}

        else
        localStorage.setItem("cart", JSON.stringify({ ...cart, ...item }))

        // setTotal(prevTotal=>prevTotal+Number(item["quantity"]))
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


    function getTotal(){
        return total
    }

    return (
        <>
            <cartFromContext.Provider value={{ addToCart, removeFromCart,decreaseQuant,getTotal }}>
                {children}
            </cartFromContext.Provider>
        </>
    )
}