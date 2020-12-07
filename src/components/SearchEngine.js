import { useState } from "react";
import Calendar from "./Calendar"

function SearchEngine({filter, setFilter}) {
  const [tempFilter, setTempFilter] = useState(filter);

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
        <label>From</label>
        <input name="from" placeholder="Spain" onChange={handleOnChange} />

        <label>To</label>
        <input name="to" placeholder="England" onChange={handleOnChange}/>
         
        <label>Pick date</label>
        <Calendar arrival={tempFilter.arrival} onArrivalChange={handleArrivalChange} departure={tempFilter.departure} onDepartureChange={handleDepartureChange}/>

        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchEngine;