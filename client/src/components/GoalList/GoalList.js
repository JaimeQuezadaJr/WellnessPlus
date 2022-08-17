import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./GoalList.module.css";

const GoalList = ({goals, category, complete, setComplete}) => {

  const navigate = useNavigate();

  const dateParse = (date) => {
    let dateObj = new Date(date);
    let day = `0${dateObj.getDate()}`.slice(-2);
    let month = `0${dateObj.getMonth() + 1}`.slice(-2);
    return `${month}/${day}/${dateObj.getFullYear()}`;
  }

  const onCompleteHandler = (e, goalId) => {
    //TODO set put request and move setComplete to then in response
    console.log(e, complete);
    
    axios.put(`http://localhost:5000/api/${category}/${goalId}`, {"complete": !complete[goalId]})
      .then(res => {
        console.log(res);
        setComplete({...complete, [goalId]: !complete[goalId]})
      })
      .catch(err => console.log(err));
  }


  //TODO change edit & add button navigate

  return (
    <div className={`${styles.goalContainer} p-5 m-5`}>
      {JSON.stringify(goals)}
      { goals.map( (goal, index) =>
        <Row key={index}>
          <Col sm={8}>
            <p className={complete[goal._id]? styles.goalComplete: styles.goalNotComplete} id={'goal-description'}>{goal.description}</p>
            <Row as={'dl'} className={'g-5'}>
              <Col>
                <Row>
                  <Col as={'dt'} className={styles.goalDates}>Made on</Col>
                  <Col as={'dd'} className={styles.goalDates}>{dateParse(goal.updatedAt)}</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col as={'dt'} className={styles.goalDates}>Complete by</Col>
                  <Col as={'dd'} className={styles.goalDates}>{dateParse(goal.completedBy)}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
              { complete[goal._id]
                ? <Button onClick={ (e) => onCompleteHandler(e, goal._id) } variant={'secondary'} className={'me-3'}>Completed</Button>
                : <Button onClick={ (e) => onCompleteHandler(e, goal._id) } variant={'primary'} className={'me-3'}>Complete</Button>
              }
              <Button onClick={() => navigate('/goal/edit/nutrition/1')}>Edit</Button>
          </Col>
        </Row>
      )}
      <Col md={6} className="my-5 d-grid mx-md-3 mx-auto">
        <Button onClick={() => navigate('/goal/add/nutrition')}>Add Goal</Button>
      </Col>
    </div>
  )
}
export default GoalList;