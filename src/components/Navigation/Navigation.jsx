import InfoUser from 'components/InfoUser/InfoUser';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const { useSelector } = require('react-redux');
const { selectToken } = require('redux/user/userSelect');

const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <Navbar bg="dark" variant="dark" className="d-flex">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            {token && (
              <Nav.Link to="/contacts" as={Link}>
                Contacts
              </Nav.Link>
            )}
            <Nav.Link to="/signup" as={Link}>
              Sign Up
            </Nav.Link>
            <Nav.Link to="/login" as={Link}>
              Login
            </Nav.Link>
          </Nav>
          <InfoUser />
        </Container>
      </Navbar>
      <Container className="align-items-center d-flex flex-column justify-content-center ">
        <h1>Welcome</h1>
      </Container>
    </>
  );
};

export default Navigation;
