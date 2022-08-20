import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../UserLogin/UserLogin.module.css'
import Card from 'react-bootstrap/Card';
const UserLogin = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/login', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLoggedIn(true);
        navigate('/dashboard');
      })
      .catch((err) => setErrors(err.response));
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-3"> 
        <Container>
          <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={user.email} onChange={handleChange} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
          </Form.Group>
          {errors.data && <p className='validation'>{errors.data.error}</p>}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Container>
      </Form>
      </>
  );
};

export default UserLogin;