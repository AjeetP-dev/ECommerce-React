import categories from "./categories.json"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import "./styles/home.scss"
import { Animation } from "rsuite"

export default function Home({ isCartVisible }) {
    return (<>
        <Animation.Slide in={true} placement="left">
            <div id="categories-container" >
                {categories.map((iterator) =>
                    <Link to={`./menu/${iterator.id}`}>
                        <div key={iterator.id} className="category-links-Home">{iterator.name}</div>
                    </Link>
                )}

                <Link to={`/menu`}>
                    <div className="category-links-Home">Explore All Products</div>
                </Link>
                <Cart isOpen={isCartVisible} />
            </div>
        </Animation.Slide>
    </>
    )
}