import { useEffect, useState } from "react"

function SearchResult({ searchBody , }) {

    const [flights, setFlights] = useState([]);

    const postBody = {
        "destination_to": searchBody.destinationTo
    }

    
    const makeOptions = (method, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                'Origin': '*'
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts
    }
    const fetchData = () => {
        const options = makeOptions("post", postBody);
        fetch("https://hoooya.dk/devops-starter/api/flights", options)
        .then(res => res.json())
        .then(data => setFlights(data))
    }
    
    useEffect(fetchData, [])
    return (
        <div>
            <h2>Success</h2>
            {flights.map((flight, index) => {
                return <p key={index} >{flight.destination_from}, {flight.destination_to}, {flight.price} {} </p>
            })}
        </div>

    )
}

export default SearchResult;