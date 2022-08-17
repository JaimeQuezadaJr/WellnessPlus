import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalAdd = ({userId}) => {

  const {category} = useParams();
  const navigate = useNavigate();

  // const [userId, setUserId] = useState(['62fc0cdbedbf1f1e0933cd8f']) //TODO change after test. props? token?

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
    axios.post(`http://localhost:8000/api/${category}`, {...goal, createdBy: userId}) //TODO confirm axios path and add authorization
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data.error.errors);
      console.log(err);
    })
  }

  return (
    <GoalForm action={"Add"} category={category} userId={userId} submitAction={postSubmit} goal={goal} setGoal={setGoal} error={error}/>
  )
}
export default GoalAdd