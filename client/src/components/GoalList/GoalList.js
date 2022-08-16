import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./GoalList.module.css";

const GoalList = ({goals, category}) => {

  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);

  const onCompleteHandler = (e, goalId) => {
    //TODO set put request and move setComplete to then in response
    console.log(e);
    // axios.put(`http://localhost:5000/${category}/${goalId}`, {"complete": !complete})
    //   .then(res => {
          // console.log(res);
          setComplete(!complete);
    //   })
    //   .catch(err => console.log(err));
  }


  //TODO change edit & add button navigate

  return (
    <div className={`${styles.goalContainer} p-5 m-5`}>
      { goals.map( (goal, index) =>
        <Row key={index}>
          <Col md={8}>
            <p className={complete? styles.goalComplete: styles.goalNotComplete}>goal example {goal}</p>
            <Row as={'dl'} className={'g-5'}>
              <Col>
                <Row>
                  <Col as={'dt'} className={styles.goalDates}>Made on</Col>
                  <Col as={'dd'} className={styles.goalDates}>12/11/2021</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                <Col as={'dt'} className={styles.goalDates}>Complete by</Col>
                  <Col as={'dd'} className={styles.goalDates}>12/31/2021</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="d-grid pb-5">
            { complete
              ? <Button onClick={ (e) => onCompleteHandler(e, goal._id) } variant={'secondary'}>Completed</Button>
              : <Button onClick={ (e) => onCompleteHandler(e, goal._id) } variant={'primary'}>Complete</Button>
            }
          </Col>
          <Col md={2} className="d-grid pb-5">
            <Button onClick={() => navigate('/goal/edit/nutrition/1')}>Edit</Button>
          </Col>
        </Row>
      )}
      <Row>
        <Col md={8}>
          <p className={complete? styles.goalComplete: styles.goalNotComplete}>goal example</p>
          <Row as={'dl'} className={'g-5'}>
            <Col>
              <Row>
                <Col as={'dt'} className={styles.goalDates}>Made on</Col>
                <Col as={'dd'} className={styles.goalDates}>12/11/2021</Col>
              </Row>
            </Col>
            <Col>
              <Row>
              <Col as={'dt'} className={styles.goalDates}>Complete by</Col>
                <Col as={'dd'} className={styles.goalDates}>12/31/2021</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={2} className="d-grid pb-5">
          { complete
            ? <Button onClick={ onCompleteHandler } variant={'secondary'}>Completed</Button>
            : <Button onClick={ onCompleteHandler } variant={'primary'}>Complete</Button>
          }
        </Col>
        <Col md={2} className="d-grid pb-5">
          <Button onClick={() => navigate('/goal/edit/nutrition/1')}>Edit</Button>
        </Col>
      </Row>
      <Col md={6} className="my-5 d-grid mx-md-3 mx-auto">
        <Button onClick={() => navigate('/goal/add/nutrition')}>Add Goal</Button>
      </Col>
    </div>
  )
}
export default GoalList;