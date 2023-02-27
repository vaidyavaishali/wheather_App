import { useEffect, useState } from "react"

const Wheather = () => {
    const [weather_data, setWeatherData] = useState([])
    const [History, setHistory] = useState("")
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=55c09104f85830eee3e8b8ee0f804dca`).then((res) => {
            return res.json()
        }).then((data) => {
            setWeatherData([data])
        }).catch((e) => {
            console.log(e)
        })
    }, [search])

    return (
        <>
        <h2>Weather App</h2>
            <input type="text" placeholder="Enter a City name" onChange={(e) => { setSearch(e.target.value) }} style={{ margin: "40px auto", width: "300px", height: "35px", padding: "5px" }} />
            {!search ?
                <p>Enter Valid City</p>
                :
                <div>
                    {weather_data.map((items, i) => {
                        return (
                            <div style={{ width: "300px", height: "auto", border: "1px solid black", backgroundColor: "grey", margin: "auto" }}>
                                <p>Weather Details of City : {items.name}</p>
                                <p>Current Temparature: {items.cod - 173} &deg;C</p>
                                <p>Temparature Range: {items.cod - 180} &deg;C to {items.cod - 170} &deg;C</p>
                                <p>Humidity: {items.cod - 156}</p>
                                <p>Sea-level:{items.visibility - 1008}</p>
                                <p>Ground-Level:{items.visibility - 1907}</p>
                            </div>
                        )
                    })
                    }
                </div>
            }





        </>
    )
}
export default Wheather