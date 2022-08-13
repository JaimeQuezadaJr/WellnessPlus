import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {

  return (
    <div>
      <Navbar expand="md" className='pt-3'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>WellnessPlus</Navbar.Brand>
          <div className='justify-content-end'>
            <Navbar.Toggle aria-controls='wellnessplus-nav' />
            <Navbar.Collapse id="wellnessplus-nav">
              <Nav className='me-auto'>
                <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header;