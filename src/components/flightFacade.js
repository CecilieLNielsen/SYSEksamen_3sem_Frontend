import facade from './loginFacade';
import { baseURL } from "../settings"

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function flightFacade() {
  const fetchData = (url, method, body) => {
    const options = facade.makeOptions(method, true, body); //True add's the token
    return fetch(baseURL + url, options).then(handleHttpErrors);
  }

  const getFlights = () => {
    const data = fetchData("/api/flight", "GET");
    return data;
  }

  const getFlightsByFilter = (filter) => {
    const newFilter = {
      ...filter, 
      'departure': dateToString(filter.departure), 
      'arrival': dateToString(filter.arrival)
    };
    const data = fetchData("/api/flight/all", "POST", newFilter);
    return data;
  }

  const getFlightByDestinationId = (id) => {
    const data = fetchData("/api/flight/destination/" + id, "GET");
    return data;
  }

  const makeBooking = (body) => {
    const data = fetchData("/api/booking/book", "POST", body)
      .then(data => console.log(data));
    return data;
  }

  const dateToString = (date) => {
    if (date === null) return date; 
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return {
    getFlights,
    getFlightsByFilter,
    getFlightByDestinationId,
    makeBooking

  }
}

const flight = flightFacade();
export default flight;
