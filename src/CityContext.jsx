import React, { createContext, useContext, useEffect, useState } from "react";


const CityContext = createContext();

export const CityProvider = ({children, defaultCity}) => {
    const defaultProp = defaultCity;
    const storedCity = localStorage.getItem('selectedCity');
    
    const [city, setCity] = useState(storedCity || defaultProp);

    useEffect(() => {
        localStorage.setItem('selectedCity', city)
    })

    return (
        <CityContext.Provider value = {{city, setCity}}>
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext);