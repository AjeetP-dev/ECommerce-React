import Navbar from './Navbar'
import Menu from './Menu'
import { Routes, Route, useParams } from "react-router-dom"
import Home from './Home'
import React from 'react'
import categories from "./categories.json"
import Cart from './Cart'
import CartContext from "./CartContext"
import { Container, Divider,Animation, Form } from 'rsuite'
import Footer from './Footer'
import "./styles/app.scss"
import {Button} from "rsuite"
import FIlters from './Filters'

function App() {
  const [isCartVisible, setIsCartVisible] = React.useState(false)
  console.log(isCartVisible)
  return (
    <>
      <Navbar setIsCartVisible={setIsCartVisible} />
      <Divider/>

      <CartContext>
      <Cart isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible} />
      </CartContext>

      <Routes>
        <Route exact path='menu' element={<>
          
          <Menu categoryId={null} />
          </>}/>

        {categories.map((iterator) =>
          <Route path={`menu/${iterator.id}`} element={
            <div id="menu" key={iterator.id}>
              <Menu categoryId={iterator.id} />
            </div>}
          />)}


        <Route index element={<>
          <CartContext>
          <Home />
          </CartContext>
        </>} />


        <Route path='*' element={<>
          <h1>error 404:<br />Page Not Found</h1></>} />

      </Routes>

      
      <footer id="footer"style={{background: "grey",top:"100",position:"sticky"}}><Footer/></footer>
    </>
  )
}

export default App
