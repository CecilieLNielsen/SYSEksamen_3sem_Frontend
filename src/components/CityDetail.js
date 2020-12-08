import { useEffect, useState } from "react"

function CityDetail({ country }) {

  let [cityInfo, setCityInfo] = useState();

  const city = () => {
    switch(country) {
      case "Barcelona": return "Q1492";
      case "Lissabon": return "Q597";
      case "Firenze": return "Q2044";
      default: return "Q2044"; // Default forhindrer systemet i at gå ned hvis landet ikke findes i disse prædefineret muligheder
    }
  }

  useEffect(() => {
      fetch("http://localhost:8080/jpareststarter/api/citydetails/" + city())
        .then(res => res.json())
        .then(data => { 
          if(data.code) { // Da der forekommer 404 - måske grundet til forskellige branches
            setCityInfo(undefined)
          } else {
            setCityInfo(data)
          }
        });
  }, []);
  
  if (cityInfo !== undefined) {
    console.log(cityInfo)
    return (
      <div>
        <table>
          <tr>
            <th>Country:</th>
            <td>{cityInfo.data.country}</td>
          </tr>
          <tr>
            <th>code:</th>
            <td>{cityInfo.data.countryCode}</td>
          </tr>
          <tr>
            <th>Region:</th>
            <td>{cityInfo.data.region}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td>{cityInfo.data.name}</td>
          </tr>
          <tr>
            <th>Population:</th>
            <td>{cityInfo.data.population}</td>
          </tr>
        </table>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default CityDetail;