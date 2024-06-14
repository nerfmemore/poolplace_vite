import React, { createContext, useContext, useState } from "react";


const CityContext = createContext();

export const CityProvider = ({children, defaultCity}) => {
    const [selectedCity, setSelectedCity] = useState(defaultCity);

    return (
        <CityContext.Provider value = {{selectedCity, setSelectedCity}}>
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext);