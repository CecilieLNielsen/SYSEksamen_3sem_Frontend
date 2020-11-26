import React, { useState, useEffect } from "react"
import { Route, NavLink, Switch } from "react-router-dom";
import DatePicker from "react-datepicker";
import facade from "./loginFacade";
import flightFacade from "./flightFacade";
import './css/NavbarStyle.css';
import header from "./images/header.jpg";
import basket from "./images/basket.svg"
import madrid from "./images/Madrid.jpg";
import paris from "./images/Paris.jpg";
import reykjavik from "./images/Reykjavik.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/myStyles.css';
//import SearchEngine from "./components/SearchEngine.js"


const Header = (props) => {
  return (
    <ul className="header">
      <li class="li-left"><NavLink exact activeClassName="active" to="/">Startpage</NavLink></li>
      <li class="li-left"><NavLink activeClassName="active" to="/searchpage">Search for flight</NavLink></li>
      <li class="li-left"><NavLink activeClassName="active" to="/seeallpage">See all flights</NavLink></li>

      <li class="li-right"><NavLink activeClassName="active" to="/myprofilepage">My profile</NavLink></li>
      {!props.loggedIn ?
        (<li class="li-right"><NavLink activeClassName="active" to="/loginpage">Log in</NavLink></li>) :
        (<li class="li-right"><button onClick={props.logout}>Log out</button></li>)}
    </ul>
  );
};

const Home = () => {
  return (
    <div>
       <br/>
      <h1>Welcome (navn) </h1>
     
      <br/>
      <br/>
      <br/>
      <h4>Destinations</h4>

    <br/>
    <br/>

      <div class="container">
        <div class="row">

          <div class="col-4">
            <div class="card my-card">
              <img src={madrid} class="card-img-top" alt="Madrid" />
              <div class="card-body">
                <h5 class="city-madrid">Madrid, Spain</h5>
                <p class="madrid-description">Madrid is the capital city of Spain, located right in the centre of the Iberian Peninsula. Its geographical location grants good communications of the city with other Spanish regions. As capital of the country, it is the seat to the Spanish government institutions and the city of residence of Spanish Royal family.</p>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="card my-card">
              <img src={paris} class="card-img-top" alt="Paris" />
              <div class="card-body">
                <h5 class="city-paris">Paris, France</h5>
                <p class="paris-description">Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro).</p>
              </div>
            </div>
          </div>
          
          <div class="col-4">
            <div class="card my-card">
              <img src={reykjavik} class="card-img-top" alt="Reykjavik" />
              <div class="card-body">
                <h5 class="city-reykjavik">Reykjavik, Iceland</h5>
                <p class="reykjavik-description">Reykjavik is by far the largest municipality in Iceland and as well the capital city of the country. The capital area has about a total of 60% of Iceland’s population, which is about 320.000 people. Reykjavik is the northernmost capital in the world. </p>
              </div>
            </div>
          </div>    
            </div>
          </div>
        </div>




    
  );
};

function LogIn(props) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    props.login(loginCredentials.username, loginCredentials.password);
  }

  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="Username" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )
}

const NoMatch = () => {
  return (
    <h1>This page does not exist!</h1>
  );
};

// Henter alle fly ud
const GetFlights = () => {
  const init = [{
    flightId: "loading",
    departure: "loading",
    arrival: "loading",
    destinationAirport: "loading",
    takeoffAirport: "loading",
    price: "loading"
  }];

  const [flightData, setFlightData] = useState(init);

  useEffect(() => {
    setFlightData(flightFacade.getFlights())
    //flightFacade.getFlights().then(data => setFlightData(data));
  }, []);

  return (
    <div>
      <br></br>
      <h2>List of all flights</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            {Object.keys(flightData[0]).map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {flightData.map((flight, index) => <tr key={index}><td>{flight.flightId}</td><td>{flight.departure}</td><td>{flight.arrival}</td><td>{flight.destinationAirport}</td><td>{flight.takeoffAirport}</td><td>{flight.price} DKK</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

const SearchEngine = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

function App() {
  const init = facade.loggedIn;
  const [loggedIn, setLoggedIn] = useState(init)

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
      <div class="my-container">
        <img class="my-image" src={header} alt="header" />
        <h1 class="my-image-text">Just Travel</h1>
      </div>
      <Header loggedIn={loggedIn} logout={logout}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/searchpage">
        <SearchEngine/>
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
