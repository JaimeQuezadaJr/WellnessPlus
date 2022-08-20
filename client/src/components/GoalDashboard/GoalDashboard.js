import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GoalList from "../GoalList/GoalList";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const GoalDashboard = ({setLoggedIn}) => {

  const navigate = useNavigate();

  const [goals, setGoals] = useState([]);
  const [category, setCategory] = useState("Nutrition");
  const [complete, setComplete] = useState({});
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/current-user', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setUser(res.data.firstName);
        setLoggedIn(true);
        
        //TODO get all three goals from backend
        axios.get(`http://localhost:8000/api/${category}/user/${res.data._id}`, { withCredentials: true})
        .then(res => {
          console.log(res.data)
          setGoals(res.data)

          let tempComplete = {};
          res.data.map((goal) => tempComplete[goal._id] = goal.complete);
          setComplete(tempComplete);
        })
        .catch(err => console.log(err));
        
      })
      .catch((err) => {
        console.log(err)
        navigate('/');
      }
      ); 
  }, [category]);
  
  return (
    <>
    <Container>
      <div className="my-3">
        <h3>Welcome {user} !</h3>
      </div>
        <ButtonGroup className="">
          <Button variant="success" onClick={ (e) => setCategory(e.target.value) } value={'Nutrition'}>Nutrition</Button>
          <Button onClick={ (e) => setCategory(e.target.value) } value={'Fitness'}>Fitness</Button>
          <Button variant="light" onClick={ (e) => setCategory(e.target.value) } value={'Mindfulness'}>Mindfulness</Button>
        </ButtonGroup>
      <GoalList setGoals={setGoals} goals={goals} category={category} complete={complete} setComplete={setComplete}/>
    </Container>
    </>
  )
}
export default GoalDashboard;