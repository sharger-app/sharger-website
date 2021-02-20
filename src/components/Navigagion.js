import { Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(props) {
  return (
    <Navbar bg="white">
      <Navbar.Brand href="/home">Sharger</Navbar.Brand>
      <Navbar.Collapse id="navText" className="justify-content-center">
        <Nav
          activeKey={props.activeKey}
        >
          <NavItem>
            <NavLink href="#">Shargers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Host a Sharger</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Nav
        activeKey={props.activeKey}
        className="justify-content-end"
      >
        <NavItem>
          <NavLink href="#"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</NavLink>
        </NavItem>
        <NavItem>
          <faUser/>
          <NavLink href="#"><FontAwesomeIcon icon={faUser} /> Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

