import {useState} from 'react'

import loginfacade from './loginFacade'
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'

function LogIn(props) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        loginfacade.login(loginCredentials.username, loginCredentials.password); 
        
    }

    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <Container>
            <h2>Login</h2>
            <Form onChange={onChange} >
            <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" id="username" />
            </Form.Group>


            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" />
            </Form.Group>
                <button onClick={performLogin}>Login</button>
            </Form>
            </Container>
        </div>
    )
}

export default LogIn;