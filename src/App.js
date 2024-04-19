import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Comp/Login';
import Signup from './Comp/Signup';
import Profile from './Comp/Profile';
import FuelQuote from './Comp/FuelQuote';
import FuelHistory from './Comp/FuelHistory';
import ViewProfile from './Comp/ViewProfile';



function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='profile' element= {<Profile />} />
        <Route path='/fuel_quote_form' element={<FuelQuote />} />
        <Route path='/fuel_history' element={<FuelHistory />} />
        <Route path='/view_profile' element={<ViewProfile />} />
        <Route path="/about" element={
          <div>
            Group 48
            <p>Created by:</p>
            <p>Khoi Vo </p>
            <p>Chris Do</p>
            <p>Riches Dang</p>
            <p>Christine Ngo</p>
            </div>} />

      </Routes>
  );
}

export default App;
