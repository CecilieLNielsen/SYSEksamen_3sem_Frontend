import React from 'react';
import {useState, useEffect} from 'react'
import flightFacade from './flightFacade';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function BookFlight () {

    const init = [{
        userId: "",
        flightId: ""
    }];

    const nb = { userId: "", flightId: ""};
    const [booking, setBooking] = useState({...nb})
    let [isBlocking, setIsBlocking] = useState(false);
    
    const handleChange = e => {
        const { id, value } = e.target;
        setBooking({ ...booking, [id]: value });
        setIsBlocking(true);
        
      };
      const handleSubmit = e => {
        e.preventDefault();
        flightFacade.makeBooking(booking);
        setBooking({...nb});
        setIsBlocking(false);
        
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
                <button  onClick={handleSubmit} >Book it!</button>
            </Form>
            </Container>
        </div>
    )


}

export default BookFlight;