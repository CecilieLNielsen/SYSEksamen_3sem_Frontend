const SearchEngine = (numberOfRows) => {
  return (
    <div>
      <label for="fromDestination">From</label>
      <input type="text" id="fromDestinationId" name="fromDestination" />
      <label for="toDestination">To</label>
      <input type="text" id="toDestinationId" name="toDestination" />

      <select name="numberOfPersons" id="numberOfPersonsId">
        {
          //make look for int i = 0 i < numberOfRows i++
        }
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <input type="submit" value="Search for flight" />
    </div>
  );
};

export default SearchEngine;