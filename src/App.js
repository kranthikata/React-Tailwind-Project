import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import CreateProfile from './pages/CreateProfile';
import SelectPurpose from './pages/SelectPurpose';


function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/create-profile" element={<CreateProfile/>} />
        <Route path="/select-purpose" element={<SelectPurpose/>} />
        </Routes>
    </Router>
  );
}

export default App;
