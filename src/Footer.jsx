import { Form, Button, Container, FlexboxGrid, Input } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import "./styles/footer.scss"

export default function Footer() {
    return (<>
        <div id="title">We are Built Upon Trust</div>
        <div id="subscription" style={{marginTop:"40px",textAlign:"center"}}>
            <h3>Subscribe</h3>
            <input placeholder="xyz@gmail.com" />
            <button>Submit</button>
        </div>
        <div style={{width:"450px",display:"flex",justifyContent:"space-between", marginTop:"40px"}}>
        <span id="social-media-icons"><h3>Follow Us</h3>
            <span style={{ fontSize: "35px", minWidth: "35px" }}><AiFillFacebook /></span>
            <span style={{ fontSize: "35px", minWidth: "35px" }}><AiFillTwitterCircle /></span>
        </span>
        <span id="contact">
            <h3>Contact US</h3>
            <dt>Call us:</dt><dl>012 5530 5530</dl>
            <br />
            <dt>Mail us:</dt><dl>dummy@gmail.com</dl>
        </span>
        </div>
    </>)
}