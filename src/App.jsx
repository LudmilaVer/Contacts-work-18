import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Contacts/>
        <Routes>
    
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;