import Navbar from './Navbar'
import Menu from './Menu'
import { Routes, Route, useParams } from "react-router-dom"
import Home from './Home'
import React from 'react'
import categories from "./categories.json"
import Cart from './Cart'
import CartContext from "./CartContext"

function App() {
  const [isCartVisible, setIsCartVisible] = React.useState(false)
  console.log(isCartVisible)
  return (
    <>
      <Navbar setIsCartVisible={setIsCartVisible} />
      
      <CartContext>
      <Cart isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible} />
      </CartContext>

      <Routes>
        <Route exact path='menu' element={
          <Menu categoryId={null} />} />

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
    </>
  )
}

export default App
