import React from "react"
import products from "./products.json"
import ProductsCard from "./ProductsCard"
import CartContext from "./contexts/CartContext"
import "./styles/menu.scss"
import FIlters from "./Filters"
import { Animation } from "rsuite"

export default function Menu({ categoryId }) {
    const [filterSelected, setFilterSelected] = React.useState([])

    function genProdCard(prodDetails) {
        return (
            <CartContext>
                <ProductsCard
                    id={prodDetails["id"]}
                    name={prodDetails["name"]}
                    price={prodDetails["price"]}
                    currency={prodDetails["currency"]}
                    delivery={prodDetails["delivery"]}
                    inStock={prodDetails["inStock"]}
                    categoryId={prodDetails["categoryId"]}
                    thumbnail={prodDetails["thumbnail"]}
                />
            </CartContext>
        )
    }

    // Function Which takes in a product as parameter and return true if product is to be Shown
    function checkFilter(prod) {
        let shouldShow = true
        for (let index = 0; index < filterSelected.length; index++) {
            if (Object.keys(prod).includes(filterSelected[index]))
                if (prod[filterSelected[index]] === true)
                    shouldShow = true
                else {
                    shouldShow = false
                    break
                }
        }
        return shouldShow
    }

    // Showing All Products Without Category type Rendering
    if (categoryId !== null)
        return (
            <>
                <FIlters setFilterSelected={setFilterSelected} />
                <Animation.Slide placement='right' in={true}>
                    <div id="menu">
                        {products.map((iterator) =>
                            iterator["categoryId"] === categoryId && (filterSelected.length === 0 || checkFilter(iterator)) &&
                            <div className="menuOptions" key={iterator["id"]}>
                                {genProdCard(iterator)}
                            </div>
                        )
                        }
                    </div>
                </Animation.Slide>
            </>)

    // Showing All Products Category Wise
    else return (
        <>
            <FIlters setFilterSelected={setFilterSelected} />
            <Animation.Slide placement='right' in={true}>
                <div id="menu">
                    {products.map((iterator) =>
                        (filterSelected.length === 0 || checkFilter(iterator)) &&
                        <div className="menuOptions" key={iterator["id"]}>
                            {genProdCard(iterator)}
                        </div>
                    )}
                </div>
            </Animation.Slide>
        </>
    )
}