import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './About.module.css';

const About = (props) => {

  const navigate = useNavigate();

  return (
    <Container className='mt-5 mb-5'>
    <Card className='col-lg-6'>
      <Card.Header as="h5">Become more in tune with yourself!</Card.Header>
      <Card.Body>
        {/* <Card.Title>Become more in tune with yourself!</Card.Title> */}
        <Card.Text>
        Overall mental and physical well being should be at the top of anyone's priorities. Finding that balance will help you feel better. This platform facilitates your ability to track your nutrition, fitness, and mindfulness goals. It allows you to neatly organize your goals so you can commit to complete them by a certain date. Being able to track, commit, and achieve specific target objectives will allow you to be better in tune with yourself. The intent is to provide a platform where you can take some small steps to achieving your desired self equilibrium.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('/login')}>Get Started</Button>
      </Card.Body>
    </Card>
    </Container>
  )
}
export default About