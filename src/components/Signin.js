import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  useHistory,
} from "react-router-dom";

import Navigation from "./Navigagion";
import Footer from "./Footer";

function Signin(props) {

  let history = useHistory();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData(s => ({
      ...s,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="viewport">
      <Navigation user={props.user} login={props.login} logout={props.logout}/>

      <Container style={{padding: "5% 0"}}>
        <h3>Login</h3>
        <br/><br/>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="******" onChange={handleChange}/>
          </Form.Group>

          <Form.Group><Button variant="light" onClick={_ => { props.login(
              formData.formUsername,
              formData.formPassword,
            );
            history.replace('/');
          }}>
            Sign In
          </Button></Form.Group>
        </Form>
      </Container>

      <Footer style={{position: "absolute", bottom: "0", width: "100%"}}/>
    </div>
    
  );
}

export default Signin;