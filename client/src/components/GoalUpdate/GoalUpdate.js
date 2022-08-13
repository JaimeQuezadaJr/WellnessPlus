import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalUpdate = (props) => {

  const {userId} = props;
  const {id, category} = useParams;
  const navigate = useNavigate();

  const [goal, setGoal] = useState({
    "description": "",
    "completeBy": "",
  });
  const [error, setError] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // axios.get(`http://localhost:5000/api/posts/${id}`) //TODO confirm axios path and add authorization
    // .then( res => {
    //   setGoal(res.data)
      setLoaded(true)
    // })
    // .catch(err => console.log(err))
  }, [])

  const postSubmit = (successResponse) => {
    axios.put(`http://localhost:5000/api/${category}`, {...goal, createdBy: userId}) //TODO confirm axios path and add authorization
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data)
      console.log(err)
    })
  }

  return (
    <>
    { loaded &&
      <GoalForm action={"Update"} category={"nutrition"} userId={userId} submitAction={postSubmit} goal={goal} setGoal={setGoal} error={error} />
    }
    </>
  )
}
export default GoalUpdate