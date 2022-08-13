import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About/About';
import GoalAdd from './components/GoalAdd/GoalAdd';
import GoalDashboard from './components/GoalDashboard/GoalDashboard';
import GoalUpdate from './components/GoalUpdate/GoalUpdate';
import Header from './components/Header/Header';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistration';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<UserLogin/>} />
          <Route path={'/register'} element={<UserRegistration/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/dashboard'} element={<GoalDashboard/>} />
          <Route path={'/goal/add'} element={<GoalAdd/>} />
          <Route path={'/goal/edit'} element={<GoalUpdate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
