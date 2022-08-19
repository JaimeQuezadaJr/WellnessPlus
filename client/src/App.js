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
  
  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path={'/'} element={<HomePage setLoggedIn={setLoggedIn} />} />
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/about'} element={<About setLoggedIn={setLoggedIn} />} />
          <Route path={'/dashboard/'} element={<GoalDashboard setLoggedIn={setLoggedIn} />} />
          <Route path={'/goal/add/:category'} element={<GoalAdd setLoggedIn={setLoggedIn} />} />
          <Route path={'/goal/edit/:category/:id'} element={<GoalUpdate setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
