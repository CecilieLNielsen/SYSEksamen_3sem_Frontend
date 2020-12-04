import {useState, useEffect} from 'react'
import flightFacade from './flightFacade'
// Henter alle fly ud
function GetFlights() {
    const init = [{
      flightId: "loading",
      departure: "loading",
      arrival: "loading",
      destinationAirport: "loading",
      takeoffAirport: "loading",
      price: "loading"
    }];
  
    const [flightData, setFlightData] = useState(init);
  
    useEffect(() => {
      setFlightData(flightFacade.getFlights())
      //flightFacade.getFlights().then(data => setFlightData(data));
    }, []);
  
    return (
      <div>
        <br></br>
        <h2>List of all flights</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              {Object.keys(flightData[0]).map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {flightData.map((flight, index) => <tr key={index}><td>{flight.flightId}</td><td>{flight.departure}</td><td>{flight.arrival}</td><td>{flight.destinationAirport}</td><td>{flight.takeoffAirport}</td><td>{flight.price} DKK</td></tr>)}
          </tbody>
        </table>
      </div>
    );
  };

  export default GetFlights;