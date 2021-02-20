
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h5>Sharger</h5>
            <small className="d-block mb-3 text-muted">© 2021-2024 All Rights Reserved</small>
          </Col>
          <Col xs lg="2">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">The Company</a></li>
              <li><a className="text-muted" href="#">Products</a></li>
              <li><a className="text-muted" href="#">Our Vision</a></li>
            </ul>
          </Col>
          <Col xs lg="2">
            <h5>The Team</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">The People</a></li>
              <li><a className="text-muted" href="#">Career</a></li>
            </ul>
          </Col>
          <Col xs lg="2">
            <h5>Contact</h5>
            <ul className="list-unstyled text-small">
              <li><small className="text-muted">Inquiry: 1-800-000-000</small></li>
              <li><small className="text-muted">Fax: 1-800-000-001</small></li>
              <li><small className="text-muted">Email: contact@sharger.tech</small></li>
            </ul>
          </Col>
        </Row>
        <br/>
      </Container>
      
    </footer>
  );
}

export default Footer;
