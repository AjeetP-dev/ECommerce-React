import { Nav,Button, CheckPicker, Drawer, Tooltip, Whisper, Checkbox } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom'
import categories from "./categories.json"
import React from "react";
import "./styles/navbar.scss"
import Cart from "./Cart"
import { AiOutlineShoppingCart } from "react-icons/ai";


let selectedCategories=null
export default function Navbar({setIsCartVisible}) {
    return (
        <>
            <nav id="navbar" >
                <Button className="navElem" appearance="subtle"><Link classname="links" to="/"><HomeIcon />&nbsp;Home</Link></Button>
                <Button className="navElem" onClick={()=>setIsCartVisible(prev=>!prev)} ><AiOutlineShoppingCart/></Button>
            </nav>
        </>
    )
    
}
export {selectedCategories}