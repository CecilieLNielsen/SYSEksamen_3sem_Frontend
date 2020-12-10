import { useEffect, useState } from "react";
import CityDetail from './CityDetail'
import flightFacade from "./flightFacade";

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
  
  const handleClick = (flight) => {
    console.log(flight);
  };
  const headers = flights.length > 0 ? Object.keys(flights[0]): [];
  headers.push("")

  if (flights.length > 0 && flights[0].flightId !== 0) {
    return (
      <div>
        <br/>
        <br/>
        <h3>Available flights</h3>
        <CityDetail cityString={filter.to} />
       
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => 
            <tr key={index}>
              <td>{flight.flightId}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.destinationAirport}</td>
              <td>{flight.takeoffAirport}</td>
              <td>{flight.price} DKK</td>
              <td><input type="button" class="btn btn-primary" onClick={() =>  {handleClick(flight)}} value="Book this flight" /></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div></div>
    );
  }
}

export default SearchResult;