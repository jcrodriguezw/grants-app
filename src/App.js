import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage'
import DetailPage from './components/DetailPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header/>
      <div style={{minHeight:'calc(100vh - 222px)', maxWidth:'1440px', margin: '0 auto'}}>
        <Switch>

          <Route path='/detail/:id'>
            <DetailPage/>
          </Route>

          <Route path='/' exact>
            <HomePage />
          </Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
