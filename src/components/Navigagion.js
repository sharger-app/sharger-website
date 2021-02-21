import { Nav, Navbar, NavItem, NavLink } from "react-bootstrap";
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Navigation(props) {

  let userBar;

  if (!cookies.get("id")) {
    userBar = [
      (<NavItem>
        <NavLink href="/signin"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</NavLink>
      </NavItem>), 
      (<NavItem>
        <faUser/>
        <NavLink href="#"><FontAwesomeIcon icon={faUser} /> Register</NavLink>
      </NavItem>)
    ];
  } else {
    userBar = [
      (<NavItem>
        <NavLink href="#"><FontAwesomeIcon icon={faUser} /> {`${cookies.get('first_name')}`}</NavLink>
      </NavItem>), 
      (<NavItem>
        <faUser/>
        <NavLink href="#" onClick={props.logout}>signout</NavLink>
      </NavItem>)
    ];
  }

  return (
    <Navbar bg="white">
      <Navbar.Brand href="/">Sharger</Navbar.Brand>
      <Navbar.Collapse id="navText" className="justify-content-center">
        <Nav
          activeKey={props.activeKey}
        >
          <NavItem>
            <NavLink href="/listingtest?id=60320ee671eda01600c4baa2">Shargers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/listingaddtest">Host a Sharger</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/map">Shargers Heatmap</NavLink>
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
        {userBar}
      </Nav>
    </Navbar>
  );
}

export default Navigation;

