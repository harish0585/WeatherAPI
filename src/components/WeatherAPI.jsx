import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../redux/actions/weatherapiActions'
import styles from "./Weather.module.css";

const WeatherAPI = () => {
  
  const dispatch = useDispatch()
  const {data, isLoading, isError, isUpdated} = useSelector(state => state.data)
  console.log(data, "BROWSER data");

  const [city, setCity] = useState("kurnool");

  useEffect(() => {
    dispatch(getApiData("kurnool"))
  }, [])

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

  const handleChange=(e)=>{
    // const query=e.target.value
    // if(query){
    //   const filteredCities=getCitiesFromJsonBasedOnQuery({query:e.target.value,wantSubstringCities:false})
    //   console.log(filteredCities,"filteredCities")
    //   setCitiesToBeShown(filteredCities)
    // }
    setCity(e.target.value)
  }

  return (
    <>
    <div className={styles.weather}>
      <h1>Weather API</h1>
      <span className={styles.place}> <i className="fa fa-map-marker" aria-hidden="true"></i></span>
     <span className={styles.find} onClick={handleData}><i className="fa fa-search"></i></span>
      <input type="text" value={city} className={styles.enter} placeholder='Enter city name' onChange={handleChange} onKeyDown={(event) => handleKeyDown(event)}/>
      {/* <button onClick={handleData}>Search</button> */}
      <h3>City: {data?.name}</h3>
      <h3>Temp: {data?.main?.temp}</h3>

      <div className={styles.week}>
       <div className={styles.day}>
        Monday
        <br/>
        28<span>&#xb0;</span>19<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDKPJ-ZGn2eSCuo70wLqXMCjQA1xVfDJtuA&usqp=CAU" alt="cloudy" />
        <br/>
        Cloudy
       </div>
       <div className={styles.day}>
        Tuesday
        <br/>
        27<span>&#xb0;</span>15<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDKPJ-ZGn2eSCuo70wLqXMCjQA1xVfDJtuA&usqp=CAU" alt="cloudy" />
        <br/>
        Cloudy
       </div>
       <div className={styles.day}>
        Wednesday
        <br/>
        30<span>&#xb0;</span>21<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlSYk-EECawtXGlsc_Rq6OVEeyV-5HmA8Lw&usqp=CAU" alt="sunny" />
        <br/>
        Sunny
       </div>
       <div className={styles.day}>
        Thursday
        <br/>
        26<span>&#xb0;</span>15<span>&#xb0;</span>
        <br/>
        <img src="https://media.baamboozle.com/uploads/images/72687/1620577970_8547.jpeg" alt="rain" />
        <br/>
        Rain
       </div>
       <div className={styles.day}>
        Friday
        <br/>
        29<span>&#xb0;</span>19<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlSYk-EECawtXGlsc_Rq6OVEeyV-5HmA8Lw&usqp=CAU" alt="sunny" />
        <br/>
        Sunny
       </div>
       <div className={styles.day}>
        Saturday
        <br/>
        31<span>&#xb0;</span>16<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlSYk-EECawtXGlsc_Rq6OVEeyV-5HmA8Lw&usqp=CAU" alt="sunny" />
        <br/>
        Sunny
       </div>
       <div className={styles.day}>
        Sunday
        <br/>
        28<span>&#xb0;</span>19<span>&#xb0;</span>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDKPJ-ZGn2eSCuo70wLqXMCjQA1xVfDJtuA&usqp=CAU" alt="cloudy" />
        <br/>
        Cloudy
       </div>
      </div>
      
      <br/>
      <div className={styles.PressHumid}>
      <h3 className={styles.pressure}>Pressure: <br/>{data?.main?.pressure}</h3>
      <h3 className={styles.pressure}>Humidity: <br/>{data?.main?.humidity}</h3>
      </div>
      
      <br/>
      <div className={styles.PressHumid2}>
      <h3 className={styles.pressure}>Sunrise: 
      <br/>
      5.00AM</h3>
      <h3 className={styles.pressure}>Sunset: 
      <br/>
      6.00PM</h3>
      </div>

      <div>
      <img className={styles.sunriseset} src="https://i.ibb.co/SrXmVMB/riseset.jpg" alt="riseset" />
      </div>
      </div> 
    </>
  )
}

export default WeatherAPI
