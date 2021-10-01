import { combineReducers } from 'redux'

// these are our initial isochrones settings
const initialIsochronesControlsState = {
  userInput: "",
  geocodeResults: [],
  isochrones: {
    results: []
  },
  isFetching: false,
  isFetchingIsochrones: false,
  settings: {
    isochronesCenter: {},
    range: {
      max: 500,
      value: 60
    },
    interval: {
      max: 60,
      value: 10
    },
    mode: "car",
    rangetype: "distance",
    traffic: "disabled"
  }
}

// our reducer constant returning an unchanged or updated state object depending on the users action, many cases will follow
const isochronesControls = (state = initialIsochronesControlsState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// creates a root reducer and combines different reducers if needed
const rootReducer = combineReducers({
  isochronesControls
})

export default rootReducer