//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
    return (
        <div className="App">
            <img
                class="img"
                src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="image"
            />
            <div class="div">
                <Form>
                    <div class="login-html">
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <h5>SIGN IN TO JOIN US </h5>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>

                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone
                                        else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="email1"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="Check me out"
                                    />
                                </Form.Group>
                                <Button id="but" type="submit">
                                    LOGIN
                                </Button>

                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default App;
