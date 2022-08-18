import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'

import Nav from 'react-bootstrap/Nav';

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
    <Navbar>
      <Container>
        <Navbar.Brand href="/">WellnessPlus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
              <Nav className=" justify-contend-end">
                <p>Hello: {user.firstName}</p>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href='/logout'>Logout</Nav.Link>
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
    
  );
}

export default Header;