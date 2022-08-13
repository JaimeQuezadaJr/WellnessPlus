import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const GoalForm = (props) => {

  const {action, category, submitAction, goal, setGoal, error} = props;



  const onChangeHandler = (e) => {
    setGoal({...goal, [e.target.name]: e.target.value });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitAction();
  }


  return (
    <div className='d-flex flex-column'>
      <h3>{action} {category} Goal</h3>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='textarea' row={3} name='description' onChange={onChangeHandler} value={goal.description}/>
          {error.description &&
            <Form.Text className='text-danger'>{error.description}</Form.Text>
          }
        </Form.Group>
        <Form.Group controlId='completeBy'>
          <Form.Label>Complete By</Form.Label>
          <Form.Control type='date' name='completeBy' onChange={onChangeHandler} value={goal.completeBy}/>
          {error.completeBy &&
            <Form.Text className='text-danger'>{error.completeBy}</Form.Text>
          }
        </Form.Group>
        <div className='d-grid d-md-block'>
          <Button variant="outline-dark" type="submit" className='col-md-5'>Update</Button>
        </div>
      </Form>
    </div>
  )
}
export default GoalForm;