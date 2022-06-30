import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../redux/actions/weatherapiActions'
import styles from "./Weather.module.css";

const WeatherAPI = () => {
  
  const dispatch = useDispatch()
  const {data, isLoading, isError, isUpdated} = useSelector(state => state.data)
  console.log(data, "BROWSER data");

  const [city, setCity] = useState("");

  const handleData = () => {
     dispatch(getApiData(city))
     setCity("");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     dispatch(getApiData(city));
     setCity("");
    }
  }

  return (
    <>
      <h1>Weather API</h1>
      <span className={styles.place}> <i className="fa fa-map-marker" aria-hidden="true"></i></span>
     <span className={styles.find} onClick={handleData}><i className="fa fa-search"></i></span>
      <input type="text" value={city} className={styles.enter} placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} onKeyDown={(event) => handleKeyDown(event)}/>
      {/* <button onClick={handleData}>Search</button> */}
      <div>{data?.name}</div>
      <div>{data?.main?.temp}</div>
    </>
  )
}

export default WeatherAPI
