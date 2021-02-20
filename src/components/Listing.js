import { Container, Row, Image, Col, Form, Button } from "react-bootstrap";
import { faMapMarkerAlt, faUserCircle, faBolt, faPlug, faChargingStation, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from "moment";

import Navigation from "./Navigagion";
import Footer from "./Footer";
import ListingCard from "./ListingCard";
import { useState } from "react";

function Listing(props) {
  // props: owner, speed, plug, wattage, adress, sessions, housing, review, image

  const { owner, name, speed, plug, wattage, address, sessions, housing, review, image } = props;

  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());

  return (
    
    <div>
      <Navigation/>
      <Container style={{padding: "5% 0"}}>
        <Row className="justify-content-between">
          <Col xs lg="5">
            <h3>{name}</h3>
            <br/>
            <Row>
              <Col xs lg="1" className="align-self-center"><FontAwesomeIcon icon={faUserCircle} size="3x"/></Col>
              <Col className="align-self-center"><h4>&nbsp;&nbsp;&nbsp;&nbsp;{`${owner.first_name} ${owner.last_name[0]}.`}</h4></Col>
            </Row>
            <br/>
            <ul className="fa-ul text-muted" style={{listStyle: "none"}}>
              <li><span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>&nbsp;{address}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faPlug}/></span>&nbsp;{plug}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faChargingStation}/></span>&nbsp;{speed}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faBolt}/></span>&nbsp;{wattage}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faBed}/></span>&nbsp;{housing ? "Yes" : "No"}</li>
            </ul>
            
            <br/>
            <br/>
            <h5>Check Avaliability</h5>
            <br/>

            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formStartTime">
                    <Form.Label>Start</Form.Label>
                    <Datetime />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEndTime">
                    <Form.Label>End</Form.Label>
                    <Datetime />
                  </Form.Group>
                </Col>
              </Row>
              <p class="text-success">Looks Good!</p>
              <Button variant="light" href="#">Book Session</Button>
            </Form>

          </Col>

          <Col xs lg="5" className="align-self-center">
            <Image src={image} rounded />
          </Col>
        </Row>
        
        <br/><br/><br/><br/><hr/><br/><br/>

        <Row>
          <h3>Similar Listings</h3>
        </Row>
        <br/>
        <br/>

        <Row className="justify-content-center">
          <Col><ListingCard { ...props } /></Col>
          <Col><ListingCard { ...props } /></Col>
          <Col><ListingCard { ...props } /></Col>
        </Row>
      </Container>

      
      <Footer/>
    </div>
  );

}

export default Listing;