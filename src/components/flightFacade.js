import facade from './loginFacade';
import {baseURL} from "../settings"

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function flightFacade() {
  const fetchData = (url) => {
    const options = facade.makeOptions("GET", true); //True add's the token
    return fetch(baseURL + url, options).then(handleHttpErrors);
  }
  const getFlights = () => {
    // MOCK
    const data = [
      {
        flightId: 1,
        departure: "09:32:49",
        arrival: "16:19:02",
        destinationAirport: "NY Airport",
        takeoffAirport: "CPH Airport",
        price: 932
      },
      {
        flightId: 2,
        departure: "19:57:00",
        arrival: "02:10:42",
        destinationAirport: "Alaska Airport",
        takeoffAirport: "NY Airport",
        price: 324
      },
      {
        flightId: 3,
        departure: "00:42:53",
        arrival: "00:10:43",
        destinationAirport: "CPH Airport",
        takeoffAirport: "Sidney Airport",
        price: 3204
      }
    ]
    // PROD
    //const data = fetchData("/api/flight/all");
    return data;
  }

  const getFlightByDestinationId = (id) => {
    const data = fetchData("/api/flight/destination/" + id);
    return data;
  }
  
  return {
    getFlights,
    getFlightByDestinationId,
  
  }
}

const flight = flightFacade();
export default flight;
