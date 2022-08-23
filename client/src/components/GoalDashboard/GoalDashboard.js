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
      {category === "Nutrition" ?
      <Card className="my-5 col-lg-6">
      <Card.Img variant="top" src="/breakfast-image.webp" />
      <Card.Body>
        <Card.Title>Nutritious Recipes</Card.Title>
        <Card.Text>
          Explore new delicious recipes from the USDA!
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('//www.nutrition.gov/recipes')}>View</Button>
      </Card.Body>
    </Card> :category ==="Fitness"?
    <Card className="my-5 col-lg-6">
    <Card.Img variant="top" src="https://cdn.wallpapersafari.com/1/59/PTymOS.jpg" />
    <Card.Body>
      <Card.Title>Workout Routines</Card.Title>
      <Card.Text>
        Explore workout routines!
      </Card.Text>
      <Button variant="primary" onClick={() => navigate('//www.muscleandstrength.com/workout-routines')}>View</Button>
    </Card.Body>
    </Card>
    :category ==="Mindfulness" ?
    <Card className="my-5 col-lg-6">
    <Card.Img variant="top" src="https://wallpaperaccess.com/full/3445589.jpg" />
    <Card.Body>
      <Card.Title>Mindfulness Routines</Card.Title>
      <Card.Text>
        Explore new meditation techniques from UCLA Health!
      </Card.Text>
      <Button variant="primary" onClick={() => navigate('//www.uclahealth.org/marc/mindful-meditations')}>View</Button>
    </Card.Body>
    </Card>: null 
  }
    </Container>
    </>
  )
}
export default GoalDashboard;