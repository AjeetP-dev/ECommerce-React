import { Container, Header, Content, Footer, ButtonGroup, Button, IconButton, FlexboxGrid } from "rsuite";
import React from "react";
import { cartFromContext } from "./contexts/CartContext";

export default function ProductsCard({ id, name, price, currency, delivery, thumbnail, instock, categoryId ,setNumOfItemsInCart}) {
    let {addToCart}=React.useContext(cartFromContext)

    let item={[id]:
        {name:name,
        price:price,
        currency:currency,
        thumbnail:thumbnail,
        quantity:1
        }}


    return (
        <>
            <div id={`prod-${id}`} key={`prod-${id}`} className={`${categoryId}`} style={{opacity:delivery===true?"1":"0.7"}}>
                <img className="prodImages" src={thumbnail} />
                <Container>
                    <Header><p className="prodNames">{name}</p></Header>
                    <Content><p className="other-details" style={{fontSize:"16px",color:delivery===true?"#007600":"#c44d56"}}><i>{!delivery && "Not"}&nbsp;Available for delivery</i></p>
                        <br />
                        {/* <Button onClick={checkAdd}>Add</Button> */}
                    </Content>
                    <Footer>
                        <p className="price">{price}&nbsp;{currency}</p>
                        {delivery===true?<Button size="lg" onClick={()=>addToCart(item)} block>Add to Cart</Button>:
                        <div><h4>Out Of Stock</h4></div>}
                    </Footer>
                </Container>
                </div>
        </>)
}