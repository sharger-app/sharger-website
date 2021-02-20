import Navigation from "./Navigagion";
import Footer from "./Footer";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div class="Home">
      <Navigation/>
      <Jumbotron fluid style={{backgroundColor: "white"}}>
        <Container>
          <br/><br/><br/><br/>
          <h1 class="display-4">Find your nearest Sharger</h1><br/>
          <p class="lead">Join thousands of EV owners in North America.</p>
          <br/><br/>
          <Button href="#" variant="outline-primary" size="lg">
            <FontAwesomeIcon icon={faSearchLocation} /> Find a Sharger
          </Button>
          <br/><br/><br/><br/>
        </Container>
      </Jumbotron>

      <Jumbotron fluid>
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

      <Jumbotron fluid style={{backgroundColor: "white"}}>
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


      <Jumbotron fluid>
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

