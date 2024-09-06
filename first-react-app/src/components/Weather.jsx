import { useState } from 'react'
import CheckWeather from "./CheckWeather"
import Temperature from "./Temperature"

function Weather() {
  const [weather, setWeather] = useState('sunny')
  const [tempCelcius, setTempCelcius] = useState(27)

  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather)
    setTempCelcius(newTemp)
  }

  return(
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>
      <div>
        <strong>{weather}</strong> with a temp of <Temperature temp={tempCelcius} units="F" />
      </div>
      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  )
}

export default Weather