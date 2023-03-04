import { useEffect, useState } from "react"

const Wheather = () => {
    const [weather_data, setWeatherData] = useState([])
    const [search, setSearch] = useState("")
    const [isvalid, setValid] = useState(true)
    const [lastCity, setLastCity] = useState([])
    // const []
    const Weather_Search = () => {
        // let search = e.target.value
        if (search === "") {
            setValid(true)
            setWeatherData([])
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1193086c4eb1889bea40ec2ad676b791`).then((res) => {
                return res.json()
            }).then((data) => {
                if (data.cod === 200) {
                    setValid(true)
                    setWeatherData([data])
                    if (lastCity.length === 3) {
                        lastCity.push(search)
                        lastCity.shift()
                        setLastCity([...lastCity])
                    } else {
                        lastCity.push(search)
                        setLastCity([...lastCity])
                    }
                } else {
                    setValid(false)
                    setWeatherData([])
                }

            }).catch((e) => {
                console.log(e)
            })
        }
        // console.log(search)

    }

    console.log(weather_data)

    return (
        <>
            <div className="main-container">
            <div className="inner-div">
               
                <input type="text" placeholder="Enter City name" id="search" onChange={(e) => { setSearch(e.target.value) }} />
                {/* <input type="text" placeholder="Enter City name" id="search" onChange={(e) => { Weather_Search(e) }} /> */}
                <button onClick={Weather_Search} className="btn">Search</button>
                {!isvalid ? <h2 style={{color:"red", margin:"auto"}}>Enter a Valid City</h2> :
                    weather_data.map((items, i) => {
                        return (
                            <div key={i} className="city-details">
                                <p>Weather Details of City:{items.name}</p>
                                <p>Current Temperature: {items.main.temp}</p>
                                <p>Minimum Temparature : {items.main.temp_min}</p>
                                <p>Maximum Temparature : {items.main.temp_max}</p>
                                <p>Humidity: {items.main.humidity}</p>
                                <p>Sea level: {items.timezone}</p>
                                <p>Ground level: {items.visibility}</p>

                            </div>
                        )

                    })} 
                </div>
                
                <div className="lastcities">
                    <h2 style={{color:"black"}}>Last 3 Cities are</h2>
                    {lastCity.map((items, i) => {
                        return (

                            <div key={i} className="cities">
                                {/* <p>Last 3 Cities</p> */}

                                <p>{items}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default Wheather