import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import styles from './About.module.css';

const About = (props) => {

  const navigate = useNavigate();

  return (
    <div className={"d-flex justify-content-center p-5"}>
      <div className={styles.aboutText}>
        <h3 className={styles.textContainer}>Become more in tune with yourself!</h3>
        <p className={styles.textContainer}>Commit yourself to achieving your maximum wellness goals!</p>
        <Button variant={"outline-dark"} onClick={() => navigate('/login')}>Get Started</Button>
      </div>
    </div>
  )
}
export default About