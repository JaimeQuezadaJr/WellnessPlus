import {Link} from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useEffect } from 'react';

const Header = ({setLoggedIn, loggedIn, setUserId}) => {

  useEffect(() => {

    axios.get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then( res => {
        console.log("====== working header axios", res)
        setLoggedIn(true);
        setUserId(res.data._id);
      })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
      });
    
    // if (loggedIn) {
    //   setHeaderLink([["Write New Post", '/post/new'], ["Profile", `/user`]])
    // } else {
    //   setHeaderLink([["Log In", "/"], ["Create Account", "/register"]])
    // }
  
  }, [loggedIn])

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