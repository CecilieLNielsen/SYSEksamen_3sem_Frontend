import { useEffect, useState } from "react";
import CityDetail from './CityDetail'
import flightFacade from "./flightFacade";
import flight from "./flightFacade";

function SearchResult({ filter }) {
  const init = [{
    flightId: 0,
    departure: "",
    arrival: "",
    destinationAirport: "",
    takeoffAirport: "",
    price: 0
  }
  ];
  const [flights, setFlights] = useState(init);

  useEffect(() => {
    flightFacade.getFlightsByFilter(filter).then(data => setFlights(data));
  }, [filter]);
  
  if (flights.length > 0 && flights[0].flightId !== 0) {
    return (
      <div>
        <h2>Available flights</h2>
        <CityDetail cityString={filter.to} />
        <br />
        <br />
        {flights.map((flight) => <p key={flight.flightId} >From: {flight.destinationAirport}, To: {flight.takeoffAirport}, Departure: {flight.departure}, Arrival: {flight.arrival}, Price: {flight.price} </p>)}
      </div>
    )
  } else {
    return (
      <div></div>
    );
  }
}

export default SearchResult;