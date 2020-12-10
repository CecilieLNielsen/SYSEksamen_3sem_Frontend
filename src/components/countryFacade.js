import facade from './loginFacade';
import { baseURL } from "../settings"

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function countryFacade() {
  const fetchData = (url, method, body) => {
    const options = facade.makeOptions(method, true, body); //True add's the token
    return fetch(baseURL + url, options).then(handleHttpErrors);
  }

  const getCountries = () => {
    const data = fetchData("/api/country/all", "GET");
    return data;
  }

  return {
    getCountries,
  }
}

const country = countryFacade();
export default country;
