import React from 'react';
import './App.css';
import Home_page from './components/Home_page';
import Login_page from './components/Login_page';
import Signin_page from './components/Signin_page';
import QnA_page from './components/QnA_page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Switch>

          <Route path="/login">
          <Login_page/>
          </Route>

          <Route path="/signin">
          <Signin_page/>
          </Route>

          <Route path="/qna">
          <QnA_page/>
          </Route>

          <Route path="/">
          <Home_page/>
          </Route>

          

        </Switch>
        </Router>
     
     </>
  );
}

export default App;
