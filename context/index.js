import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = (props) => {
    const [drawSettings, setDrawSettings] = useState({});
    const contextValue = {
        drawSettings,
    };
    return <Context.Provider value = { contextValue } {...props }
    />;
};

export default Context;