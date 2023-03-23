import Navbar from './Navbar'
import Menu from './Menu'
import { Routes, Route, useParams } from "react-router-dom"
import Home from './Home'
import React from 'react'
import categories from "./categories.json"
import Cart from './Cart'
import CartContext from "./contexts/CartContext"
import { Container, Divider, Animation, Form } from 'rsuite'
import Footer from './Footer'
import "./styles/app.scss"
import { Button } from "rsuite"
import FIlters from './Filters'
import SharedStateContext from './contexts/SharedStatesContext'

function App() {

  const [isCartVisible, setIsCartVisible] = React.useState(false)

  return (
    <>
    <SharedStateContext>
      <Navbar setIsCartVisible={setIsCartVisible} />
      <Divider style={{marginTop:"2px"}}/>

      <CartContext>
        <Cart isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible} />
        {/* </CartContext> */}

        <Routes>
          <Route exact path='menu' element={<>
            <Menu categoryId={null} />
          </>} />

          {categories.map((iterator) =>
            <Route path={`menu/${iterator.id}`} element={
              <div id="menu" key={iterator.id}>
                <Menu categoryId={iterator.id}

                />
              </div>}
            />)}


          <Route index element={<>
            <Home />
          </>} />

          <Route path='*' element={<>
            <h1>error 404:<br />Page Not Found</h1></>} />

        </Routes>
      </CartContext>
      </SharedStateContext>


      <footer id="footer" style={{ top: "100", position: "sticky",minWidth: "490px"}}><Footer /></footer>
    </>
  )
}

export default App
