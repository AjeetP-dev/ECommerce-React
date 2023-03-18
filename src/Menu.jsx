import React, { useContext } from "react"
import products from "./products.json"
import ProductsCard from "./ProductsCard"
import { Routes, Route } from "react-router-dom"
import CartContext from "./CartContext"

export default function Menu({ categoryId }) {
    let [numOfItemsInCart, setNumOfItemsInCart] = React.useState(0)
    console.log("inMenu")
    console.log(numOfItemsInCart)

    function genProdCard(prodDetails) {
        return (
            <CartContext>
            <ProductsCard
                id={prodDetails["id"]}
                name={prodDetails["name"]}
                price={prodDetails["price"]}
                currency={prodDetails["currency"]}
                delivery={prodDetails["delivery"]}
                instock={prodDetails["instock"]}
                categoryId={prodDetails["categoryId"]}
                thumbnail={prodDetails["thumbnail"]}
                setNumOfItemsInCart={setNumOfItemsInCart}
            />
            </CartContext>
        )
    }

    if (categoryId !== null)
        return (
            <>
                {products.map((iterator) =>
                    iterator["categoryId"] === categoryId &&
                    <div className="menuOptions" key={iterator["id"]}>
                         {genProdCard(iterator)}
                    </div>
                )
            }
            
            </>
        )
    else return (
        <>
            <div id="menu">
                {products.map((iterator) =>
                    <div className="menuOptions" key={iterator["id"]}>
                 {genProdCard(iterator)}
                    </div>
                )}
            </div>
        </>
    )
}