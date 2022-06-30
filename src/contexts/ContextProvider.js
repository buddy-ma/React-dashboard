import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false, 
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    // useStateSnippet
    const [activeMenu, setActiveMenu] = useState(true);
    // To open the poppus such as notifications and profile in navbar
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }
    return (<StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);