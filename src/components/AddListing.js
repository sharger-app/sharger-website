import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  useHistory,
} from "react-router-dom";

import Navigation from "./Navigagion";
import Footer from "./Footer";
import { apiDomain } from "../index.js";
import axios from "axios";


function AddListing(props) {

  let history = useHistory();
  const [formData, setFormData] = useState({formHousing: "0"});

  const handleChange = (e) => {
    setFormData(s => ({
      ...s,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    const result = await axios({
      method: "post",
      url: `${apiDomain}/chargers/add`,
      data: {
        "owner": "60320dc3eba044ae0a95d131",
        name: formData.formName,
        wattage: formData.formChargerWattage,
        plug: formData.formChargerType,
        address: formData.formAddress,
        housing: formData.formHousing,
        speed: "Rapid",
        price: formData.formRate,
        image: formData.formUrl,
      },
    });

    history.replace(`/listingtest?id=${result.data['_id']}`);
  };

  return (
    <div className="viewport">
      <Navigation user={props.user} login={props.login} logout={props.logout}/>

      <Container style={{padding: "5% 0"}}>
        <h3>Host a Sharger</h3>
        <br/><br/>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Charger Name" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Your Charger Address" onChange={handleChange}/>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="formChargerType">
                <Form.Label>Plug Type</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                  <option>type a</option>
                  <option>type b</option>
                  <option>type c</option>
                  <option>type d</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formChargerWattage">
                <Form.Label>Charger Wattage (kW)</Form.Label>
                <Form.Control type="text" placeholder="10" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group controlId="formRate">
            <Form.Label>Rate (per minute)</Form.Label>
            <Form.Control type="text" placeholder="0.05" onChange={handleChange}/>
          </Form.Group>

          <Form.Group controlId="formUrl">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Image URL" onChange={handleChange}/>
            <Form.Text className="text-muted">
              Please add an image of your charging spot.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formHousing">
            <Form.Label>Housing Avaliable?</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check inline value="1" label="Yes" type="radio" onChange={handleChange} checked={formData.formHousing==="1"}/>
              <Form.Check inline value="0" label="No" type="radio" onChange={handleChange} checked={formData.formHousing==="0"}/>
            </div>
          </Form.Group>

          <br/><br/>

          <Form.Group><Button variant="light" onClick={handleSubmit}>
            Submit
          </Button></Form.Group>
        </Form>
      </Container>

      <Footer/>
    </div>
    
  );
}

export default AddListing;