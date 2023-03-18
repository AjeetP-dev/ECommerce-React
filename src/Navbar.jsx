import { Nav, CheckPicker, Drawer, Tooltip, Whisper, Checkbox } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom'
import categories from "./categories.json"
import React from "react";
import Cart from "./Cart"


let selectedCategories=null
export default function Navbar({setIsCartVisible}) {
    return (
        <>
            <nav id="navbar" >
                <div>
                <span className="navElem" appearance="subtle"><Link classname="links" to="/"><HomeIcon />&nbsp;Home</Link></span>
                <button className="navElem" appearance="subtle" onClick={()=>setIsCartVisible(true)}>Cart</button>
                </div>
                <span className="navElem" appearance="subtle"><Link classname="links" to="/">Logout</Link></span>
            </nav>
        </>
    )
    
}
export {selectedCategories}