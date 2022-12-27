import React, { createContext, useContext, useReducer } from "react";
import { locationReducer } from "./Reducer";

const Context = ({ children }) => {
	const StateContext = createContext();
	// create a reducer to handle all the location state
	const [locationState, locationDispatch] = useReducer(locationReducerr, {
		global: false,
		nigeria: true,
		uk: false,
		ghana: false,
		uganda: false,
	});

	return (
		<StateContext.Provider value={{ locationReducer, locationDispatch }}>
			{children}
		</StateContext.Provider>
	);
};

export default Context;

export const useStateContext = () => useContext(StateContext);
