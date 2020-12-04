import { useEffect, useState } from "react"
import flightFacade from "./flightFacade";

function SearchResult({ filter }) {
  const init = [{
    flightId: 0,
    departure: "",
    arrival: "",
    destinationAirportName: "",
    takeoffAirportName: "",
    price: 0
  }
  ];
  const [flights, setFlights] = useState(init);

  useEffect(() => {
    flightFacade.getFlightsByFilter(filter).then(data => setFlights(data));
  }, [filter]);
  if (flights[0].flightId !== 0) {
    return (
      <div>
        <h2>Available flights</h2>
        {flights.map((flight) => <p key={flight.flightId} >From: {flight.destinationAirportName}, To: {flight.takeoffAirportName}, Departure: {flight.departure}, Arrival: {flight.arrival}, Price: {flight.price} </p>)}
      </div>
    )
  } else {
    return (
      <div>
        
      </div>
    );
  }

}

export default SearchResult;