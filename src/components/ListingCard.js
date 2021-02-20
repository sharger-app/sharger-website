import { Row, Card, Col, Container } from "react-bootstrap";

import { faUserCircle, faBolt, faPlug, faChargingStation, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListingCard(props) {
  // props: owner, speed, plug, wattage, adress, sessions, housing, review, image

  const { owner, name, speed, plug, wattage, address, sessions, housing, review, image } = props;

  return (
    <Card style={{width: "20em"}} className="text-left" as="button">
      <Card.Img variant="top" src={image} />
      <Container style={{padding: "8% 8%"}}>
        <Card.Title>{name}</Card.Title>
        <hr/>
        <Card.Text>{address}</Card.Text>
        <Row>
          <Col>
            <ul className="fa-ul text-muted" style={{listStyle: "none"}}>
              <li><Card.Text><span className="fa-li"><FontAwesomeIcon icon={faPlug}/></span>&nbsp;{plug}</Card.Text></li>
              <li><Card.Text><span className="fa-li"><FontAwesomeIcon icon={faChargingStation}/></span>&nbsp;{speed}</Card.Text></li>
            </ul>
          </Col>

          <Col>
            <ul className="fa-ul text-muted" style={{listStyle: "none"}}>
              <li><Card.Text><span className="fa-li"><FontAwesomeIcon icon={faBolt}/></span>&nbsp;{wattage}</Card.Text></li>
              <li><Card.Text><span className="fa-li"><FontAwesomeIcon icon={faBed}/></span>&nbsp;{housing ? "Yes" : "No"}</Card.Text></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2" className="align-self-center"><FontAwesomeIcon icon={faUserCircle} size="2x"/></Col>
          <Col className="align-self-center"><Card.Text>{`${owner.first_name} ${owner.last_name[0]}.`}</Card.Text></Col>
        </Row>
        
      </Container>
    </Card>
  );

}

export default ListingCard;