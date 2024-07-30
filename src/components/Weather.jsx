import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'


function Weather() {
  const search = async (city)=>{
    if(city===""){
      alert("Enter City Name")
      return;
    }

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
      "01d": 'src\assets\clear.png',
      "01n": 'src\assets\clear.png',
      "02d": 'src\assets\cloud.png',
      "02n": 'src\assets\coud.png',
      "03d": 'src\assets\coud.png',
      "03n": 'src\assets\coud.png',
      "04d": 'src\assets\drizzle.png',
      "04n": 'src\assets\drizzle.png',
      "09n": 'src\assets\rain.png',
      "09d": 'src\assets\rain.png',
      "10d": 'src\assets\rain.png',
      "10n": 'src\assets\rain.png',
      "13d": 'src\assets\snow.png',
      "13n": 'src\assets\snow.png',
    }

    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || 'src\assets\clear.png';
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })

    } catch(error) {
        setWeatherData(false);
        console.error("Error in Fetching data");
    }
  }

  useEffect(()=>{
    search("New York");
  },[])
  
  return (
  <>
  <div className="pop">
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search'/>
            <img src="src\assets\search.png" alt="" onClick={()=>search(inputRef.current.val)} />
        </div>
        {weatherData?<>

          <img src={weatherData.icon} alt="" className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
          <div className="col">
            <img src="src\assets\humidity.png" alt="" />
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src="src\assets\wind.png" alt="" />
            <div>
              <p>{weatherData.windSpeed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
        </>:<></>}
    </div>
  </div>
  </>    
  )
}

export default Weather