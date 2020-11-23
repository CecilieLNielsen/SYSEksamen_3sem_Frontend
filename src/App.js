import React, { useState, useEffect } from "react"
import { Route, NavLink, Switch } from "react-router-dom";
import facade from "./loginFacade";
import demoFacade from "./demoFacade";
import './NavbarStyle.css';

const Header = () => {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/userpage">User page</NavLink></li>
      <li><NavLink activeClassName="active" to="/adminpage">Admin page</NavLink></li>
      <li><NavLink activeClassName="active" to="/datapage">Data page</NavLink></li>
      <li><NavLink activeClassName="active" to="/welcomepage">Welcome page</NavLink></li>
    </ul>
  );
};

const Home = () => {
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
      <h1>Hello! Just testing home!</h1>
      {!loggedIn ? (<LogIn login={login} />) : (<LoggedIn logout={logout} />)}
    </div>
  );
};

const User = () => {
  const [userData, setUserData] = useState("Loading...")

  useEffect(() => {
    demoFacade.getUser().then(data => setUserData(data.msg));
  }, []);

  return (
    <div>
      <h1>Hello! Just testing user!</h1>
      <h2>{userData}</h2>
    </div>
  );
};

const Admin = () => {
  const [adminData, setAdminData] = useState("Loading...")

  useEffect(() => {
    demoFacade.getAdmin().then(data => setAdminData(data.msg));
  }, []);

  return (
    <div>
      <h1>Hello! Just testing admin!</h1>
      <h2>{adminData}</h2>
    </div>
  );
};

const Data = () => {
  const init = { 
    chuck: "", 
    dad: "",
    insult:"",
    awesome:"",
    planet:""
   };

   const [dataData, setDataData] = useState(init)

  useEffect(() => {
    demoFacade.getData().then(data => setDataData(data));
  }, []);

  return (
    <div>
      <h1>Hello! Just testing data!</h1>
      <h2>{dataData.chuck}</h2>
      <h2>{dataData.dad}</h2>
      <h2>{dataData.insult}</h2>
      <h2>{dataData.awesome}</h2>
      <h2>{dataData.planet}</h2>
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
    <h1>Instructions to use this project</h1>
    <h5>1. Clone this project</h5>
    <h5>2. Change URL</h5>
    <h5>3. Add functionality</h5>
    <h5>3. Deploy</h5>
    </div>
  );
};

const NoMatch = () => {
  return (
    <h1>Hello! Just testing nomatch!</h1>
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
function LoggedIn(props) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => {
    facade.fetchData().then(data => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <button onClick={props.logout}>Logout</button>
    </div>
  )

}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/userpage">
          <User />
        </Route>
        <Route path="/adminpage">
          <Admin />
        </Route>
        <Route path="/datapage">
          <Data />
        </Route>
        <Route path="/welcomepage">
          <Welcome />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  )
}
export default App;
