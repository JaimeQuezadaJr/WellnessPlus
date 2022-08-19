import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const home = () => {
  return (
    <Container className='mt-5 mb-5'>
      <Card className='col-lg-6'>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/wellness-sign-with-wooden-cubes-picture-id513319180?b=1&k=20&m=513319180&s=170667a&w=0&h=vhYdVc-IHZLyS3xqNVuUTcBFpsdJRKPmLzFQpgKnpJY=" />
        <Card.Body>
          <Card.Title>Track | Commit | Achieve</Card.Title>
          <Card.Text>
            Commit yourself to achieving your maximum wellness goals!
          </Card.Text>
          <Nav.Link href='/login'><Button variant="primary">Get Started</Button></Nav.Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default home;