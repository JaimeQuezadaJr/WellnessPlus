import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./GoalList.module.css";

const GoalList = ({goals}) => {

  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);

  const onCompleteHandler = (e) => {
    //TODO set put request and move setComplete to then in response
    console.log(e);
    setComplete(!complete);
    // axios.put('http://localhost:5000/api/')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  }


  //TODO change edit & add button navigate

  return (
    <div>
      <Row className={`${styles.goalContainer} p-5 m-5`}>
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