import React from "react"

export const sharedStateContext = React.createContext()

export default function SharedStateContext({ children }) {

    if(localStorage.getItem("total")===null)
    localStorage.setItem("total","0")
    if(localStorage.getItem("noOfItems")===null)
    localStorage.setItem("noOfItems","0")
    const [total, setTotal] = React.useState(localStorage.getItem("total"))
    const [noOfItemsInCart, setNumberOfItemsInCart] = React.useState(localStorage.getItem("noOfItems"))
    return (
        <sharedStateContext.Provider value={{total,noOfItemsInCart,setTotal,setNumberOfItemsInCart}}>
            {children}
        </sharedStateContext.Provider>
    )
}