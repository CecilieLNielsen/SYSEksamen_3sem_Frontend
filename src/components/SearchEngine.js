import { useEffect, useState } from "react";

function SearchEngine({setHasSearched, searchBody, setSearchBody}) {
  

  useEffect(() => {
   setHasSearched(false)
  }, [])

  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setSearchBody({ ...searchBody, [name]: value });
    setHasSearched(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setHasSearched(true);
    console.log(searchBody);

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label >Destination From</label>
        <select name="destinationFrom" onChange={handleOnChange} >
          <option>Vælg destination</option>
          <option>Copenhagen</option>
        </select>

        <label>Destination To</label>
        <select name="destinationTo" onChange={handleOnChange}>
          <option>Vælg destination</option>
          <option>Barcelona</option>
          <option>Lissabon</option>
          <option>Firenze</option>
        </select>

        <label>How many passengers</label>
        <input type="number" name="passengers" onChange={handleOnChange} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default SearchEngine;