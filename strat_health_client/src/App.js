import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import NewContact from './NewContact';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  const [loginData, setLoginData] = useState({});

  var sendLogInData = (returnedName, returnedData) =>{
    setLoginData(
      {"name": returnedName,
      "hospital_list": returnedData,
      });
  }
  
  return (
    <Router>
      <Switch>
        <Route path="/new_contact">
          <NewContact />
        </Route>
        <Route path="/home">
            <Home loginData={loginData}/>
        </Route>
        <Route path="/">
            <Login sendLogInData={sendLogInData}/>
        </Route>
      </Switch>
    </Router>
  );
}

