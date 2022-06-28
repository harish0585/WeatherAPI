import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../redux/actions/weatherapiActions'

const WeatherAPI = () => {
  
  const dispatch = useDispatch()
  const {data, isLoading, isError, isUpdated} = useSelector(state => state.data)
  
  const [city, setCity] = useState("");

  const handleData = () => {
     dispatch(getApiData(city))
     setCity("");
  }

  return (
    <div>
      <h1>Weather API</h1>
      <input type="text" value={city} placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleData}>Search</button>
      <div>{data.name}</div>
    </div>
  )
}

export default WeatherAPI
