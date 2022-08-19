import { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UserRegistration = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    password: '',
    confirmPassword: '',
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
      .post('http://localhost:8000/register', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLoggedIn(true);
        navigate('/dashboard');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };
  
  return (
    <Form onSubmit={handleSubmit} className='mt-3 mb-5'>
        <Container>
          <Form.Group className="mb-3 col-md-4" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name='firstName' placeholder="Enter first name" value={user.firstName} onChange={handleChange} required />
              {errors.firstName && <p className='validation'>{errors.firstName.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name='lastName' placeholder="Enter last name" value={user.lastName} onChange={handleChange} required />
              {errors.lastName && <p className='validation'>{errors.lastName.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name='age' placeholder="Enter age" value={user.age} onChange={handleChange} required />
              {errors.age && <p className='validation'>{errors.age.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" value={user.email} onChange={handleChange} required />
              {errors.email && <p className='validation'>{errors.email.message}</p>}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

          <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" value={user.password} onChange={handleChange} />
            {errors.password && <p className='validation'>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group className="mb-3 col-md-4" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='confirmPassword' placeholder="Must Match Password" value={user.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className='validation'>{errors.confirmPassword.message}</p>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Container>
      </Form>
  );
};

export default UserRegistration;