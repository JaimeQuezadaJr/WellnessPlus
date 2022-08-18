import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';

const Header = ({setLoggedIn, loggedIn, setUserId}) => {

  const navigate = useNavigate();
  const [headerLink, setHeaderLink] = useState([["About", "/about"], ["Register", "/register"]])


  useEffect(() => {

    if (loggedIn) {
    console.log("should be logged in, from header");
    axios.get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then( res => {
        console.log("====== working header axios", res)
        setLoggedIn(true);
        setUserId(res.data._id);
      })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
        setUserId(null);
      });
    }
    
    if (loggedIn) {
      setHeaderLink([["About", "/about"], ["Dashboard", "/dashboard"]])
    } else {
      setHeaderLink([["About", "/about"], ["Register", "/register"]])
    }
  
  }, [loggedIn])

  const onLogOut = () => {

    axios.post('http://localhost:8000/logout',{} , {withCredentials: true})
      .then(res => {
        setLoggedIn(false);
        setUserId(null)
      })
      .catch(err => console.log(err))
    navigate('/');
  }

  return (
    <div>
      <Navbar expand="md" className='pt-3'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>WellnessPlus</Navbar.Brand>
          <div className='justify-content-end'>
            <Navbar.Toggle aria-controls='wellnessplus-nav' />
            <Navbar.Collapse id="wellnessplus-nav">
              <Nav className='me-auto'>
              { headerLink.map( (link, index) =>
                <Nav.Link as={Link} to={link[1]} key={index} className={"header-link"}>{link[0]}</Nav.Link>
              )}
              { loggedIn &&
                <Button onClick={onLogOut} variant="outline-primary" size='sm' className='ms-3'>Log out</Button>
              }
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header;