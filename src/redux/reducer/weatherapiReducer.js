
import React from 'react'
import { WEATHER_API_FAILURE, WEATHER_API_REQUEST, WEATHER_API_SUCCESS, WEATHE_API_DATA_RESET } from '../constants/weatherapiConstants'

const initState = {
    data: {},
    isLoading: false,
    isError : false,
    isUpdated: false
}

export const weatherapiReducer = (state = initState, action) => {
  switch(action) {
    
    case WEATHER_API_REQUEST:
        return {
            ...state,
            loading: true
        }

    case WEATHER_API_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            isUpdated: true
        }

    case WEATHER_API_FAILURE:
        return {
            ...state,
            error: action.payload,
            isError: true,
            isLoading: false
        }

    case WEATHE_API_DATA_RESET:
        return {
            ...state,
            isUpdated: false
        }

    default:
        return state
  }
}

