import { useEffect, useState } from "react"

function CityDetail({ cityString }) {

    let [cityInfo, setCityInfo] = useState();

    const city = () => {

        if (cityString.destination_to === "Barcelona") {
            return "Q1492"
        } else if (cityString.destination_to === "Lissabon") {
            return "Q597"
        } else if (cityString.destination_to === "Firenze") {
            return "Q2044"
        }
    }

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8080/jpareststarter/api/citydetails/" + city())
                .then(res => res.json())
                .then(data => setCityInfo(data))
        }
        fetchData()
    }, [])
    return (
        <div>
            {cityInfo !== undefined &&

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

            }
        </div>
    )
}

export default CityDetail;