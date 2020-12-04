import { useEffect, useState } from "react"

function CityDetail ({ cityString }) {

    let [cityInfo, setCityInfo] = useState();

    const city = () => {
        if (cityString === "Barcelona"){
            return "Q1492"
        } else if (cityString === "Lisbon") {
            return "Q597"
        } else if (cityString === "Firenze") {
            return "Q2044"
        }
    }

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8080/jpareststarter/api/citydetails/" + city)
            .then(res => res.json())
            .then(data => setCityInfo(data))
        }
        fetchData()
    },[])
    return (
        <div>
            {console.log(cityInfo)}
        </div>
    )
}

export default CityDetail;