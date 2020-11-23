import facade from './loginFacade';
import {baseURL} from "./settings"

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function demoFacade() {
  const fetchData = (url) => {
    const options = facade.makeOptions("GET", true); //True add's the token
    return fetch(baseURL + url, options).then(handleHttpErrors);
  }
  const getUser = () => {
    const data = fetchData("/api/info/user");
    return data;
  }

  const getAdmin = () => {
    const data = fetchData("/api/info/admin");
    return data;
  }
  const getData = () => {
    const data = fetchData("/api/info/data");
    return data;
  }
  return {
    getUser,
    getAdmin,
    getData
  }
}

const demo = demoFacade();
export default demo;
