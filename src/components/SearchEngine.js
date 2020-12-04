import { useState } from "react";

function SearchEngine({filter, setFilter}) {
  const [searchFilter, setSearchFilter] = useState(filter);

  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSearchFilter({ ...searchFilter, [name]: value });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFilter(searchFilter);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>From</label>
        <input name="from" placeholder="Spain" onChange={handleOnChange} />

        <label>To</label>
        <input name="to" placeholder="England" onChange={handleOnChange}/>
         
        <label>Arrival date</label>
        <input name="arrival" placeholder="2021-01-01" onChange={handleOnChange} />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default SearchEngine;