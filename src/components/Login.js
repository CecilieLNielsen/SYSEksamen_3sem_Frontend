import {useState} from 'react'

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

export default LogIn;