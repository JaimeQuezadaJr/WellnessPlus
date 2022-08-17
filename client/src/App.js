import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About/About';
import GoalAdd from './components/GoalAdd/GoalAdd';
import GoalDashboard from './components/GoalDashboard/GoalDashboard';
import GoalUpdate from './components/GoalUpdate/GoalUpdate';
import Header from './components/Header/Header';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistration';

import './App.css';
import { useState } from 'react';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  
  return (
    <div>
      <BrowserRouter>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setUserId={setUserId}/>
        <Routes>
          <Route path={'/'} element={<UserLogin setLoggedIn={setLoggedIn} setUserId={setUserId}/>} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} setUserId={setUserId}/>}/>
          <Route path={'/about'} element={<About/>} />
          <Route path={'/dashboard'} element={<GoalDashboard userId={userId} />} />
          <Route path={'/goal/add/:category'} element={<GoalAdd userId={userId} />} />
          <Route path={'/goal/edit/:category/:id'} element={<GoalUpdate userId={userId} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
