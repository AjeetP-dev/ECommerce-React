import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import categories from "./categories.json"
import Cart from './Cart'
import CartContext from "./contexts/CartContext"
import Footer from './Footer'
import "./styles/app.scss"
import SharedStateContext from './contexts/SharedStatesContext'

export default function App() {

  const [isCartVisible, setIsCartVisible] = React.useState(false)



  return (
    <>
      <SharedStateContext>
        <Navbar setIsCartVisible={setIsCartVisible} />

        <CartContext>
          <Cart isCartVisible={isCartVisible}
            setIsCartVisible={setIsCartVisible}
          />

          <Routes>
            <Route exact path='menu' element={
              <Menu categoryId={null} />
            }/>

            {categories.map((iterator) =>
              <Route path={`menu/${iterator.id}`} element={
                <Menu categoryId={iterator.id} />}
            />)}


            <Route index element={
              <Home />
            }/>

            <Route path='*' element={
              <h1>error 404:<br />Page Not Found</h1>}
            />
          </Routes>

        </CartContext>
      </SharedStateContext>


      <footer id="footer"><Footer /></footer>
    </>
  )
}


