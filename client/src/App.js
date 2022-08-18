import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About/About';
import GoalAdd from './components/GoalAdd/GoalAdd';
import GoalDashboard from './components/GoalDashboard/GoalDashboard';
import GoalUpdate from './components/GoalUpdate/GoalUpdate';
import Header from './components/Header/Header';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistration';
import HomePage from './components/HomePage/HomePage';

import './App.css';
import { useState } from 'react';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userId, setUserId] = useState("");
  
  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path={'/'} element={<HomePage/>}></Route>
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/about'} element={<About/>} />
          <Route path={'/dashboard'} element={<GoalDashboard />} />
          <Route path={'/goal/add/:category'} element={<GoalAdd />} />
          <Route path={'/goal/edit/:category/:id'} element={<GoalUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
