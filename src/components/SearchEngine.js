import { useState, useEffect } from "react";
import Calendar from "./Calendar"
import countryFacade from "./countryFacade"

function SearchEngine({ filter, setFilter }) {
  const countriesInit = [{
    countryName: "Loading"
  }]
  const [tempFilter, setTempFilter] = useState(filter);
  const [countries, setCountries] = useState(countriesInit);

  useEffect(() => {
    if (countries[0].countryName === "Loading") {
      countryFacade.getCountries().then(data => setCountries(data));
    }
  })

  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setTempFilter({ ...tempFilter, [name]: value });
  }

  const handleArrivalChange = (date) => {
    setTempFilter({ ...tempFilter, 'arrival': date });
  }

  const handleDepartureChange = (date) => {
    setTempFilter({ ...tempFilter, 'departure': date });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFilter(tempFilter);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <br />
        <h2>Search for a flight</h2>
        <br />
        <table className="searchTable">
          <tbody>
            <tr>
              <td className="searchForm">
                <b className="mr">From</b>
                <select name="from" onChange={handleOnChange}>
                  {countries.map((country) => <option key={country.countryName} value={country.countryName}>{country.countryName}</option>)}
                </select>
              </td>
              <td className="searchForm">
                <b className="mr">To</b>
                <select name="to" onChange={handleOnChange}>
                  {countries.map((country) => <option key={country.countryName} value={country.countryName}>{country.countryName}</option>)}
                </select>
              </td>
              <td className="searchForm">
                <Calendar title="Date" arrival={tempFilter.arrival} onArrivalChange={handleArrivalChange} departure={tempFilter.departure} onDepartureChange={handleDepartureChange} />
              </td>
              <td>
                <input type="submit" className="btn btn-primary" value="Search" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SearchEngine;