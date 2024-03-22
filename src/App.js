import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Comp/Login';
import Dashboard from './Comp/Dahsboard'; // Fixed typo in component import
import FuelHist from './Comp/FuelHist';
import FuelQuote from './Comp/FuelQuote';
import FinishSignup from './Comp/FinishSignup';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/FinishSignup' element={<FinishSignup />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/FuelHist' element={<FuelHist />} />
        <Route exact path='/FuelQuote' element={<FuelQuote />} />
      </Routes>
  );
}

export default App;
