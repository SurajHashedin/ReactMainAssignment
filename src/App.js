import React from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import { BrowserRouter , Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="profile/:id" element={<Profile />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
