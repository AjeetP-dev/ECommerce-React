import categories from "./categories.json"
import { Link } from "react-router-dom"
import Cart from "./Cart"
export default function Home({isCartVisible}) {
    return (<>
        {categories.map((iterator) =>
            <div id="categories-container" key={iterator.id}>
                <Link to={`./menu/${iterator.id}`}>
                    <span className="category-links-Home">{iterator.name}</span>
                </Link>
            </div>

        )}
        <Link to={`/menu`}>
            <span className="category-links-Home">Explore All Products</span>
        </Link>
        <Cart isOpen={isCartVisible}/>
    </>)
}