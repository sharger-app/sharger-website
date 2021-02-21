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

  const { owner, name, speed, plug, wattage, address, sessions, housing, review, image, rate } = props;

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  let total = 0.0;
  let timeWarning;
  let time_difference = (endTime.getTime() - startTime.getTime()) / (1000 * 60);

  if (time_difference <= 0) {
    timeWarning = (<p class="text-danger">End Time must be at least one minute later than beggining time</p>);
  } else if (sessions.every(x => {
    return (
      (x.start.getTime() - endTime.getTime()) > 0 ||
      (x.end.getTime() - startTime.getTime()) < 0
    );
  })) {
    total = (rate * time_difference).toFixed(2);

    timeWarning = ([
      <p class="text-success">Time slot avaliable</p>,
      <p>{`${time_difference} minutes x $${rate} = $${total}`}</p>,
      <br/>,
      <Button variant="light" href="#">Book Session</Button>,
    ]);
  } else {
    timeWarning = (<p class="text-danger">Time slot not avaliable, please pick another time</p>);
  }

  return (
    
    <div className="viewport">
      <Navigation user={props.user} login={props.login} logout={props.logout} />
      <Container style={{padding: "5% 0"}}>
        <Row className="justify-content-between">
          <Col xs lg="5">
            <h3>{name}</h3>
            <br/>
            <Row>
              <Col xs lg="1" className="align-self-center"><FontAwesomeIcon icon={faUserCircle} size="3x"/></Col>
              <Col className="align-self-center"><h4>&nbsp;&nbsp;&nbsp;&nbsp;{`${owner.first_name} ${owner.last_name}`}</h4></Col>
            </Row>
            <br/>

            <p>{`Rate: $${rate}/minute`}</p>

            <ul className="fa-ul text-muted" style={{listStyle: "none"}}>
              <li><span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>&nbsp;{address}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faPlug}/></span>&nbsp;{plug}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faChargingStation}/></span>&nbsp;{speed}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faBolt}/></span>&nbsp;{wattage}</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faBed}/></span>&nbsp;{housing ? "Yes" : "No"}</li>
            </ul>
            
            <br/>
            <h5>Check Avaliability</h5>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formStartTime">
                    <Form.Label>Start</Form.Label>
                    <Datetime value={startTime} onChange={d => setStartTime(d.toDate())}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEndTime">
                    <Form.Label>End</Form.Label>
                    <Datetime value={endTime} onChange={d => setEndTime(d.toDate())}/>
                  </Form.Group>
                </Col>
              </Row>
              {timeWarning}
              
            </Form>

          </Col>

          <Col xs lg="5">
            <Image src={image} rounded />
            <br/>
            <p>Recently Booked Sessions:</p>
            <ul className="text-muted" style={{listStyle: "none"}}>
              {sessions.map((x) => {
                const { charger, start, end } = x;
                return (<li><small>
                  {moment(start).format('MMMM Do YYYY, h:mm:ss a')} - {moment(end).format('MMMM Do YYYY, h:mm:ss a')}
                </small></li>);
              })}
            </ul>
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