import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalAdd = ({setLoggedIn}) => {

  const {category} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        navigate('/');
        console.log(err)
      });
  }, [])


  const defaultCompletedBy = () => {
    let today = new Date();
    let tomorrow = new Date();
    return tomorrow.setDate(today.getDate() + 1);
  }

  const [goal, setGoal] = useState({ 
    "description": "",
    "completedBy": defaultCompletedBy(),
  });
  const [error, setError] = useState({});



  const postSubmit = () => {
    axios.post(`http://localhost:8000/api/${category}`, goal, {withCredentials:true})
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data.errors);
      console.log(err);
    })
  }

  return (
    <GoalForm action={"Add"} category={category} submitAction={postSubmit} goal={goal} setGoal={setGoal} error={error}/>
  )
}
export default GoalAdd