import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom'
import React from "react";
import "./styles/navbar.scss"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { sharedStateContext } from "./contexts/SharedStatesContext";


let selectedCategories=null
export default function Navbar({setIsCartVisible}) {
    let {noOfItemsInCart}=React.useContext(sharedStateContext)

    return (
        <>
            <nav id="navbar" >
                <button className="navElem" appearance="subtle"><Link classname="links" to="/"><HomeIcon />&nbsp;Home</Link></button>
                <button style={{padding:"3px",textAlign:"center",display:"flex",fontSize:"60px"}} className="navElem" onClick={()=>setIsCartVisible(prev=>!prev)} >
                    <AiOutlineShoppingCart/>
                    <span style={{fontSize:"20px",borderRadius:"10px",backgroundColor:"transparent",marginLeft:"-45%",marginTop:"14%"}}>{noOfItemsInCart==="0"?"":noOfItemsInCart}</span>
                    </button>
            </nav>
        </>
    )
    
}
export {selectedCategories}