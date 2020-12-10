import React from 'react';
import {useState, useEffect} from 'react'
import flightFacade from './flightFacade';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function BookFlight () {

    const init = {
        userId: "",
        flightId: ""
    };
    const [booking, setBooking] = useState(init)
    const [response, setResponse] = useState()
    
    const handleChange = e => {
        const { id, value } = e.target;
        setBooking({ ...booking, [id]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        const data = flightFacade.makeBooking(booking);
        data.then(data => setResponse(data.msg));
    };

    return (
        <div>
            <br></br>
            <Container>
            <p>Book your flight</p>
            <Form>
                <input id="flightId" placeholder="flightid" value = {booking.flightId}  onChange={handleChange}/>
                <br></br>
                <input id="userId" placeholder="userid" value = {booking.userId} onChange={handleChange}/>
                <br></br>
                <br></br>
                <button class="btn btn-primary" onClick={handleSubmit} >Book it!</button>
            </Form>
            <p>{response} </p>
            </Container>
        </div>
    )
}

export default BookFlight;