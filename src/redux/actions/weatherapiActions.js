import axios from "axios";
import { WEATHER_API_FAILURE, WEATHER_API_REQUEST, WEATHER_API_SUCCESS } from "../constants/weatherapiConstants"


export const getApiData = (city) => async(dispatch) => {
    try {
      dispatch({ type: WEATHER_API_REQUEST});

    let apiKey = "045875faf6500e2b08e352de604e5d85";

    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    console.log(data);
    
    dispatch({ type: WEATHER_API_SUCCESS, payload: data })

     } catch(error) {
       dispatch({
        type: WEATHER_API_FAILURE,
        payload: error.message
       })
    }
}