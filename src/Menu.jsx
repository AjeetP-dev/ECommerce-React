import React, { useContext } from "react"
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
                    instock={prodDetails["instock"]}
                    categoryId={prodDetails["categoryId"]}
                    thumbnail={prodDetails["thumbnail"]}
                />
            </CartContext>
        )
    }

    function checkFilter(prod) {
        let shouldShow = false
        filterSelected.forEach((iterator) => {
            if (Object.keys(prod).includes(iterator))
                switch (iterator) {
                    case "delivery":
                        if (prod["delivery"] === true)
                            shouldShow = true
                        break;
                    default:
                        break;
                }
        })
        return shouldShow
    }

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

            </>
        )
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