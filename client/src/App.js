import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import About from './components/About/About';
import GoalAdd from './components/GoalAdd/GoalAdd';
import GoalDashboard from './components/GoalDashboard/GoalDashboard';
import GoalUpdate from './components/GoalUpdate/GoalUpdate';
import Header from './components/Header/Header';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistration';

import './App.css';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route path={'/'} element={<UserLogin setIsLoggedin={setIsLoggedin}/>} />
          <Route path={'/register'} element={<UserRegistration setIsLoggedin={setIsLoggedin}/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/dashboard/:email'} element={<GoalDashboard/>} />
          <Route path={'/goal/add/:category'} element={<GoalAdd/>} />
          <Route path={'/goal/edit/:category/:id'} element={<GoalUpdate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
