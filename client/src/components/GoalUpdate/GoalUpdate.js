import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalUpdate = ({userId}) => {

  const {category, id} = useParams();
  const navigate = useNavigate();

  const [goal, setGoal] = useState({ 
    "description": "",
    "completedBy": "",
  });
  const [error, setError] = useState({});
  const [loaded, setLoaded] = useState(false);
  // const [userId, setUserId] = useState(['62fc0cdbedbf1f1e0933cd8f']) //TODO change after test. props? token?

  useEffect(() => {
    axios.get(`http://localhost:8000/api/${category}/${id}`, { withCredentials: true }) //TODO confirm axios path and add authorization
    .then( res => {
      setGoal(res.data);
      setLoaded(true);
    })
    .catch(err => console.log(err))
  }, [category, id])

  const putSubmit = () => {
    axios.put(`http://localhost:8000/api/${category}/${id}`, goal, { withCredentials: true }) //TODO confirm axios path and add authorization
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data.errors);
      console.log(err)
    })
  }

  return (
    <>
    { loaded &&
      <GoalForm action={"Update"} category={category} userId={userId} submitAction={putSubmit} goal={goal} setGoal={setGoal} error={error} />
    }
    </>
  )
}
export default GoalUpdate