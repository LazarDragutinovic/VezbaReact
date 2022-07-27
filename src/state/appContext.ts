import React, { createContext } from "react";
import action from "./action";
import { appState } from "./appState";

interface appContextProps {
    state:appState,
    dispatch: React.Dispatch<action>
}

const appContext = createContext<appContextProps | null>(null);


export default appContext;