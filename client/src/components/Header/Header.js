import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';
import styles from './Header.module.css';

const Header = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
    
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, [loggedIn])

  const onLogOut = () => {
    axios
    .post('http://localhost:8000/logout',{}, { withCredentials: true })
    .then((res) => {
        console.log(res.data);
        setUser(null);
        setLoggedIn(false);
        navigate('/')
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/"><img
              alt=""
              src="/zoomed-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-3"
            />{' '}WellnessPlus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
              <Nav className=" justify-contend-end">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                <Button variant="primary" onClick={onLogOut}>Logout</Button>
            </Nav>
          ) : (
              <Nav className=" justify-contend-end">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </Nav>
          )}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className={`${styles.footer} fixed-bottom`}></div>
    </>
    
  );
}

export default Header;