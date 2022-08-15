import { useEffect, useState } from "react";
import axios from "axios";

import GoalList from "../GoalList/GoalList";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const GoalDashboard = (props) => {


  const [nutrition, setNutrition] = useState(['nutrition']);
  const [fitness, setFitness] = useState(['fitness']);
  const [mindfulness, setMindfulness] = useState(['mindfulness']);
  const [category, setCategory] = useState("nutrition");
  
  // useEffect(() =>{
      //TODO get all three goals from backend
  //   axios.get(`http://localhost:5000/api/goals/nutrition/${}id`)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // },[])

  //TODO onClick: setCategory, axios-Category
  const categoryHandler = (e) => {
    setCategory(e.target.value);
    // axios.get(`http://localhost:5000/api/${e.target.value}`)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  }
  
  return (
    <div className="m-5">
      <div className="my-3">
        <h2>Welcome user!</h2>
      </div>
      <div className="mx-5 mt-5">
        <ButtonGroup>
          <Button onClick={ categoryHandler } value={'nutrition'}>Nutrition</Button>
          <Button onClick={ categoryHandler } value={'fitness'}>Fitness</Button>
          <Button onClick={ categoryHandler } value={'mindfulness'}>Mindfulness</Button>
        </ButtonGroup>
      </div>
      { category === "nutrition" &&
          <GoalList goals={nutrition}/>
      }
      { category === "fitness" &&
          <GoalList goals={fitness}/>
      }
      { category === "mindfulness" &&
          <GoalList goals={mindfulness}/>
      }
    </div>
  )
}
export default GoalDashboard;