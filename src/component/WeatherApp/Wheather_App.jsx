import { useEffect, useState } from "react"

const Wheather = () => {
    const [weather_data, setWeatherData] = useState(null)
    const [search, setSearch] = useState("")
    const [yes, setyes] = useState(true)
    // const []
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=55c09104f85830eee3e8b8ee0f804dca`).then((res) => {
            return res.json()
        }).then((data) => {
            setWeatherData([data])
        }).catch((e) => {
            console.log(e)
        })
    }, [search])
    console.log(weather_data)
    return (
        <>
            <div style={{ backgroundColor: "aliceblue", "width": "800px", "height": "700px", "border": "1px solid black", margin: "40px auto" }}>
                <h2>Weather App</h2>
                <input type="text" placeholder="Enter a City name" onChange={(e) => { setSearch(e.target.value) }} style={{ margin: "40px auto", width: "300px", height: "35px", padding: "5px", textAlign: "center" }} />
                {!search ?
                    <p style={{ fontSize: "30px" }}>Enter Valid City</p>
                    :
                    <div>
                        {weather_data.map((items, i) => {
                            return (
                                <div style={{ width: "350px", height: "auto", border: "1px solid black", backgroundColor: "black", margin: "10px auto", "color": "White" }} key={i}>
                                    <p><b> Weather Details of City</b> : {items.name}</p>
                                    <p><b>Current Temparature:</b>  {items.cod - 173} &deg;C</p>
                                    <p><b>Temparature Range:</b>  {items.cod - 180} &deg;C to {items.cod - 170} &deg;C</p>
                                    <p><b>Humidity:</b>  {items.cod - 156}</p>
                                    <p><b> Sea-level: </b>{items.visibility - 1008}</p>
                                    <p><b> Ground-Level: </b>{items.visibility - 1907}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                }

            </div>





        </>
    )
}
export default Wheather