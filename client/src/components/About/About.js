import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const About = ({setLoggedIn}) => {

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
      setBtnLink(['/login', 'Get Started']);
      console.log(err)
    });

  },[])

  return (
    <Container className='mt-5 mb-5'>
    <Card className='col-lg-6'>
      <Card.Header as="h5">Become more in tune with yourself!</Card.Header>
      <Card.Body>
        <Card.Text>
        Overall mental and physical well being should be at the top of anyone's priorities. Finding that balance will help you feel better. This platform facilitates your ability to track your nutrition, fitness, and mindfulness goals. It allows you to neatly organize your goals so you can commit to complete them by a certain date. Being able to track, commit, and achieve specific target objectives will allow you to be better in tune with yourself. The intent is to provide a platform where you can take some small steps to achieving your desired self equilibrium.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(btnLink[0])}>{btnLink[1]}</Button>
      </Card.Body>
    </Card>
    </Container>
  )
}
export default About