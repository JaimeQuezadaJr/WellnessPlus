import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const GoalForm = (props) => {

  const {action, category, submitAction, goal, setGoal, error} = props;

  const datePickerParse = (date) => {
    let dateObj = new Date(date);
    let day = `0${dateObj.getDate()}`.slice(-2);
    let month = `0${dateObj.getMonth() + 1}`.slice(-2);
    return `${dateObj.getFullYear()}-${month}-${day}`;
  }

  const onChangeHandler = (e) => {
    setGoal({...goal, [e.target.name]: e.target.value }); 
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitAction();
  }

  return (
    <div className='d-flex flex-column'>
      <h3>{action} {category.toUpperCase()} Goal</h3>
      <Form onSubmit={ onSubmitHandler }>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='textarea' row={3} name='description' onChange={onChangeHandler} value={goal.description}/>
          {error.description && 
            <Form.Text className='text-danger'>{error.description.message}</Form.Text>
          }
        </Form.Group>
        <Form.Group controlId='completedBy'>
          <Form.Label>Completed By</Form.Label>
          <Form.Control type='date' name='completedBy' onChange={onChangeHandler} value={datePickerParse(goal.completedBy)}/>
          {error.completedBy && 
            <Form.Text className='text-danger'>{error.completedBy.message}</Form.Text>
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