import React, { useState} from "react"
import { Route, Switch } from "react-router-dom";

import facade from "./components/loginFacade";
import SearchEngine from "./components/SearchEngine"
import Header from './components/Header'
import GetFlights from './components/GetFlights'
import Home from './components/Home'
import LogIn from './components/Login'
import SearchResult from './components/SearchResult'

import './css/NavbarStyle.css';
import header from "./images/header.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/myStyles.css';

const NoMatch = () => {
  return (
    <h1>This page does not exist!</h1>
  );
};

function App() {
  const init = facade.loggedIn;
  const [loggedIn, setLoggedIn] = useState(init)
  const [hasSearched, setHasSearched] = useState(false)

  const searchBodyInit = {
    "destinationFrom": "",
    "destinationTo": "",
    "passengers": 0
  }

  let [searchBody, setSearchBody] = useState(searchBodyInit);

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }
  const login = (user, pass) => {
    facade.login(user, pass)
      .then(res => setLoggedIn(true));
  }

  return (
    <div>
      <div className="my-container">
        <img className="my-image" src={header} alt="header" />
        <h1 className="my-image-text">Just Travel</h1>
      </div>
      <Header loggedIn={loggedIn} logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/searchpage">
          <SearchEngine setHasSearched={setHasSearched} 
          searchBody={searchBody}
          setSearchBody={setSearchBody} />
          {
            hasSearched && <SearchResult searchBody={searchBody} />
          }
        </Route>
        <Route path="/seeallpage">
          <GetFlights />
        </Route>
        <Route path="/myprofilepage">

        </Route>
        <Route path="/loginpage">
          <LogIn />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  )
}
export default App;
