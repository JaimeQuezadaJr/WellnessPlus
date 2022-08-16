import { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'

const UserRegistration = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age:0,
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  return (
    <div>UserRegistration</div>
  )
}

export default UserRegistration;