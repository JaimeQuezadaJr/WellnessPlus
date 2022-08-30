import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import GoalForm from '../GoalForm/GoalForm';


const GoalUpdate = ({setLoggedIn}) => {

  const {category, id} = useParams();
  const navigate = useNavigate();

  const [goal, setGoal] = useState({ 
    "description": "",
    "completedBy": "",
  });
  const [error, setError] = useState({});
  const [loaded, setLoaded] = useState(false); 

  const datePickerParse = (date) => {
    let dateObj = new Date(date);
    let today = new Date();
    if(today > dateObj){
      let tomorrow = new Date();
      dateObj = new Date(tomorrow.setDate(today.getDate() + 1));
    }
    // console.log("date = ", date)
    let day = `0${dateObj.getDate()}`.slice(-2);
    // console.log(dateObj.getDate())
    let month = `0${dateObj.getMonth() + 1}`.slice(-2);
    return `${dateObj.getFullYear()}-${month}-${day}`;
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        setLoggedIn(true);

        //get original data if logged in
        axios.get(`http://localhost:8000/api/${category}/${id}`, { withCredentials: true })
        .then( res => {
          setGoal({...res.data, completedBy: datePickerParse(res.data.completedBy)});
          setLoaded(true);
        })
        .catch(err => console.log(err))
      })
      .catch((err) => {
        navigate('/');
        console.log(err)
      });

  }, [category, id]) 

  const putSubmit = () => {
    axios.put(`http://localhost:8000/api/${category}/${id}`, goal, { withCredentials: true })
    .then(res => navigate('/dashboard'))
    .catch(err => {
      setError(err.response.data.errors);
      console.log(err)
    })
  }

  return (
    <>
    { loaded &&
      <GoalForm action={"Update"} category={category} submitAction={putSubmit} goal={goal} setGoal={setGoal} error={error} formButton={"Update"}/>
    }
    </>
  )
}
export default GoalUpdate