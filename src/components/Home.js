import Navigation from "./Navigagion";
import Footer from "./Footer";
import { Button, Container, Jumbotron, Row, Card, Form, Col } from "react-bootstrap";
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

function Home(props) {

  const [formData, setFormData] = useState({
    formLocation: "",
    formChargerType: "type a",
    formChargerWattage: "wattage range a",
    formHousing: "0",
  });

  const handleChange = (e) => {
    setFormData(s => ({
      ...s,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(formData);
  };

  return (
    <div className="viewport">
      <Navigation user={props.user} login={props.login} logout={props.logout}/>

      <Container fluid style={{margin: "0", backgroundImage: "url(greencity.jpg)", backgroundPosition: "center", paddingTop: "10%", paddingBottom: "10%"}}>
        <Row className="justify-content-md-center">
          <h1 className="display-4 text-white">Find your nearest Sharger</h1><br/>
          <br/>
        </Row>
        <Row className="justify-content-md-center">
          <p className="lead text-white">Join thousands of EV owners in North America.</p>
          <br/>
        </Row>
        <br/><br/>
        <Row className="justify-content-md-center">
          <Card style={{width:"30em", padding: "3% 2%"}}>
            <Card.Title className="text-center">Find a Sharger</Card.Title>
            <Card.Text className="text-muted text-center">Just takes a few simple steps</Card.Text>
            <hr/>
            <Form>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter your location" onChange={e => handleChange(e)} />
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
                    <Form.Label>Charger Wattage</Form.Label>
                    <Form.Control as="select" custom onChange={handleChange}>
                      <option>wattage range a</option>
                      <option>wattage range b</option>
                      <option>wattage range c</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

              </Row>
              

              <Form.Group controlId="formHousing">
                <Form.Label>With Housing?</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check inline value="1" label="Yes" type="radio" onChange={handleChange} checked={formData.formHousing==="1"}/>
                  <Form.Check inline value="0" label="No" type="radio" onChange={handleChange} checked={formData.formHousing==="0"}/>
                </div>
              </Form.Group>
              <br/>
              <br/>
              <Form.Group>
                <Button variant="light" size="lg" block onClick={handleSubmit}><FontAwesomeIcon icon={faSearchLocation}/> Find a Sharger</Button>
              </Form.Group>
            </Form>
          </Card>
        </Row>
      </Container>

      <Jumbotron style={{margin: "0"}} fluid>
        <Container>
          <br/><br/><br/><br/>
          <h1 className="display-4 text-right">Have a vacant EV charging spot?</h1><br/>
          <p className="lead text-right">Become a Sharger host and make some money off your spare charger.</p>
          <br/><br/>
          <Button href="#" variant="outline-primary" className="float-right" size="lg">
            <FontAwesomeIcon icon={faSearchLocation} /> Host a Sharger
          </Button>
          <br/><br/>
          <br/><br/><br/><br/>
        </Container>
      </Jumbotron>

      <Jumbotron style={{margin: "0"}} fluid style={{backgroundColor: "white"}}>
        <Container>
          <br/><br/><br/><br/>
          <h1 class="display-4">Make the switch</h1><br/>
          <p class="lead">Since 2024, Sharger has inderectly deducted 2% of global carborn emission, by making EV ownership a better experience</p>
          <br/><br/>
          <Button href="#" variant="outline-primary" size="lg">
            Learn More
          </Button>
          <br/><br/><br/><br/>
        </Container>
      </Jumbotron>


      <Jumbotron style={{margin: "0"}} fluid>
        <Container>
          <br/><br/><br/><br/>
          <h1 className="display-4 text-right">Thinking about collaborating with us?</h1><br/>
          <p className="lead text-right">Become a Sharger Partner and add your company to the Sharger network.</p>
          <br/><br/>
          <Button href="#" variant="outline-primary" className="float-right" size="lg">
            Contact
          </Button>
          <br/><br/>
          <br/><br/><br/><br/>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
}

export default Home;

