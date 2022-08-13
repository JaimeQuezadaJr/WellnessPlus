import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalAdd = (props) => {

  const {category} = useParams();
  const {userId} = props;
  const navigate = useNavigate();

  const [goal, setGoal] = useState({
    "description": "",
    "completeBy": "",
  });
  const [error, setError] = useState({});

  const postSubmit = () => {
    axios.post(`http://localhost:5000/api/${category}`, {...goal, createdBy: userId}) //TODO confirm axios path and add authorization
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data)
      console.log(err)
    })
  }

  return (
    <GoalForm action={"Add"} category={"nutrition"} userId={userId} submitAction={postSubmit} goal={goal} setGoal={setGoal} error={error} />
  )
}
export default GoalAdd