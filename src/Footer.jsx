import { Form, Button, Container, FlexboxGrid, Input } from "rsuite";
import FormGroup from "rsuite/esm/FormGroup";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import "./styles/footer.scss"

export default function Footer() {
    return (<>
        <FlexboxGrid justify="space-between" >
            <h1 id="title">We are Built Upon Trust</h1>
            <span>
            <FlexboxGrid style={{ background: "grey" }} justify="space-between">
                <FlexboxGrid.Item id="subscription"><h3>Subscribe</h3>
                    <Form layout="inline"> <FormGroup>
                        <Input size="sm" placeholder="xyz@gmail.com" />
                    </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item id="social-media-icons"><h3>Follow Us</h3>
                    <span style={{ fontSize: "35px", minWidth: "35px" }}><AiFillFacebook /></span>
                    <span style={{ fontSize: "35px", minWidth: "35px" }}><AiFillTwitterCircle /></span>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item id="contact">
                    <h3>Contact US</h3>
                    <dt>Call us:</dt><dl>012 5530 5530</dl>
                    <br />
                    <dt>Mail us:</dt><dl>dummy@gmail.com</dl>
                </FlexboxGrid.Item>
                </FlexboxGrid>
            </span>
        </FlexboxGrid>
    </>)
}