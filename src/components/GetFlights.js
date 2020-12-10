import {useState, useEffect} from 'react'
import flightFacade from './flightFacade'
import axios from "axios";
import Button from 'react-bootstrap/Button'
import BookFlight from './BookFlight'
import Container from 'react-bootstrap/Container'
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
    const [bookthis, setBookThis] = useState(false);
  
    useEffect(async () => {
      //const resulst = await axios('http://localhost:8080/jpareststarter/api/flight/all');
      //setFlightData(resulst.data);
      flightFacade.getFlights().then(data => setFlightData(data));
    }, []);

    const handleClick = e => 
    {
      setBookThis(true)
    };
  
    return (
      <div >
        <Container>
        <br></br>
        <h2>List of all flights</h2>
        
        <table className="table table-hover">
          <thead>
            <tr>
              {Object.keys(flightData[0]).map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {flightData.map((flight, index) => 
            <tr key={index}>
              <td>{flight.flightId}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.destinationAirport}</td>
              <td>{flight.takeoffAirport}</td>
              <td>{flight.price} DKK</td>
              <td><input type="button" class="btn btn-primary" onClick={handleClick} value="Book this flight" /></td>
            </tr>
            )}
          </tbody>
        </table>
        </Container>
        {bookthis ? <BookFlight/> : ""}
      </div>
    );
  };

  export default GetFlights;