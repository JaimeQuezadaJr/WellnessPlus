import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';
import './Header.module.css';

const Header = ({loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
    
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [loggedIn])

  const onLogOut = () => {
    axios
    .post('http://localhost:8000/logout',{}, { withCredentials: true })
    .then((res) => {
        console.log(res.data);
        setUser(null);
        navigate('/')
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand href="/"><img
              alt=""
              src="/zoomed-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}WellnessPlus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
              <Nav className=" justify-contend-end">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Button variant="primary" onClick={onLogOut}>Logout</Button>
            </Nav>
          ) : (
              <Nav className=" justify-contend-end">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </Nav>
          )}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='footer fixed-bottom' id='footer' style={{backgroundColor:'#0d6efd', height:20}}></div>
    </>
    
  );
}

export default Header;