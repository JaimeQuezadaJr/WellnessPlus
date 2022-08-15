import { useEffect, useState } from "react";
import axios from "axios";

import GoalList from "../GoalList/GoalList";

const GoalDashboard = (props) => {


  const [nutrition, setNutrition] = useState([]);
  const [fitness, setFitness] = useState([]);
  const [mindfulness, setMindfulness] = useState([]);
  
  // useEffect(() =>{
      //TODO get all three goals from backend
  //   axios.get('http://localhost:5000/api/goals')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // },[])
  
  return (
    <div className="m-5">
      <div className="my-3">
        <h2>Welcome user!</h2>
      </div>
      <div>
        <GoalList goals={nutrition}/>
      </div>
      {/* <div>
        <GoalList goals={fitness}/>
      </div>
      <div>
        <GoalList goals={mindfulness}/>
      </div> */}
    </div>
  )
}
export default GoalDashboard