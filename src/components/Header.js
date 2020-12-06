import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <ul className="header">
            <li className="li-left"><NavLink exact activeClassName="active" to="/">Startpage</NavLink></li>
            <li className="li-left"><NavLink activeClassName="active" to="/searchpage">Search for flight</NavLink></li>
            <li className="li-left"><NavLink activeClassName="active" to="/seeallpage">See all flights</NavLink></li>
            <li className="li-left"><NavLink activeClassName="active" to="/bookflight">Book a flight</NavLink></li>

            <li className="li-right"><NavLink activeClassName="active" to="/myprofilepage">My profile</NavLink></li>
            {!props.loggedIn ?
                (<li className="li-right"><NavLink activeClassName="active" to="/loginpage">Log in</NavLink></li>) :
                (<li className="li-right"><button onClick={props.classNameogout}>Log out</button></li>)}
        </ul>
    )
}

export default Header;