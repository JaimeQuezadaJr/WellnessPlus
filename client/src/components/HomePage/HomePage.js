import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const HomePage = ({loggedIn, setLoggedIn}) => {

  const navigate = useNavigate();
  const [btnLink, setBtnLink] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://localhost:8000/api/current-user', { withCredentials: true })
    .then((res) => {
      setLoggedIn(true);
      setBtnLink(['/dashboard', 'Start Tracking']);
    })
    .catch((err) => {
      setLoggedIn(false);
      setBtnLink(['/login', 'Get Started']);
      console.log(err)
    });

  },[loggedIn])

  return (
    <Container className='mt-5 mb-5'>
      <Card className='col-lg-6'>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/wellness-sign-with-wooden-cubes-picture-id513319180?b=1&k=20&m=513319180&s=170667a&w=0&h=vhYdVc-IHZLyS3xqNVuUTcBFpsdJRKPmLzFQpgKnpJY=" />
        <Card.Body>
          <Card.Title>Track | Commit | Achieve</Card.Title>
          <Card.Text>
            Commit yourself to achieving your maximum wellness goals!
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(btnLink[0])}>{btnLink[1]}</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default HomePage;