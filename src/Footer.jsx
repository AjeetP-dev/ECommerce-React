import { Form, Button, Container, FlexboxGrid, Input } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import "./styles/footer.scss"

export default function Footer() {
    return (<>
        <div id="footer-div1">
            <article id="title"><h1>We are Built Upon Trust</h1></article>
            <div id="subscription">
                <h3>Subscribe</h3>
                <span>
                    <input placeholder="xyz@gmail.com" />
                    <button>Submit</button>
                </span>
            </div>
        </div>
        <div id="footer-div2">
            <span id="social-media-icons"><h3>Follow Us</h3>
                <span>
                    <span style={{ fontSize: "35px", Width: "42px" }}><AiFillFacebook /></span>
                    <span style={{ fontSize: "35px", Width: "42px" }}><AiFillTwitterCircle /></span>
                </span>
            </span>
            <span id="contact">
                <h3>Contact US</h3>
                <dt style={{display:"inline"}}>Call us:</dt><dl style={{display:"inline"}}>&emsp;012 5530 5530</dl>
                <br />
                <dt style={{display:"inline"}}>Mail us:</dt><dl style={{display:"inline"}}>&emsp;dummy@gmail.com</dl>
            </span>
        </div>
    </>
    )}