import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginparent from './LoginParent/Loginparent'
import Loginteacher from './LoginTeacher/Loginteacher'
import WhoAreYou from './WhoAreYou/WhoAreYou'
import Header from './LandingPage/Header'
import Body from './LandingPage/Body'


function App() {

  return (
    <>
  <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Body />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
